import axios, {AxiosInstance} from 'axios'
import * as querystring from 'querystring'
import {User, Pong, Options, Auth} from './types'
import ClientInterface from './interface'
import createUserAPI from '../user'


const handleError = (e: any) => {
    if(e.response) {
        return {
            ...e.response,
            status: e.response.status,
            body: {},
        }
    }
}

const BugoutClient = (
    bugoutToken: string | null,
    bugoutClientID: string | null, 
    options: Options,
    ): ClientInterface => {
// ToDo here must be request to auth api
    const broodClient: AxiosInstance = axios.create({baseURL: options.apiUrls.broodURL})
    const spireClient: AxiosInstance = axios.create({baseURL: options.apiUrls.spireURL})
    

    const ping = async (): Promise<Pong> => {
        const broodResponse = broodClient.get('/')
        const spireResponse = spireClient.get('/')

        const results = await Promise.all<any>([
        broodResponse.catch(handleError),
        spireResponse.catch(handleError),
    ])

    return {
        brood: {
            url: results[0].config.baseURL,
            code: results[0].status,
            body: results[0].body
        },
        spire: {
            url: results[1].config.baseURL,
            code: results[1].status,
            body: results[0].body

        }
    }
    }
    const createUser = async (
        email: string, 
        username: string, 
        password: string,
    ): Promise<User> => {
        const registrationForm = querystring.stringify({
            username,
            email,
            password
        }).toString()
        try {
            const userResponse = await broodClient.post<User>('/user', registrationForm)

            return userResponse.data;
        } catch(e) {
            throw e.response.data
        }
    }
    const verify = async (code: string): Promise<User> => {

        try {
            const verificationResponse = await broodClient.post<User>('/confirm');
            // this.personalInfo = verificationResponse.data
            return verificationResponse.data
        }
        catch (e) {
            throw e.response.data
        }
    }
    const login = async (username: User['username'], password: string): Promise<Auth> => {
        const loginUser = querystring.stringify({
            username,
            password
        }).toString() 
    
        try {
            const authInfoResponse = await broodClient.post<Auth>('/token', loginUser);
            broodClient.defaults.headers['authorization'] = `Bearer ${authInfoResponse.data.access_token}`
            spireClient.defaults.headers['authorization'] = `Bearer ${authInfoResponse.data.access_token}`
            return authInfoResponse.data;
        } catch(e) {
            throw e.response.data
        }
    }

    const setToken = (token: string): void => {
        
        try {
            broodClient.defaults.headers['authorization'] = `Bearer ${token}`
            spireClient.defaults.headers['authorization'] = `Bearer ${token}`

        } catch (e) {
            throw e.response.data
        }
    }

    return {
            ping,
            createUser,
            verify,
            login,
            setToken,
            user: () => createUserAPI(spireClient),
        }
    
}

export default BugoutClient
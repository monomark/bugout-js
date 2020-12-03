import {User, Pong, Auth} from './types'
import {UserApi} from '../user/interface'

interface ClientInterface {
        ping(): Promise<Pong>;
        createUser(username: string, email: string, password: string): Promise<User>;
        verify(code:string): Promise<User>;
        login(username: string, password: string): Promise<Auth>;
        setToken(token: string): void;
        user(): UserApi
}

export default ClientInterface
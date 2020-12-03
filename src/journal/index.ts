import {AxiosInstance} from 'axios'
import {Journal} from './type'
import {JournalsAPI} from './interface'
import {ActionResponse} from '../user/interface'

const getAllJournals = async (
    spireClient: AxiosInstance, 
): Promise<ActionResponse<Journal[]>> => {
    try {
        const journalResponse = await spireClient.get<{journals:Journal[]}>('/journals/')
        return {data: journalResponse.data.journals}
    } catch(e) {
        console.log(e)
        throw {
            error: e.response.data,
            status: e?.response?.status,
            message: 'Error getAllJournals'
        }
    }
}
const createJournal = async (
    spireClient: AxiosInstance, 
    name: string
): Promise<ActionResponse<Journal>> => {
    try { 
        const journalResponse = await spireClient.post<Journal>(`/journals/`, {name})
        return {data: journalResponse.data}
    } catch(e) {
        throw {
            error: e.response.data,
            status: e?.response?.status,
            message: 'Error createJournal'
        }
    }
}
const deleteJournal = async (
    spireClient: AxiosInstance, 
    id: string
): Promise<ActionResponse<Journal>> => {
    try { 
        const journalResponse = await spireClient.delete<Journal>(`/journals/${id}`)
        return {data: journalResponse.data}
    } catch(e) {
        throw {
            error: e.response.data,
            status: e?.response?.status,
            message: 'Error deleteJournal'
        }
    }
}

const createJournalsAPI = (spireClient: AxiosInstance):  JournalsAPI => (
    {
        getAllJournals: () => getAllJournals(spireClient),
        createJournal: (name: string) => createJournal(spireClient, name),
        deleteJournal: (id: string) => deleteJournal(spireClient, id),
    }
)

export default createJournalsAPI
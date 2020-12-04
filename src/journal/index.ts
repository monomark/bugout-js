import { AxiosInstance } from 'axios'
import { Journal } from '../types'
import { JournalsAPI, Response } from '../interfaces'

const getAllJournals = async (
    spireClient: AxiosInstance,
): Promise<Response<Journal[]>> => {
    try {
        const journalResponse = await spireClient.get<{journals:Journal[]}>('/journals/')
        return { data: journalResponse.data.journals }
    } catch (e) {
        throw {
            error: e.response.data,
            status: e?.response?.status,
            message: 'Error getAllJournals',
        }
    }
}
const createJournal = async (
    spireClient: AxiosInstance,
    name: string,
): Promise<Response<Journal>> => {
    try {
        const journalResponse = await spireClient.post<Journal>('/journals/', { name })
        return { data: journalResponse.data }
    } catch (e) {
        throw {
            error: e.response.data,
            status: e?.response?.status,
            message: 'Error createJournal',
        }
    }
}
const deleteJournal = async (
    spireClient: AxiosInstance,
    id: string,
): Promise<Response<Journal>> => {
    try {
        const journalResponse = await spireClient.delete<Journal>(`/journals/${id}`)
        return { data: journalResponse.data }
    } catch (e) {
        throw {
            error: e.response.data,
            status: e?.response?.status,
            message: 'Error deleteJournal',
        }
    }
}

const createJournalsAPI = (spireClient: AxiosInstance): JournalsAPI => (
    {
        getAllJournals: () => getAllJournals(spireClient),
        createJournal: (name: string) => createJournal(spireClient, name),
        deleteJournal: (id: string) => deleteJournal(spireClient, id),
    }
)

export default createJournalsAPI

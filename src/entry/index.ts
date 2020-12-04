import { AxiosInstance } from 'axios'
import { Entry, EntryMutable } from '../types'
import { EntryAPI, Response } from '../interfaces'

const getEntry = async (
    spireClient: AxiosInstance,
    journalId: string,
    entryId: string,
): Promise<Response<Entry>> => {
    try {
        const entryResponse = await spireClient.get<Entry>(`/journals/${journalId}/entries/${entryId}`)
        return { data: entryResponse.data }
    } catch (e) {
        throw {
            error: e.response.data,
            status: e?.response?.status,
            message: 'Error getEntry',
        }
    }
}

const createEntry = async (
    spireClient: AxiosInstance,
    journalId: string,
    entryData: EntryMutable,
):Promise<Response<Entry>> => {
    try {
        const entryResponse = await spireClient.post<Entry>(`/journals/${journalId}/entries`, entryData)
        return { data: entryResponse.data }
    } catch (e) {
        throw {
            error: e.response.data,
            status: e?.response?.status,
            message: 'Error createEntry',
        }
    }
}
const updateEntry = async (
    spireClient: AxiosInstance,
    journalId: string,
    entryId: string,
    entryData: EntryMutable,
): Promise<Response<Entry>> => {
    try {
        const entryResponse = await spireClient.put<Entry>(`/journals/${journalId}/entries/${entryId}`, entryData)
        return { data: entryResponse.data }
    } catch (e) {
        throw {
            error: e.response.data,
            status: e?.response?.status,
            message: 'Error updateEntry',
        }
    }
}
const deleteEntry = async (
    spireClient: AxiosInstance,
    journalId: string,
    entryId: string,
): Promise<Response<Entry>> => {
    try {
        const entryResponse = await spireClient.delete<Entry>(`/journals/${journalId}/entries/${entryId}`)
        return { data: entryResponse.data }
    } catch (e) {
        throw {
            error: e.response.data,
            status: e?.response?.status,
            message: 'Error deleteEntry',
        }
    }
}
const getEntriesByJournal = async (
    spireClient: AxiosInstance,
    journalId: string,
): Promise<Response<Entry[]>> => {
    try {
        const entriesResponse = await spireClient.get<{entries: Entry[]}>(`/journals/${journalId}/entries`)
        return { data: entriesResponse.data.entries }
    } catch (e) {
        throw {
            error: e.response.data,
            status: e?.response?.status,
            message: 'Error getEntries',
        }
    }
}
const searchEntriesByJournal = async (
    spireClient: AxiosInstance,
    journalId: string,
    query: string,
): Promise<Response<Entry[]>> => {
    try {
        const entriesResponse = await spireClient.get<Entry[]>(`/journals/${journalId}/search?q=${query}`)
        return { data: entriesResponse.data }
    } catch (e) {
        throw {
            error: e.response.data,
            status: e?.response?.status,
            message: 'Error searchEntries',
        }
    }
}

const createEntryAPI = (spireClient: AxiosInstance): EntryAPI => (
    {
        getEntriesByJournal: (journalId: string) => getEntriesByJournal(spireClient, journalId),
        searchEntriesByJournal: (journalId: string, query: string) => searchEntriesByJournal(spireClient, journalId, query),
        getEntry: (journalId: string, entryId: string) => getEntry(spireClient, journalId, entryId),
        createEntry: (journalId: string, entryData: EntryMutable) => createEntry(spireClient, journalId, entryData),
        updateEntry: (journalId: string, entryId:string, entryData: EntryMutable) => updateEntry(spireClient, journalId, entryId, entryData),
        deleteEntry: (journalId: string, entryId:string) => deleteEntry(spireClient, journalId, entryId),
    }
)

export default createEntryAPI

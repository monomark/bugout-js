import {Entry, EntryMutable} from './type'
import {Response} from '../user/interface'

export interface EntryAPI {
    getEntriesByJournal(journalId: string): Promise<Response<Entry[]>>,
    searchEntriesByJournal(journalId: string, query: string): Promise<Response<Entry[]>>,
    getEntry(journalId: string, entryId: string): Promise<Response<Entry>>,
    createEntry(journalId: string, entryData: EntryMutable) : Promise<Response<Entry>>,
    updateEntry(journalId: string, entryId:string, entryData: EntryMutable): Promise<Response<Entry>>,
    deleteEntry(journalId: string, entryId:string): Promise<Response<Entry>>,
}
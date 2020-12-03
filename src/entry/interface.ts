import {Entry, EntryMutable} from './type'
import {ActionResponse} from '../user/interface'

export interface EntryAPI {
    getEntriesByJournal(journalId: string): Promise<ActionResponse<Entry[]>>,
    searchEntriesByJournal(journalId: string, query: string): Promise<ActionResponse<Entry[]>>,
    getEntry(journalId: string, entryId: string): Promise<ActionResponse<Entry>>,
    createEntry(journalId: string, entryData: EntryMutable) : Promise<ActionResponse<Entry>>,
    updateEntry(journalId: string, entryId:string, entryData: EntryMutable): Promise<ActionResponse<Entry>>,
    deleteEntry(journalId: string, entryId:string): Promise<ActionResponse<Entry>>,
}
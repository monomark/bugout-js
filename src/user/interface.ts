import {Journal} from '../journal/type'
import  {Entry, EntryMutable} from "../entry/type";
import {Tag, TagDescription} from '../tag/type'

export interface ActionResponse<T> {
    data: T;
}
export interface UserApi1 {
    getAllJournals(): Promise<ActionResponse<Journal[]>>, 
    createJournal(name: string): Promise<ActionResponse<Journal>>,
    deleteJournal(id: string): Promise<ActionResponse<Journal>>,
    getEntriesByJournal(journalId: string): Promise<ActionResponse<Entry[]>>,
    searchEntriesByJournal(journalId: string, query: string): Promise<ActionResponse<Entry[]>>,
    getEntry(journalId: string, entryId: string): Promise<ActionResponse<Entry>>,
    createEntry(journalId: string, entryData: EntryMutable) : Promise<ActionResponse<Entry>>,
    updateEntry(journalId: string, entryId:string, entryData: EntryMutable): Promise<ActionResponse<Entry>>,
    deleteEntry(journalId: string, entryId:string): Promise<ActionResponse<Entry>>,
    createTag(journalId: string, entryId:string, tags:string[]): Promise<ActionResponse<Tag[]>>
    getTags(journalId: string, entryId:string): Promise<ActionResponse<Tag[]>>
    deleteTags(journalId: string, entryId:string, tag:string): Promise<ActionResponse<TagDescription>>
}
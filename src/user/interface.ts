import {Journal} from '../journal/type'
import  {Entry, EntryMutable} from "../entry/type";
import {Tag, TagDescription} from '../tag/type'

export interface Response<T> {
    data: T;
}
export interface UserApi {
    getAllJournals(): Promise<Response<Journal[]>>, 
    createJournal(name: string): Promise<Response<Journal>>,
    deleteJournal(id: string): Promise<Response<Journal>>,
    getEntriesByJournal(journalId: string): Promise<Response<Entry[]>>,
    searchEntriesByJournal(journalId: string, query: string): Promise<Response<Entry[]>>,
    getEntry(journalId: string, entryId: string): Promise<Response<Entry>>,
    createEntry(journalId: string, entryData: EntryMutable) : Promise<Response<Entry>>,
    updateEntry(journalId: string, entryId:string, entryData: EntryMutable): Promise<Response<Entry>>,
    deleteEntry(journalId: string, entryId:string): Promise<Response<Entry>>,
    createTag(journalId: string, entryId:string, tags:string[]): Promise<Response<Tag[]>>
    getTags(journalId: string, entryId:string): Promise<Response<TagDescription>>
    deleteTags(journalId: string, entryId:string, tag:string): Promise<Response<TagDescription>>
}
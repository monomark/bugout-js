import {Tag, TagDescription} from "./type";
import {Response} from '../user/interface'

export interface TagAPI {
    createTag(journalId: string, entryId:string, tags:string[]): Promise<Response<Tag[]>>
    getTags(journalId: string, entryId:string): Promise<Response<TagDescription>>
    deleteTags(journalId: string, entryId:string, tag:string): Promise<Response<TagDescription>>
}
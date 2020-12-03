import {Tag, TagDescription} from "./type";
import {ActionResponse} from '../user/interface'

export interface TagAPI {
    createTag(journalId: string, entryId:string, tags:string[]): Promise<ActionResponse<Tag[]>>
    getTags(journalId: string, entryId:string): Promise<ActionResponse<TagDescription>>
    deleteTags(journalId: string, entryId:string, tag:string): Promise<ActionResponse<TagDescription>>
}
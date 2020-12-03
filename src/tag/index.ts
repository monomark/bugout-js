import {AxiosInstance} from 'axios'
import {Tag, TagDescription} from './type'
import {TagAPI} from './interface'
import {ActionResponse} from '../user/interface'

export const createTags = async (
    spireClient: AxiosInstance, 
    journalId: string,
    entryId: string,
    tagName: string[],
): Promise<ActionResponse<Tag[]>> =>{
    try { 
        const entryResponse = await spireClient.post<Tag[]>(`/journals/${journalId}/entries/${entryId}/tags`, {tags: tagName})
        return {data: entryResponse.data}
    } catch(e) {
        throw {
            error: e.response.data,
            status: e?.response?.status,
            message: 'Error createTags'
        }
    }
}
export const getTags = async (
    spireClient: AxiosInstance, 
    journalId: string,
    entryId: string,
): Promise<ActionResponse<Tag[]>> =>{
    try { 
        const entryResponse = await spireClient.get<Tag[]>(`/journals/${journalId}/entries/${entryId}/tags`)
        return {data: entryResponse.data}
    } catch(e) {
        throw {
            error: e.response.data,
            status: e?.response?.status,
            message: 'Error getTags'
        }
    }
}

export const deleteTags = async (
    spireClient: AxiosInstance, 
    journalId: string,
    entryId: string,
    tagName: string,
): Promise<ActionResponse<TagDescription>> =>{
    try { 
        const entryResponse = await spireClient.request<TagDescription>({
            method: 'DELETE',
            url: `/journals/${journalId}/entries/${entryId}/tags`,
            data: {
                tag: tagName
            }
        })
        return {data: entryResponse.data}
    } catch(e) {
        throw {
            error: e,
            status: e?.response?.status,
            message: 'Error deleteTags'
        }
    }
}

const createTagApi = (spireClient: AxiosInstance): TagAPI => (
    {
        createTag: (journalId: string, entryId:string, tagName:string[]) => createTags(spireClient, journalId, entryId, tagName),
        getTags: (journalId: string, entryId:string) => getTags(spireClient, journalId, entryId),
        deleteTags: (journalId: string, entryId:string, tagName:string) => deleteTags(spireClient, journalId, entryId, tagName),
    }
)

export default createTagApi
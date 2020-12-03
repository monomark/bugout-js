import {Journal} from './type'
import {ActionResponse} from '../user/interface'

export interface JournalsAPI {
    getAllJournals(): Promise<ActionResponse<Journal[]>>, 
    createJournal(name: string): Promise<ActionResponse<Journal>>,
    deleteJournal(id: string): Promise<ActionResponse<Journal>>,
}
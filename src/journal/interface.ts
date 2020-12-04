import {Journal} from './type'
import {Response} from '../user/interface'

export interface JournalsAPI {
    getAllJournals(): Promise<Response<Journal[]>>, 
    createJournal(name: string): Promise<Response<Journal>>,
    deleteJournal(id: string): Promise<Response<Journal>>,
}
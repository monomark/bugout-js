import { AxiosInstance } from 'axios'
import createJournalsAPI from '../journal'
import createEntryAPI from '../entry'
import createTagAPI from '../tag'
import {UserApi1} from './interface'

const createUserAPI = (spireClient: AxiosInstance): UserApi1 => (
    {
        ...createJournalsAPI(spireClient),
        ...createEntryAPI(spireClient),
        ...createTagAPI(spireClient),
    }
);

export default createUserAPI;
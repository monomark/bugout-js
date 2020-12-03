import { AxiosInstance } from 'axios'
import createJournalsAPI from '../journal'
import createEntryAPI from '../entry'
import createTagAPI from '../tag'
import {UserApi} from './interface'

const createUserAPI = (spireClient: AxiosInstance): UserApi => (
    {
        ...createJournalsAPI(spireClient),
        ...createEntryAPI(spireClient),
        ...createTagAPI(spireClient),
    }
);

export default createUserAPI;
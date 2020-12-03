import {BROODURL, SPIREURL} from './constants'
import Client from './client'
import ClientInterface from "./client/interface";
import {Options} from './client/types'


const module = (
    bugoutToken: string | null,
    bugoutClientID: string | null,
    options: Options = {
        apiUrls: {broodURL: BROODURL, spireURL: SPIREURL}
    },
): ClientInterface => (
    Client(bugoutClientID, bugoutToken, options)
)

export {module as BugoutClient}
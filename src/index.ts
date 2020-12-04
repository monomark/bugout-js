import {BROODURL, SPIREURL} from './constants'
import Client from './client'
import {ClientInterface} from "./interfaces";
import {Options} from './types'


const module = (
    clientID: string | null,
    token: string | null,
    options: Options = {
        apiUrls: {broodURL: BROODURL, spireURL: SPIREURL}
    },
): ClientInterface => (
    Client(clientID, token, options)
)

export {module as BugoutClient}
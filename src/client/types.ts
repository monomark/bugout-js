export type User = {
    user_id: string;
    username: string;
    email: string;
    normalized_email: string;
    verified: boolean;
    created_at: string;
    updated_at: string;
}
export type Auth = {
    access_token: string;
    token_type: string;
};

export type ApiUrls = {
    broodURL: string;
    spireURL: string;
} 

export type Options = {
    apiUrls: ApiUrls;
}

export type ApiStatus = {
    url: string;
    code: string;
    body: any;
}

export type Pong = {
    brood: ApiStatus;
    spire: ApiStatus;
}

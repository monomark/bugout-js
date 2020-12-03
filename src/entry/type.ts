export type Entry = {
    content: string;
    content_url: string | null;
    context_type: string;
    context_url: string | null;
    created_at: string;
    id: string;
    journal_url: string;
    tags: Array<string>;
    title: string;
    updated_at: string;
}

export type EntryMutable = {
    title: string;
    content: string;
}
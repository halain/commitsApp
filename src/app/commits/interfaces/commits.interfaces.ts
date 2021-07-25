export interface CommitResponse {
    ok: boolean;
    data?: CommitGitHub;
}

export interface CommitGitHub {
    author: string;
    email: string;
    date: string
    message: string,
    avatar_url: string,
    html_url: string,
}
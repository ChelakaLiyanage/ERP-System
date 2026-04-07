export function isDev() : boolean {
    return process.env.NODE_ENV === 'development';
}

export const DEV_SERVER_URL = "http://localhost:3000";
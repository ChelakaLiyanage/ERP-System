export function isDev() : boolean {
    return process.env.NODE_ENV === 'development';
    console.log("NODE_ENV =", process.env.NODE_ENV);
}

export const DEV_SERVER_URL = "http://localhost:3000";
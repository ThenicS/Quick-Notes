import sendRequest from './send-request';
const BASE_URL = '/api/users';

export async function signUp(userData: any) {
    return sendRequest(BASE_URL, 'POST', userData);
}

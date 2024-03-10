import sendRequest from './send-request';
const BASE_URL = '/api/notes';

export function create(noteData: any) {
    return sendRequest(`${BASE_URL}/create`, 'POST', noteData);
}

export function getNotes() {
    return sendRequest(`${BASE_URL}/all`, 'GET');
}

// Updated function name and endpoint URL
export function deleteNoteById(id: string) {
    return sendRequest(`${BASE_URL}/all/${id}/delete`, 'DELETE');
}

// Added a new function to get a single note by ID
export function getNoteById(id: string) {
    return sendRequest(`${BASE_URL}/all/${id}`, 'GET');
}

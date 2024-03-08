import { getToken } from './users-service';

export default async function sendRequest(
    url: any,
    method = 'GET',
    payload = null
) {
    // Fetch accepts an options object as the 2nd argument
    // used to include a data payload, set headers, specifiy the method, etc.
    const options: any = { method };
    if (payload) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(payload);
    }
    const token = getToken();
    if (token) {
        // Need to add an Authorization header
        // Use the Logical OR Assignment operator
        options.headers = options.headers || {};
        // Older approach
        // options.headers = options.headers || {};
        options.headers.Authorization = `Bearer ${token}`;
    }
    const res = await fetch(url, options);
    // console.log(url);
    console.log(res);
    // if res.ok is false then something went wrong
    if (res.ok) return res.json();
    throw new Error('Bad Request');
}

// import axios from 'axios';
// import { getToken } from './users-service';

// export default async function sendRequest(
//     url: string,
//     method = 'GET',
//     payload: any = null
// ) {
//     // Create headers object
//     const headers: any = { 'Content-Type': 'application/json' };
//     const token = getToken();
//     if (token) {
//         headers['Authorization'] = `Bearer ${token}`;
//     }

//     try {
//         // Axios request configuration
//         const config = {
//             method: method.toLowerCase(),
//             url: url,
//             headers: headers,
//             data: payload,
//         };

//         // Send request using Axios
//         const response = await axios(config);

//         // Log response
//         console.log(response);

//         // Return response data if request was successful
//         return response.data;
//     } catch (error) {
//         // Log and throw error if request failed
//         console.error('Error:', error);
//         throw new Error('Bad Request');
//     }
// }

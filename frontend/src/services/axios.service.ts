import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` 
};

export async function getApi<T>(url: string): Promise<T> {
    const response = await axios.get<T>(`${baseUrl}${url}`, { headers });
    return response.data;
}

export async function postApi<T>(url: string, data: any): Promise<T> {
    const response = await axios.post<T>(`${baseUrl}${url}`, data, { headers });
    return response.data;
}

export async function putApi<T>(url: string, data: any): Promise<T> {
    const response = await axios.put<T>(`${baseUrl}${url}`, data, { headers });
    return response.data;
}

export async function deleteApi<T>(url: string): Promise<T> {
    const response = await axios.delete<T>(`${baseUrl}${url}`, { headers });
    return response.data;
}
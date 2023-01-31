import { toast } from "react-toastify";

export const handleError = (error: any) => {
    if (!error) return;
    if (error.response && error.response.status !== 200) {
        toast.error(error.response.data.message || 'Ocorreu um erro na requisição');
        return;
    }
    if (error instanceof Error) {
        toast.error(error.message);
        return;
    }
    toast.error('Ops, tivemos um erro!');
};
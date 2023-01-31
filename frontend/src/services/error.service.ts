import { toast } from "react-toastify";

export const handleError = (error: any) => {
    if (error instanceof Error) {
        toast.error(error.message);
        return;
    }
    toast.error('Ops, tivemos um erro!');
}
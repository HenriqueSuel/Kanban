
import { handleError } from '@/services/error.service';
import { toast } from 'react-toastify'


jest.mock('react-toastify', () => {
    return {
        toast: {
            error: jest.fn()
        }
    }
})

describe('handleError', () => {
    it('displays error message for an error object', () => {
        handleError(new Error('Test error'));
        expect(toast.error).toHaveBeenCalledWith('Test error');
    });

    it('displays error message for a non-200 response', () => {
        handleError({
            response: {
                status: 400,
                data: { message: 'Test error message' }
            }
        });
        expect(toast.error).toHaveBeenCalledWith('Test error message');
    });

    it('displays generic error message for a non-200 response without a message', () => {
        handleError({
            response: {
                status: 400,
                data: {}
            }
        });
        expect(toast.error).toHaveBeenCalledWith('Ocorreu um erro na requisição');
    });

    it('displays generic error message for an unknown error', () => {
        handleError({});
        expect(toast.error).toHaveBeenCalledWith('Ops, tivemos um erro!');
    });
});

import { validateCardSchema } from './validate-card.utils';

describe('Validate card object', () => {
    it('Should return error when title is missing', async () => {
        const card = {
            content: 'Card content',
            lista: 'List 1',
        };

        try {
            await validateCardSchema.validate(card, { abortEarly: false });
        } catch (error: any) {
            expect(error.message).toEqual('Titulo é um campo obrigatório');
        }
    });

    it('Should return error when content is missing', async () => {
        const card = {
            title: 'Card title',
            lista: 'List 1',
        };

        try {
            await validateCardSchema.validate(card, { abortEarly: false });
        } catch (error: any) {
            expect(error.message).toEqual('Conteudo é um campo obrigatório');
        }
    });

    it('Should return error when lista is missing', async () => {
        const card = {
            title: 'Card title',
            content: 'Card content',
        };

        try {
            await validateCardSchema.validate(card, { abortEarly: false });
        } catch (error: any) {
            expect(error.message).toEqual('Lista é um campo obrigatório');
        }
    });

    it('Should return no error when all required fields are present', async () => {
        const card = {
            title: 'Card title',
            content: 'Card content',
            lista: 'List 1',
        };

        try {
            await validateCardSchema.validate(card, { abortEarly: false });
            expect(true).toBe(true);
        } catch (error) {
            expect(error).toBeUndefined();
        }
    });
});

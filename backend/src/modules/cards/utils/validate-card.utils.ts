import * as yup from 'yup';

export const validateCardSchema = yup.object({
    title: yup.string().required('Titulo é um campo obrigatório'),
    content: yup.string().required('Conteudo é um campo obrigatório'),
    lista: yup.string().required('Lista é um campo obrigatório'),
})
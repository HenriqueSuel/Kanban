import { COLORS } from "@/constants/theme.constants";
import { ICard } from "@/interfaces/card.interface";
import { useCardsStore } from "@/stores/cards.zustand";
import { Button } from "@/styles/globals";
import { useForm } from "react-hook-form";
import * as S from './styles';
import * as DOMPurify from 'dompurify';

interface IProps extends Partial<ICard> {
    onComplete: () => void;
    onCancel?: () => void;
}

const FormCard = ({ id, onComplete, title, content, lista, onCancel }: IProps) => {
    const { createCard, editCard } = useCardsStore();
    const { register, handleSubmit, formState: { errors } } = useForm<ICard>();

    const onSubmit = handleSubmit(async (data: ICard) => {
        let content = DOMPurify.sanitize(data.content);
        id ? await editCard({ ...data, id, content }) : await createCard({ ...data, content });
        onComplete();
    });


    return (
        <form data-testid='formCard' onSubmit={handleSubmit(onSubmit)}>

            <S.FormGroup>
                <label htmlFor="title" >Titulo</label>
                <S.Input id='title' defaultValue={title} {...register("title")} />

            </S.FormGroup>
            <S.FormGroup>
                <label htmlFor="content" >Content</label>
                <S.TextArea id='content' defaultValue={content} {...register("content")} />
            </S.FormGroup>

            <S.FormGroup>
                <label htmlFor="list" >Lista</label>

                <S.Select id="list" defaultValue={lista} {...register("lista")}>
                    <option value="todo">To Do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </S.Select>

            </S.FormGroup>

            <S.Container>
                <Button type="submit" color={COLORS.SUCCESS}>
                    Salvar
                </Button>
                {id && (
                    <Button type="button" color={COLORS.ERROR} onClick={onCancel}>
                        Cancelar
                    </Button>

                )}
            </S.Container>

        </form>
    )
}


export { FormCard }
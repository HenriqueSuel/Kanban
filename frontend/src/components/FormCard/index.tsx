import { ICard } from "@/interfaces/card.interface";
import { useCardsStore } from "@/stores/cards.zustand";
import { useForm } from "react-hook-form";
import * as S from './styles';
interface IProps extends Partial<ICard> {
    onComplete: () => void;
}

const FormCard = ({ id, onComplete, title, content, lista }: IProps) => {
    const { createCard, editCard } = useCardsStore();
    const { register, handleSubmit, formState: { errors } } = useForm<ICard>();

    const onSubmit = handleSubmit(async (data: ICard) => {
        id ? await editCard({ ...data, id }) : await createCard(data);
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

            <S.Button type="submit">
                Salvar
            </S.Button>

        </form>
    )
}


export { FormCard }
import { COLORS } from '@/constants/theme.constants'
import { ICard } from '@/interfaces/card.interface'
import { Button } from '@/styles/globals'
import { FaTrashAlt, FaPencilAlt, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import * as S from './styles'
import Highlight from 'react-highlight';
import { KANBAN_STATUS } from '@/constants/status.constants';
import { useCallback, useState } from 'react';
import { FormCard } from '../FormCard';

interface IProps extends ICard {
    handleCompleteEdit: () => void;
    handleDelete: () => void;
    handleArrowLeft?: () => void;
    handleArrowRight?: () => void;
}

const Card = ({
    id,
    title,
    content,
    handleCompleteEdit,
    handleDelete,
    lista,
    handleArrowRight,
    handleArrowLeft
}: IProps) => {

    const [isModeEdit, setIsModeEdit] = useState(false);

    const handleComplete = useCallback(() => {
        setIsModeEdit(false);
        handleCompleteEdit();
    }, [handleCompleteEdit])

    return (
        isModeEdit
            ? (
                <S.Container>
                    <FormCard
                        id={id}
                        content={content}
                        lista={lista}
                        title={title}
                        onComplete={handleComplete}
                        onCancel={() => setIsModeEdit(false)}
                    />
                </S.Container>
            )
            : (
                <S.Container>
                    <S.Title>{title}</S.Title>
                    <Highlight innerHTML={true}>{content}</Highlight>

                    <S.ContainerButton>
                        {KANBAN_STATUS.TODO !== lista && (
                            <S.CursorPointer onClick={handleArrowLeft} data-testid="FaArrowLeft">
                                <FaArrowLeft />
                            </S.CursorPointer>
                        )}
                        <Button color={COLORS.INFO} onClick={() => setIsModeEdit(true)}>Editar <FaPencilAlt /></Button>
                        <Button color={COLORS.ERROR} onClick={handleDelete}>Deletar <FaTrashAlt /></Button>

                        {KANBAN_STATUS.DONE !== lista && (
                            <S.CursorPointer onClick={handleArrowRight} data-testid="FaArrowRight">
                                <FaArrowRight />
                            </S.CursorPointer>
                        )}
                    </S.ContainerButton>

                </S.Container>
            )
    )

}


export { Card }
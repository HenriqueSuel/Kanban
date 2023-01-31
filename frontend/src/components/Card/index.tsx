import { COLORS } from '@/constants/theme.constants'
import { ICard } from '@/interfaces/card.interface'
import { Button } from '@/styles/globals'
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';
import * as S from './styles'

interface IProps extends ICard {
    handleClick: () => void;
    handleDelete: () => void;
}

const Card = ({ title, content, handleClick, handleDelete }: IProps) => {

    return (
        <S.Container>
            <S.Title>{title}</S.Title>

            <p>{content}</p>

            <S.ContainerButton>
                <Button color={COLORS.INFO} onClick={handleClick}>Editar <FaPencilAlt /></Button>
                <Button color={COLORS.ERROR} onClick={handleDelete}>Deletar <FaTrashAlt /></Button>
            </S.ContainerButton>

        </S.Container>
    )
}


export { Card }
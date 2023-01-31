interface IProps {
    id: string;
    title: string;
    type: string;
}

export const log = ({ id, title, type }: IProps) => {
    const dateTime = new Date().toLocaleString('pt-br');
    console.info(`${dateTime} - Card ${id} - ${title} - ${type}`);
}
import { Button } from "@/styles/globals";
import styled from "styled-components";

export const Container = styled.div`
    margin: 0.8rem 0.8rem;
    border-radius: 10px;
    background: #86BBD8 ;
    padding: 4px 20px;
`

export const Title = styled.h3`
    font-weight: 700;
`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 16px;
    margin-top: 30px;
    align-items: center;
    button {
        margin-left: 10px;
        margin-right: 10px;
        padding: 8px 20px;
        display: flex;
        align-items: center;
        
        svg {
            margin-left: 8px;
        }
    }
`

export const CursorPointer = styled.div`
    cursor: pointer;
`
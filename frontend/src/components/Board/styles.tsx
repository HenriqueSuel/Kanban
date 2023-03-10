import styled from "styled-components";

export const Container = styled.div`
    display:grid;
    margin: 10px 10px;
    grid-template-columns: repeat(3, 2fr);
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
  }
`

export const Title = styled.p`
    font-weight: 700;
    color: white;
    text-align: center;
`

export const Column = styled.div`
    background-color:#2F4858;
    border-radius: 10px;
    margin-right: 10px;

`

export const Card = styled.div`
    margin: 0.8rem 0.8rem;
    border-radius: 10px;
    background: #86BBD8 ;
    padding: 20px;
`
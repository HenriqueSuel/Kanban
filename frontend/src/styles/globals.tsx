
import { COLORS } from "@/constants/theme.constants";
import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

html{
  box-sizing: border-box;
  background: #33658A;
  display:block;
  height: 100%;
  margin:0 auto;
  padding: 0;
}

body{
  background-color:#33658A;
  margin-top:0;
  font-family:Verdana;
}
`;

export const theme = {
  colors: {
    primary: "#fafafa",
    success: "#2ea44f",
    error: "#FE4A49",
    info: '#33658A'
  },
};



export const Button = styled.button<{ color: COLORS }>`
    padding: 8px 24px;
    font-weight: 700;
    border: none;
    border-radius: 6px;
    box-shadow: none;
    cursor: pointer;
    display: block;
    background-color: ${props => theme.colors[props.color]};;
    color: white;
`
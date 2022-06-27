import { css } from "styled-components";

export const Container = css`
  max-width: 1140px;
  margin: 0 auto;
`;

export const Row = css`
  display: flex;
  justify-content: space-between;
`;

export const Col2 = css`
  width: 20%;
  box-sizing: border-box;
`;


export const ConfigLink = css`
  a{
    color: rgba(0,0,0,.54);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    outline : none;
    border: none;

    &:hover {
      color: #ee4d2d;
    }
  }    
`;

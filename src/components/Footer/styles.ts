import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {  Container, Col2, ConfigLink } from "../../../styles/utils";

export const SFooter = styled.footer`
  width: 100%;
  background-color: #f4f4f4;
  
`;

export const ContainerFooter = styled.footer`
  ${Container};
  // height: 12.5rem;
`;

export const RowFooter = styled.div`
  align-items: flex-start;
  display: flex;
  padding: 1rem 0 2rem;
`;

export const Rowcol = styled.div`
 ${Col2};
 padding: 0 1rem;
`;



export const SocialIcon = styled(FontAwesomeIcon)`
  margin-right:.625rem;
`;


export const Typography = styled.h4`
  color: rgba(0,0,0,.54);
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
`;

export const RedesUl = styled.ul`
  list-style: none;
  padding: 0;
  line-height: 1.9rem;
  text-decoration: none;
`;


export const RedesLi = styled.li`
 ${ConfigLink};
  text-decoration: none;
`;




export const Copyright = styled.p`
  text-align: center;
  padding: 1rem 0;
  color: rgba(0,0,0,.54);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.8rem;
`;

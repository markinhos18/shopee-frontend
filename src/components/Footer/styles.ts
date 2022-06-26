import styled from "styled-components";
import {  Container, Col2 } from "../../../styles/utils";


// import  Redes  from "../../assets/redes.png";

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
`;

export const Facebook = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  background-image: url(https://www.facebook.com/images/fb_icon_325x325.png);
  background-size: cover;
`;

export const Instagram = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  background-image: url(https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png);
  // background-image: url("../../assets/redes.png");
  background-size: cover;
`;

export const Tiktok = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  background-image: url(https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web-common-sg/mtact/static/images/logo_144c91a.png);
  // background-image: url("../../assets/redes.png");
  background-size: cover;
`;

export const Twitter = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  background-image: url( https://abs.twimg.com/favicons/twitter.2.ico);
  // background-image: url("../../assets/redes.png");
  background-size: cover;
`;

export const Linkedln = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  background-image: url( https://cdn.worldvectorlogo.com/logos/linkedin-icon.svg);
  // background-image: url("../../assets/redes.png");
  background-size: cover;
`;

export const RedesUl = styled.ul`
  list-style: none;
  padding: 0;
  line-height: 1.9rem;
  text-decoration: none;
`;


export const RedesLi = styled.li`
 
  text-decoration: none;
`;

export const Copyright = styled.p`
  text-align: center;
  padding: 1rem 0;
`;

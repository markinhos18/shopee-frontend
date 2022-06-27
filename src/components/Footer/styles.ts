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

export const Facebook = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  background-image: url(/_next/static/media/redes.png);
  background-position: 32% 8%;
  background-size: 15rem;
  margin-right:.625rem;
  // background-image: url(https://www.facebook.com/images/fb_icon_325x325.png);

`;

export const Instagram = styled.img`
width: 1.8rem;
height: 1.8rem;
background-image: url(/_next/static/media/redes.png);
background-position: 2% 73%;
background-size: 15rem;
margin-right:.625rem;
  // background-image: url(https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png);
`;

export const Tiktok = styled.img`
width: 1.8rem;
height: 1.8rem;
background-image: url(/_next/static/media/redes.png);
background-position: 57% 104%;
background-size: 15rem;
margin-right:.625rem;
  // background-image: url(https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web-common-sg/mtact/static/images/logo_144c91a.png);
`;

export const Twitter = styled.img`
width: 1.8rem;
height: 1.8rem;
background-image: url(/_next/static/media/redes.png);
background-position: 75% 104%;
background-size: 15rem;
margin-right:.625rem;
  // background-image: url( https://abs.twimg.com/favicons/twitter.2.ico);
`;

export const Linkedln = styled.img`
width: 1.8rem;
height: 1.8rem;
background-image: url(/_next/static/media/redes.png);
background-position: 39% 76%;
background-size: 15rem;
margin-right:.625rem;
  // background-image: url( https://cdn.worldvectorlogo.com/logos/linkedin-icon.svg);
`;


export const Typography = styled.h4`
  color: rgba(0,0,0,.54);
  text-decoration: none;
  font-weight: 500;
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

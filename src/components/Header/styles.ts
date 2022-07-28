import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Container, Row } from "../../../styles/utils";

export const SHeader = styled.header`
  width: 100%;
  background-color: #f4f4f4;
`;

export const Navbar = styled.nav`
  /* background-color: white; */
  ${Container}
`;

export const Form = styled.form`
  width: 90%;
  display: flex;
  justify-content: center;
  
  
`;


export const SocialIcon = styled(FontAwesomeIcon)`
  margin: 0 .5rem;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  position: relative;
  right: 0;

  padding: 16px;
  color: #fff;
  cursor: pointer;
  background-color:  ${({ theme }) => theme.colors.primary};
`;




export const NavbarRow = styled.div`
  ${Row};
  padding: 8px 0;
`;

export const Menu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 10px;
  font-weight: 700;
  a {
    text-decoration: none;
    color: #f15a3c;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const InputSearch = styled.input`
  width: 70%;
  padding: 0 .5rem;
`;

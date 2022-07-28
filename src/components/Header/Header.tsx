import Image from "next/image";
import Link from "next/link";
import { faInstagram, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  SHeader,
  Navbar,
  NavbarRow,
  Menu,
  MenuItem,
  InputSearch,
  SocialIcon,
  SearchIcon,
  Form,
} from "./styles";

import Logo from "../../assets/logo_shopee-orange.png";
import ShoppingCart from "../../assets/carrinho.png";

const Header = () => {
  return (
    <SHeader>
      <Navbar>
        <NavbarRow>
          <Menu>
            <MenuItem>
              <Link href="/salesperson">
                <a>Central do Vendedor</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/sell">
                <a>Venda na Shopee</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/app">
                <a>Baixe o App</a>
              </Link>
            </MenuItem>
            <MenuItem>
              Siga-nos no 
                <Link href="https://instagram.com/Shopee_BR"  title="Instagram" >
                  <a target="_blank"  >
                    <SocialIcon icon={faInstagram} size="2x" />
                  </a>
                </Link>
                <Link href="https://twitter.com/shopee_br"  title="Twitter">
                  <a target="_blank"  >
                    <SocialIcon icon={faTwitter} size="2x" />
                  </a>
                </Link>
                <Link href="https://www.tiktok.com/@shopee_br"  title="Tiktok">
                  <a target="_blank"  >
                    <SocialIcon icon={faTiktok} size="2x" />
                  </a>
                </Link>
                
            </MenuItem>
          </Menu>
        </NavbarRow>
        <NavbarRow>
          <Link href="/">
            <a>
              <Image src={Logo} width="128" height="43" alt="Logo Shopee" />
            </a>
          </Link>
          
          <Form >
            <InputSearch type="text" width="60%" placeholder="Pesquise por produtos, marcas e lojas" />
            <SearchIcon icon={faSearch} size="1x" />
          </Form>



          <Link href={`/cart/shopping-cart`}>
            <a>
              <Image
                src={ShoppingCart}
                width="40"
                height="40"
                alt="Shopping Cart"
              />
            </a>
          </Link>
        </NavbarRow>
      </Navbar>
    </SHeader>
  );
};

export default Header;

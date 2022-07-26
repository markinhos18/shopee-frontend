import Image from "next/image";
import Link from "next/link";
import {
  SHeader,
  Navbar,
  NavbarRow,
  Menu,
  MenuItem,
  InputSearch,
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
              Siga-nos
              <Link href="https://www.instagram.com/Shopee_BR/">
                <a target="_blank">Instagram</a>
              </Link>
              <Link href="https://twitter.com/shopee_br">
                <a target="_blank">Twitter</a>
              </Link>
              <Link href="https://www.tiktok.com/@shopee_br">
                <a target="_blank">Tiktok</a>
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
          <InputSearch type="text" width="60%" placeholder="Buscar" />
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

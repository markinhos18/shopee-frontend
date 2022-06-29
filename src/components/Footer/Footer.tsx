import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { SFooter, ContainerFooter, RowFooter, Rowcol, Facebook, Instagram, Tiktok, Twitter, Linkedln, Typography,  RedesUl, RedesLi,  Copyright } from "./styles";

import Pagamentos from "../../assets/pagamentos.png";
import Apps from "../../assets/apps.png";


const Footer: NextPage = () => {
  const today = new Date();
  
  return (
    <SFooter>
      <ContainerFooter>
        <RowFooter>
          <Rowcol>
            <Typography>Atendimento ao cliente</Typography>
            <RedesUl>
              <RedesLi>
                <Link href="https://help.shopee.com.br/br/s"  title="Central de ajuda">
                    <a  target="_blank"  >Central de ajuda</a>
                </Link>
              </RedesLi>
              <RedesLi>
                <Link href="https://help.shopee.com.br/br/s/article/No%C3%A7%C3%B5es-b%C3%A1sicas-do-comprador-Como-fa%C3%A7o-uma-compra-no-Shopee"  title="Como comprar">
                  <a target="_blank"  >Como comprar</a>
                </Link>
              </RedesLi>
              <RedesLi>
                <Link href="https://help.shopee.com.br/br/s/article/Básico-do-Comprador-Quais-meios-de-pagamento-são-suportados-pelo-Shopee" title="Métodos de Pagamento">
                  <a target="_blank"  >
                    Métodos de Pagamento
                  </a>
                </Link>
              </RedesLi>
              <RedesLi>
                <Link href="https://help.shopee.com.br/br/s/article/No%C3%A7%C3%B5es-b%C3%A1sicas-do-comprador-O-que-%C3%A9-a-garantia-do-Shopee-Como-isso-me-protege-como-comprador"  title="Garantia Shopee">
                  <a target="_blank"  >
                    Garantia Shopee
                  </a>
                </Link>
              </RedesLi>
              <RedesLi>
                <Link href="https://help.shopee.com.br/br/s/topic/0TO6F000000aJA9WAM/"  title="Devolução e reembolso">
                  <a target="_blank"  >
                    Devolução e reembolso
                  </a>
                </Link>
              </RedesLi>
              <RedesLi>
                <Link href="https://help.shopee.com.br/br/s/article/Coment%C3%A1rios-Como-entrar-em-contato-com-o-Atendimento-ao-Cliente-da-Shopee"  title="Falar com a gente">
                  <a target="_blank"  >
                    Falar com a gente
                  </a>
                </Link>
              </RedesLi>
              <RedesLi>
                <Link href="https://help.shopee.com.br/br/s/article/Ouvidoria-Como-abrir-uma-solicitação-para-a-ouvidoria"  title="Ouvidoria">
                  <a target="_blank"  >
                    Ouvidoria
                  </a>
                </Link>
              </RedesLi>
            </RedesUl>
          
          </Rowcol>
          <Rowcol>
            <Typography>Sobre a shopee</Typography>
            <RedesUl>
              <RedesLi>
                <Link href="https://careers.shopee.com.br/about"  title="Sobre Nós">
                  <a target="_blank"  >
                    Sobre Nós
                  </a>
                </Link>
              </RedesLi>
              <RedesLi>
                <Link href="https://help.shopee.com.br/br/s/article/Pol%C3%ADticas-Shopee"  title="Políticas Shopee">
                  <a target="_blank"  >
                    Políticas Shopee
                  </a>
                </Link>
              </RedesLi>
              <RedesLi>
                <Link href="https://help.shopee.com.br/s/article/Programa-de-Afiliados-da-Shopee-Termos-e-Condi%C3%A7%C3%B5es"  title="Programa De Afiliados Da Shopee">
                  <a target="_blank"  >
                    Programa De Afiliados Da Shopee
                  </a>
                </Link>
              </RedesLi>
              <RedesLi>
                <Link href="https://shopee.com.br/flash_sale"  title="Ofertas Relâmpago">
                  <a target="_blank"  >
                    Ofertas Relâmpago
                  </a>
                </Link>
              </RedesLi>
              <RedesLi>
                <Link href="https://shopee.com.br/blog"  title="Shopee Blog">
                  <a target="_blank"  >
                    Shopee Blog
                  </a>
                </Link>
              </RedesLi>
              <RedesLi>
                <Link href="https://shopee.com.br/m/imprensa"  title="Imprensa">
                  <a target="_blank"  >
                    Imprensa
                  </a>
                </Link>
              </RedesLi>
             
            </RedesUl>

          </Rowcol>
          <Rowcol>
            <Typography>Pagamento</Typography>
            
              <a  target="_blank">
                <Image
                  src={Pagamentos}
                  // width={228}
                  // height={50}
                  alt="pagamentos"
                />
              </a>
            
          
          </Rowcol>
          <Rowcol>
            <Typography>Siga-nos</Typography>
            <RedesUl>
              <RedesLi>
                <Link href="https://facebook.com/ShopeeBR"  title="Facebook" >
                  <a target="_blank"  >
                    <Facebook/> Facebook
                    
                  </a>
                </Link>
              </RedesLi>
              <RedesLi>
                <Link href="https://instagram.com/Shopee_BR"  title="Instagram" >
                  <a target="_blank"  >
                    <Instagram/> Instagram
                  </a>
                </Link>
              </RedesLi>
              <RedesLi>
                <Link href="https://www.tiktok.com/@shopee_br"  title="Tiktok">
                  <a target="_blank"  >
                    <Tiktok/> TikTok
                  </a>
                </Link>
              </RedesLi>
              <RedesLi>
                <Link href="https://twitter.com/shopee_br"  title="Twitter">
                  <a target="_blank"  >
                    <Twitter/> Twitter
                  </a>
                </Link>
              </RedesLi>
              <RedesLi>
                <Link href="https://linkedin.com/company/shopee"  title="Linkedin">
                  <a target="_blank"  >
                    <Linkedln/> LinkedIn
                  </a>
                </Link>
              </RedesLi>
            </RedesUl>
          
          </Rowcol>
          <Rowcol>
            <Typography>Baixar app shopee</Typography>
            <Link href="https://shopee.com.br/web">
              <a  target="_blank">
                <Image
                  src={Apps}
                  // width={580}
                  
                  alt="Apps"
                />
              </a>
            </Link>
            
          
          </Rowcol>
        </RowFooter>
        <hr></hr>
        <Copyright>
          © {today.getFullYear()} Shopee. Todos os direitos reservados
          
        </Copyright>
       
      </ContainerFooter>
    </SFooter>
  );
};

export default Footer;

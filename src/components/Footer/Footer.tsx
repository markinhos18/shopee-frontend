import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { SFooter, ContainerFooter, RowFooter, Rowcol, Facebook, Instagram, Tiktok, Twitter, Linkedln, RedesUl, RedesLi, Copyright } from "./styles";

import Apps from "../../assets/apps.png";
import Pagamentos from "../../assets/pagamentos.png";


const Footer: NextPage = () => {
  const today = new Date();
  
  return (
    <SFooter>
      <ContainerFooter>
        <RowFooter>
          <Rowcol>
            <h4>Atendimento ao cliente</h4>
            <RedesUl>
              <RedesLi>
                <a href="https://help.shopee.com.br/br/s" className="FA0WjS" title="">central de ajuda</a>
              </RedesLi>
              <RedesLi>
                <a href="https://help.shopee.com.br/br/s/article/No%C3%A7%C3%B5es-b%C3%A1sicas-do-comprador-Como-fa%C3%A7o-uma-compra-no-Shopee" className="FA0WjS" title="">Como comprar</a>
              </RedesLi>
              <RedesLi>
                <a href="https://help.shopee.com.br/br/s/article/Básico-do-Comprador-Quais-meios-de-pagamento-são-suportados-pelo-Shopee" className="FA0WjS" title="">Métodos de Pagamento</a>
              </RedesLi>
              <RedesLi>
                <a href="https://help.shopee.com.br/br/s/article/No%C3%A7%C3%B5es-b%C3%A1sicas-do-comprador-O-que-%C3%A9-a-garantia-do-Shopee-Como-isso-me-protege-como-comprador" className="FA0WjS" title="">garantia Shopee</a>
              </RedesLi>
              <RedesLi>
                <a href="https://help.shopee.com.br/br/s/topic/0TO6F000000aJA9WAM/" className="FA0WjS" title="">Devolução e reembolso</a>
              </RedesLi>
              <RedesLi>
                <a href="https://help.shopee.com.br/br/s/article/Coment%C3%A1rios-Como-entrar-em-contato-com-o-Atendimento-ao-Cliente-da-Shopee" className="FA0WjS" title="">Falar com a gente</a>
              </RedesLi>
              <RedesLi>
                <a href="https://help.shopee.com.br/br/s/article/Ouvidoria-Como-abrir-uma-solicitação-para-a-ouvidoria" className="FA0WjS" title="">Ouvidoria</a>
              </RedesLi>
            </RedesUl>
          
          </Rowcol>
          <Rowcol>
            <h4>Sobre a shopee</h4>
            <RedesUl>
              <RedesLi>
                <a href="https://help.shopee.com.br/br/s" className="FA0WjS" title="">central de ajuda</a>
              </RedesLi>
              <RedesLi>
                <a href="https://help.shopee.com.br/br/s/article/No%C3%A7%C3%B5es-b%C3%A1sicas-do-comprador-Como-fa%C3%A7o-uma-compra-no-Shopee" className="FA0WjS" title="">Como comprar</a>
              </RedesLi>
              <RedesLi>
                <a href="https://help.shopee.com.br/br/s/article/Básico-do-Comprador-Quais-meios-de-pagamento-são-suportados-pelo-Shopee" className="FA0WjS" title="">Métodos de Pagamento</a>
              </RedesLi>
              <RedesLi>
                <a href="https://help.shopee.com.br/br/s/article/No%C3%A7%C3%B5es-b%C3%A1sicas-do-comprador-O-que-%C3%A9-a-garantia-do-Shopee-Como-isso-me-protege-como-comprador" className="FA0WjS" title="">garantia Shopee</a>
              </RedesLi>
              <RedesLi>
                <a href="https://help.shopee.com.br/br/s/topic/0TO6F000000aJA9WAM/" className="FA0WjS" title="">Devolução e reembolso</a>
              </RedesLi>
              <RedesLi>
                <a href="https://help.shopee.com.br/br/s/article/Coment%C3%A1rios-Como-entrar-em-contato-com-o-Atendimento-ao-Cliente-da-Shopee" className="FA0WjS" title="">Falar com a gente</a>
              </RedesLi>
              <RedesLi>
                <a href="https://help.shopee.com.br/br/s/article/Ouvidoria-Como-abrir-uma-solicitação-para-a-ouvidoria" className="FA0WjS" title="">Ouvidoria</a>
              </RedesLi>
            </RedesUl>
          
          </Rowcol>
          <Rowcol>
            <h4>Pagamento</h4>
            
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
            <h4>Siga-nos</h4>
            <RedesUl>
              <RedesLi>
                <a href="https://facebook.com/ShopeeBR" className="FA0WjS" title="" target="_blank">
                  <Facebook/> Facebook
                </a>
              </RedesLi>
              <RedesLi>
                <a href="https://instagram.com/Shopee_BR" className="FA0WjS" title="" target="_blank">
                  <Instagram/> Instagram
                </a>
              </RedesLi>
              <RedesLi>
                <a href="https://www.tiktok.com/@shopee_br" className="FA0WjS" title="" target="_blank">
                  <Tiktok/> TikTok
                </a>
              </RedesLi>
              <RedesLi>
                <a href="https://twitter.com/shopee_br" className="FA0WjS" title="" target="_blank">
                  <Twitter/> Twitter
                </a>
              </RedesLi>
              <RedesLi>
                <a href="https://linkedin.com/company/shopee" className="FA0WjS" title="" target="_blank">
                  <Linkedln/> LinkedIn
                </a>
              </RedesLi>
            </RedesUl>
          
          </Rowcol>
          <Rowcol>
            <h4>Baixar app shopee</h4>
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

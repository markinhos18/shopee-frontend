
import { Moedas, JogosPremios, FreteGratis, CuponsDiarios, ShopeeOficial, EspacoTecnologia, ClubeBeleza, ShopeeLive, VendedoresInternacionais, ShopeeDoacoes, CategoryStyles } from "./styles";


const Category = () => {

    return (
        
        <CategoryStyles>
            <a href="/shopee-coins/" target="_blank"  style={{textDecoration: "none",}}>
                <div  style={{width: "100px", }}>
                    
                    <div  style={Moedas}></div>
                    <div style={{textAlign: "center", padding: "15px 0",  color: "rgba(0,0,0,.54)", fontSize: "0.9rem"  }} >Moedas Shopee</div>
                </div>
            </a>

            <a href="/m/shopee-premios-recompensas" target="_blank" style={{textDecoration: "none",}}>
                <div  style={{width: "100px"}}>
                    
                    <div  style={JogosPremios}></div>
                    <div style={{textAlign: "center", padding: "15px 0",  color: "rgba(0,0,0,.54)", fontSize: "0.9rem"  }} >Jogos e Prêmios</div>
                </div>
            </a>
                                
            <a href="/m/frete-gratis" target="_blank" style={{textDecoration: "none",}}>
                <div  style={{width: "100px"}}>
                    
                    <div  style={FreteGratis}></div>
                    <div style={{textAlign: "center", padding: "15px 0",  color: "rgba(0,0,0,.54)", fontSize: "0.9rem"  }} >Frete Grátis</div>
                </div>
            </a>
                                
            <a href="/m/cupom-de-desconto" target="_blank" style={{textDecoration: "none",}}>
                <div  style={{width: "100px"}}>
                   
                    <div  style={CuponsDiarios}></div>
                    <div style={{textAlign: "center", padding: "15px 0",  color: "rgba(0,0,0,.54)", fontSize: "0.9rem"  }} >Cupons Diários</div>
                </div>
            </a>
                                
            <a href="/oficial" target="_blank" style={{textDecoration: "none",}}>
                <div  style={{width: "100px"}}>
                   
                    <div   style={ShopeeOficial}></div>
                    <div style={{textAlign: "center", padding: "15px 0",  color: "rgba(0,0,0,.54)", fontSize: "0.9rem"  }} >Shopee Oficial</div>
                </div>
            </a>
                            
                            
            <a href="/m/espaco-tecnologia" target="_blank" style={{textDecoration: "none",}}>
                <div  style={{width: "100px"}}>
                   
                    <div  style={EspacoTecnologia}></div>
                    <div style={{textAlign: "center", padding: "15px 0",  color: "rgba(0,0,0,.54)", fontSize: "0.9rem"  }} >Espaço Tecnologia</div>
                </div>
            </a>
                                
            <a href="/m/clube-de-beleza" target="_blank" style={{textDecoration: "none",}}>
                <div  style={{width: "100px"}}>
                   
                    <div  style={ClubeBeleza}></div>
                    <div style={{textAlign: "center", padding: "15px 0",  color: "rgba(0,0,0,.54)", fontSize: "0.9rem"  }} >Clube de Beleza</div>
                </div>
            </a>
                            
            <a href="https://live.shopee.com.br/aggregation?tab_id=1713250344519168" target="_blank" rel="noreferrer"  style={{textDecoration: "none",}}>
                <div  style={{width: "100px"}}>
                   
                    <div  style={ShopeeLive}></div>
                    <div style={{textAlign: "center", padding: "15px 0",  color: "rgba(0,0,0,.54)", fontSize: "0.9rem"  }} >Shopee Live</div>
                </div>
            </a>

            <a href="/m/selecao-vendedores-internacionais" target="_blank" style={{textDecoration: "none",}}>
                <div  style={{width: "100px"}}>
                   
                    <div  style={VendedoresInternacionais}></div>
                    <div style={{textAlign: "center", padding: "15px 0",  color: "rgba(0,0,0,.54)", fontSize: "0.9rem"  }} >Vendedores Internacionais</div>
                </div>
            </a>
                            
            <a href="/m/shopee-doacoes" target="_blank" style={{textDecoration: "none",}}>
                <div  style={{width: "100px"}}>
                   
                    <div  style={ShopeeDoacoes}></div>
                    <div style={{textAlign: "center", padding: "15px 0",  color: "rgba(0,0,0,.54)", fontSize: "0.9rem"  }} >Shopee Doações</div>
                </div>
            </a>
        </CategoryStyles>
    )
};

export default Category;


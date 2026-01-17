// pagina principal que ira renderizar as outras paginas
'use client'
import { useState } from "react";
import { ProductsList } from "./ProductsList";
import { CartItens } from "./CartItens";
import { QuemSomos } from "./QuemSomos";
import { Contato } from "./Contato";
import { Product } from "./Product";
import FinishBuy1 from "./finishBuy1";



// recebe no page a state que decide qual pagina sera exibida (suco lista, carrinho, quem somos, contato etc...)
type Props = {
    currentMain: string;
    onNavigate:(CurrentMain: string)=> void
    selectedProduct: any;
    onSelectProduct: (product: any) => void;
}



export const Main = ({currentMain,onNavigate, selectedProduct, onSelectProduct}: Props) => {



    return (
        <main className="bg-white min-h-screen flex-grow">
             {/* Página padrão: lista de sucos */}
            {currentMain === 'ProductList'  && (
                <ProductsList onSelectProduct={onSelectProduct} />
            )}

            {/* Quando um produto foi clicado → exibe o Product */}
            {currentMain === 'product' && (
                <Product product={selectedProduct} />
            )}

            {/* Outras telas OBS: essa funcao q passo pro cartItens e pra alterar a satte de exibiçao de aba q e criado em page*/}
            {currentMain === 'cartItens' && <CartItens onNavigate={onNavigate}/>} 
            {currentMain === 'finisBuy1' && <FinishBuy1/>}
            {currentMain === "quemSomos" && <QuemSomos />}
            {currentMain === "contato" && <Contato />}
        </main>
    );
};
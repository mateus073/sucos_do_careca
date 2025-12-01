// pagina principal que ira renderizar as outras paginas
'use client'
import { useState } from "react";
import { ProductsList } from "./ProductsList";
import { CartItens } from "./CartItens";
import { QuemSomos } from "./QuemSomos";
import { Contato } from "./Contato";
import { Product } from "./Product";


// recebe no page a state que decide qual pagina sera exibida (suco lista, carrinho, quem somos, contato etc...)
type Props = {
    currentMain: string;
    selectedProduct: any;
    onSelectProduct: (product: any) => void;
}



export const Main = ({currentMain, selectedProduct, onSelectProduct}: Props) => {




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

            {/* Outras telas */}
            {currentMain === 'cartItens' && <CartItens />}
            {currentMain === "quemSomos" && <QuemSomos />}
            {currentMain === "contato" && <Contato />}
        </main>
    );
};
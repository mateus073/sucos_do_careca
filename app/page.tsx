'use client';
import { useState } from "react";
import { Footer } from "./componentes/Footer"
import Header from "./componentes/Header"
import { Main } from "./componentes/Main"
import { CartProvider } from "./contexts/CartContext";


export const Page = () => {

  // Estado que guarda qual "aba" está sendo exibida
  const [currentMain, setCurrentMain] = useState('ProductList');

  // guarda qual suco foi selecionado no produtosList para exibir no main
  const [selectedProduct, setSelectedProduct] = useState(null);

  // funcao pra selecionar o suco
  const handleSelectProduct = (product: any) => {
    setCurrentMain('product'); // muda para a tela de detalhes do suco
    setSelectedProduct(product); // armazena o suco selecionado
  }

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header onNavigate={setCurrentMain} />
        </div>

        <main className="flex-grow pt-20">
          <Main
            currentMain={currentMain}
            selectedProduct={selectedProduct}
            onSelectProduct={handleSelectProduct} />
        </main>

        <Footer />
      </div>
    </CartProvider>
  )
}

export default Page
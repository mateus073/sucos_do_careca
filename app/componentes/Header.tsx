// cabecalho do site, onde fica a 
"use client"

import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";


type Props = {
    onNavigate: (currentMain:string) => void;
}

export default function Header({onNavigate}: Props) {
    
  
    const intnsCtx = useContext(CartContext); // valor temporário só pra visualizar (troque depois pelo estado real)

   
    // funoes de interacao dos links do menu
    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.color = '#80BF21';
      };
      const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.color = '#285087';
      };
      const handleFocus = (e: React.FocusEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.color = '#80BF21';
      };
      const handleBlur = (e: React.FocusEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.color = '#285087';
      };
  

    return (
      <header
        className="flex items-center justify-between px-8 py-4 shadow-md"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img
            src="/imgs/logo.jpg"
            alt="Sucos do Careca"
            className="w-12 h-12 object-contain border-4 rounded-full object-cover"
          />
        </div>
  

        {/* AÇÕES (menu + tema + carrinho) */}
        <div className="flex items-center gap-8">
          {/* MENU */}
          <nav className="flex gap-8 font-medium" aria-label="Menu principal">
            <a
              href="#produtos"
              className="transition font-bold text-md md:text-xl"
              style={{ color: '#285087' }}
              onClick={() => onNavigate('ProductList')}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              Produtos
            </a>
  
            <a
              href="#quem-somos"
              className="transition font-bold text-md  md:text-xl"
              style={{ color: '#285087' }}
              onClick={() => onNavigate('quemSomos')}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              Quem Somos
            </a>
  
            <a
              href="#contato"
              className="transition font-bold text-md  md:text-xl"
              style={{ color: '#285087' }}
              onClick={() => onNavigate('contato')}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              Contato
            </a>
          </nav>

          {/* CARRINHO */}
          <div className="relative cursor-pointer" role="button" aria-label="Carrinho de compras" onClick={()=> onNavigate('cartItens')}>
            <img
              src="/imgs/cart-green.png"
              alt="img carrinho"
              className="w-7 h-7"
            />

            {/* BOLINHA DE CONTAGEM */}
            {intnsCtx && intnsCtx.cartItems.length > 0 && (
              <span
                className="absolute -top-2 -right-2 bg-[#285087] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
                aria-hidden="true">
                {intnsCtx.cartItems.length}
              </span>
            )}
          </div>
        </div>
      </header>
    );
  }
  
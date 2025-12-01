// conxtext pro carrinho

import { createContext, useState } from "react";
import { Suco } from "../types/Suco";

type CartContextType = {
    cartItems: Suco[];
    addToCart?: (item: Suco) => void;
    removeFromCart?: (itemId: string) => void;
    clearCart?: () => void;
};



export const CartContext = createContext<CartContextType | null>(null);



export const CartProvider = ({ children }: { children: React.ReactNode }) => {

    const [cartItems, setCartItems] = useState<Suco[]>([]);


    const addToCart = (newItem: Suco) => {
        
        let precoBase = 0

        switch (newItem.tamanho) {
            case '300ML':
                precoBase = newItem.valores[0];
                break;
            case '500ML':
                precoBase = newItem.valores[1];
                break;
            case '1L':
                precoBase = newItem.valores[2];
                break;
            default:
                precoBase = 0;
        }

        const valorFinal = newItem.comLeite ? precoBase + 2 : precoBase;
        
        const itemFinal = {...newItem, valorFinal: valorFinal};

        setCartItems([...cartItems, itemFinal]);
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}
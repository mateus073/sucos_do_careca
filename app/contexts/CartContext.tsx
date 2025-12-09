// conxtext pro carrinho

import { createContext, Dispatch, useReducer } from "react";
import { Suco } from "../types/Suco";
import { CartActions, CartReducer } from "../reducers/CartReducers";

type CartContextType = {
    cartItems: Suco[];
    dispatch: Dispatch<CartActions>
};


export const CartContext = createContext<CartContextType | null>(null);



export const CartProvider = ({ children }: { children: React.ReactNode }) => {

    // useReducer:
    // - CartReducer é a função que ALTERA o estado
    // - [] é o valor inicial do carrinho (array vazio)
    //
    // cartItems = estado atual
    // dispatch = função que envia ações para o reducer
    const [cartItems, dispatch] = useReducer(CartReducer, [])

/*
    // funcao pra adicoinar ao carrinho
    const addToCart = (newItem: Suco) => {
        const itemFinal = {
            ...newItem,
            id: crypto.randomUUID() // cria sequencia de numeros aleatorios pra servir de id
        };

        setCartItems([...cartItems, itemFinal]);

        console.log(cartItems)// console pra ver se foi adicionado corretamente
    }

  
    // funcao de remoçao: 
    const removeFromCart = (id: string) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    }*/


    return (
        <CartContext.Provider value={{ cartItems, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}
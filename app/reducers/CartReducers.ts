import { Suco } from "../types/Suco"

// aqui ficara nosso reducer pro contexto do carrinho
type AddToCart = {
    type: 'add',
    payload: {
        newItem: Suco
    }
}

type RemoveFromCart = {
    type: 'remove',
    payload: {
        id: string
    }
}

type ClearCart = {
    type: 'clear'
}


export type CartActions = AddToCart | RemoveFromCart | ClearCart




// esses: ': Suco[]' que aparece depois dos parâmetros define o tipo de retorno da função.
export const CartReducer = (cartItems: Suco[], action: CartActions): Suco[] => {
    switch (action.type) {

        case 'add':
            return [
                ...cartItems,
                {
                    ...action.payload.newItem,
                    id: crypto.randomUUID()
                }]

        case 'remove':
            return [...cartItems.filter(item => item.id !== action.payload.id)]

        case 'clear':
            return []

        default:
            return cartItems

    }

}
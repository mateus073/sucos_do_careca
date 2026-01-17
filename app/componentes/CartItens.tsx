// compoente do carrinho que cexibe todos os itens adicionados ao carrinho
'use client'

import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";

type Props = {
    onNavigate: (currentMain:string) => void;
}

export const CartItens = ({onNavigate}: Props) => {

    // ctx que contem os itens do carrinho
    const ItensCtxCart = useContext(CartContext)

 
    // calcula total automaticamente:
    const total = ItensCtxCart?.cartItems.reduce(
        (sum, item) => sum + (item.valorFinal ?? 0)
        , 0
    ) ?? 0;
    

    return (
        <section className="bg-white text-black rounded-2xl shadow-xl p-6 w-full max-w-5xl mx-auto">

            {/* TÍTULO PRINCIPAL - SEM ESTAR DENTRO DO FLEX */}
            <h1 className="text-3xl font-bold text-[#285087] mb-20 text-center">
                SEU CARRINHO
            </h1>

            {/* CONTAINER DO CONTEÚDO */}
            <div className="flex flex-col md:flex-row gap-8">

                <div className="flex-1 min-w-[350px] rounded-xl p-5 shadow-md border border-gray-200 ">



                    {/* TÍTULO */}
                    <h2 className="text-2xl font-bold text-[#285087] mb-4 border-b pb-2">
                        PRODUTOS ADICIONADOS
                    </h2>

                    {/* LISTA OU TEXTO DE CARRINHO VAZIO */}
                    {ItensCtxCart?.cartItems.length === 0 ? (
                        <p className="text-gray-500 italic text-center py-8">
                            O carrinho está vazio.
                        </p>
                    ) : (
                        <ul className="flex flex-col gap-4">
                            {ItensCtxCart?.cartItems.map((item, index) => (
                                <li
                                    key={item.id}
                                    className="flex items-center gap-4 
                                p-4 rounded-xl shadow-md
                                border border-gray-200
                                hover:bg-gray-50 transition"
                                >
                                    {/* IMAGEM */}
                                    <img
                                        src={`/imgs/img-${item.picture}-${item.tamanho}.webp`}
                                        alt={item.sabor}
                                        className="w-20 h-20 rounded-lg object-cover shadow-sm"
                                    />


                                    {/* INFORMAÇÕES DO ITEM */}
                                    <div className="flex flex-col flex-1">
                                        <span className="text-lg font-semibold text-[#285087] capitalize">
                                            {item.sabor}
                                        </span>

                                        <span className="text-[#D4DEEE] text-sm text-gray-600">
                                            tamanho:{item.tamanho}
                                        </span>

                                        {item.comLeite && (
                                            <span className="text-[#D4DEEE] text-sm text-gray-600">
                                                com leite
                                            </span>
                                        )}

                                        <span className="text-[#80BF21] font-bold text-sm mt-1">
                                            valor:   R$ {item.valorFinal?.toFixed(2)}
                                        </span>

                                    </div>


                                    {/* AÇÕES */}
                                    <div className="flex flex-col gap-2">
                                        <button
                                            className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-red-600 transition"
                                            onClick={() =>
                                                ItensCtxCart?.dispatch({
                                                    type: 'remove',
                                                    payload: {
                                                        id: item.id
                                                    }
                                                })
                                            }
                                        >
                                            REMOVER
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                    {/* add botao de limpar carrinho */}
                    <div>
                        <button
                            onClick={() => ItensCtxCart?.dispatch({ type: 'clear' })}
                            className=" bg-white text-[#285087] border border-[#285087]
                             py-3 px-4 rounded-xl font-semibold text-lg
                             hover:bg-[#285087] hover:text-white transition
                             shadow-md w-full mt-4">
                            ESVAZIAR CARRINHO
                        </button>
                    </div>
                </div>

                {/* DIV DA ESQUERDA NO PC: RESUMO FINAL */}
                <div className="flex-1 min-w-[260px]  pt-4 md:pt-0 md:pl-6 flex flex-col gap-4">

                    <h2 className="text-2xl font-bold text-[#285087] mb-4 border-b pb-2">
                        RESUMO DA COMPRA
                    </h2>
                    <p className="text-lg font-semibold text-[#285087]">
                        TOTAL:
                        <span className="text-[#80BF21] ml-2">
                            R$ {total}
                        </span>
                    </p>

                    <button
                        className="
                        bg-[#FFFFFF] text-[#285087] border border-[#285087]
                        py-3 rounded-xl font-semibold text-lg
                        hover:bg-[#285087] hover:text-[#FFFFFF] transition
                        shadow-md
                    "
                    >
                        Continuar comprando
                    </button>
                    <button
                        onClick={() => onNavigate('finisBuy1')}
                        className="
                        bg-[#285087] text-[#FFFFFF] border border-[#285087]
                        py-3 rounded-xl font-semibold text-lg
                        hover:bg-[#FFFFFF] hover:text-[#285087] transition
                        shadow-md
                    "
                    >
                        Finalizar compra
                    </button>

                </div>
            </div>
        </section>
    );
}


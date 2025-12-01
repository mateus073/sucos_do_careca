// comopoente que exibe o produto selecionado
// 1 - recebe o objeto do suco selecionado
// 2 - exibe as informaçoes do suco
// 3 - retorna um objeto suco que sera adiconado ao context do carrinho 

'use client'

import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { Suco } from "../types/Suco";

// em main ele recebe o suco selecionado e a funcao de voltar para a lista
type Props = {
    product: any;
}


export const Product = ({ product }: Props) => {

    // ctx dos itens do carrinho
    const ItensCtxCart = useContext(CartContext)

    // estado usado na mini galeria de img, ele define a imagem principal que sera exinida
    const [imgPrincipal, setImgPrincipal] = useState(`img-${product.picture}-300ml.webp`);

    // funcao para trocar a img principal ao clicar na miniatura
    const handleImgClick = (imgSelect: string) => {
        setImgPrincipal(imgSelect);
    }



    // state pra alterar tamanho e leite
    const [tamanho, setTamanho] = useState('');
    const [leite, setLeite] = useState(false);


    // funcao que monta o produto final com tamanho e leite
    const montaProductFinal = () => {
        if (tamanho === '') return alert('Selecione um tamanho para o suco.');

        const productFinal = {
            ...product,
            tamanho: tamanho,
            comLeite: leite
        }

        ItensCtxCart?.addToCart?.(productFinal)

        setTamanho('');
        setLeite(false);
        return console.log(`produto adicionado:`, productFinal);
    }



    // Caso alguém entre na página sem clicar em produto → evita erro
    if (!product) return null;

    return (
        <section className="max-w-3xl mx-auto p-6 ">

            {/* CARD DO PRODUTO */}
            <div className="bg-white p-6 flex flex-col md:flex-row gap-8 relative md:h-[420px]">


                {/* IMAGENS */}
                <div className="flex-1 flex flex-col md:flex-row gap-6 h-full">

                    {/* Miniaturas */}
                    <div className="flex md:flex-col gap-3 justify-center">

                        {/* THUMB 300ML */}
                        <img
                            onClick={() => handleImgClick(`img-${product.picture}-300ml.webp`)}
                            src={`/imgs/img-${product.picture}-300ml.webp`}
                            alt={`${product.sabor} 300ml`}
                            className="  w-20 h-20 object-cover rounded-xl cursor-pointer border-2 border-transparent hover:border-[#80BF21] hover:scale-105 transition"
                        />
                        {/* THUMB 500ML */}
                        <img
                            onClick={() => handleImgClick(`img-${product.picture}-500ml.webp`)}
                            src={`/imgs/img-${product.picture}-500ml.webp`}
                            alt={`${product.sabor} 500ml`}
                            className="  w-20 h-20 object-cover rounded-xl cursor-pointer border-2 border-transparent hover:border-[#80BF21] hover:scale-105 transition"
                        />
                        {/* THUMB 1L */}
                        <img
                            onClick={() => handleImgClick(`img-${product.picture}-1L.webp`)}
                            src={`/imgs/img-${product.picture}-1L.webp`}
                            alt={`${product.sabor} 1L`}
                            className="  w-20 h-20 object-cover rounded-xl cursor-pointer border-2 border-transparent hover:border-[#80BF21] hover:scale-105 transition"
                        />

                    </div>

                    {/* Imagem Principal */}
                    <div className="fflex-1 flex justify-center items-center h-full">
                        <img
                            src={`/imgs/${imgPrincipal}`}
                            alt={product.sabor}
                            className="h-full w-auto max-h-full object-contain rounded-2xl shadow-xl"
                        />
                    </div>
                </div>


                {/* INFORMAÇÕES */}
                <div className="flex-1 flex flex-col gap-4">

                    {/* TAG: temperatura */}
                    <span className={`px-4 py-1 text-white rounded w-fit text-sm font-semibold ${product.temperatura === 'refrigerado'
                        ? 'bg-[#285087]'
                        : 'bg-[#80BF21]'
                        }`}>
                        {product.temperatura}
                    </span>

                    {/* NOME DO SUCO */}
                    <h2 className="text-3xl font-bold text-[#285087] capitalize">
                        {product.sabor}
                    </h2>

                    {/* BENEFÍCIOS */}
                    <p className="text-gray-500 leading-relaxed">
                        {product.benefic}
                    </p>

                    {/* TAMANHOS */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#285087] mb-2">
                            Tamanhos disponíveis:
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {["300ML", "500ML", "1L"].map((item) => (
                                <span
                                    key={item}
                                    onClick={() => setTamanho(tamanho === item ? "" : item)}
                                    className={`px-4 py-2 rounded-xl font-medium text-sm cursor-pointer shadow-sm border transition 
                                            ${tamanho === item
                                            ? "bg-[#80BF21] border-[#80BF21] text-white"
                                            : "text-[#285087] border-[#285087] hover:bg-[#80BF21] hover:border-[#80BF21] hover:text-white"
                                        }`}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* ADICIONAR LEITE */}
                    <div className="flex items-center gap-3 mt-2">
                        <span className="text-[#285087] font-semibold">Adicionar leite?</span>

                        <button
                            onClick={() => setLeite(!leite)}
                            className={`px-4 py-2 border border-[#285087] text-[#285087] rounded-xl font-medium text-sm cursor-pointer hover:bg-[#80BF21] hover:border-[#80BF21] hover:text-white transition shadow-sm
                                ${leite
                                    ? 'bg-[#80BF21] text-white'
                                    : 'bg-white text-[#285087]'} `}
                        >
                            + R$ 2,00
                        </button>
                    </div>

                    {/* PREÇO */}
                    <span className="text-2xl font-bold text-[#80BF21]">
                        R$ {product.valores[0].toFixed(2)}
                    </span>

                    {/* BOTÃO ADICIONAR */}
                    <button
                        onClick={() => montaProductFinal()}
                        className="bg-[#80BF21] hover:bg-[#6aa71c] text-white py-2 px-6 rounded-xl font-semibold transition w-fit shadow-md"
                    >
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </section >
    );
};
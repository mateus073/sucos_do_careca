// type pro item suco

export type Suco = {
    sabor: string;
    picture: string;
    id: string;
    temperatura: 'ambiente' | 'refrigerada';
    valores: number[];
    valorFinal?: number;
    tamanho: string | string[];
    dataValidade: string;
    quantidadeEstoque: number;
    comLeite: boolean;
    benefic: string;
};  
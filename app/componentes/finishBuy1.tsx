// compoente de finalizar a compra 1 
// onde sera inserido os dados do cliente como endereço nome numero etcc...
// ele passa pro finalizar a compra 2 que acaba de finalizar a compra e enviar a mensagem pro careca no whats.
"use client"
import { useState } from "react";
import { DataClient } from "../types/DataClient";

export default function FinishBuy1() {

    // ===============================
    // STATES DE VALORES
    // ===============================
    const [name, setName] = useState("");
    const [telefone, setTelefone] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");


    // ===============================
    // STATES DE ERRO + MENSAGEM
    // ===============================

    // NAME
    const [nameErro, setNameErro] = useState(false);
    const [nameErroMsg, setNameErroMsg] = useState("");

    // TELEFONE
    const [telefoneErro, setTelefoneErro] = useState(false);
    const [telefoneErroMsg, setTelefoneErroMsg] = useState("");

    // RUA
    const [ruaErro, setRuaErro] = useState(false);
    const [ruaErroMsg, setRuaErroMsg] = useState("");

    // NÚMERO
    const [numeroErro, setNumeroErro] = useState(false);
    const [numeroErroMsg, setNumeroErroMsg] = useState("");

    // COMPLEMENTO (opcional → normalmente não precisa erro)
    const [complementoErro, setComplementoErro] = useState(false);
    const [complementoErroMsg, setComplementoErroMsg] = useState("");

    // BAIRRO
    const [bairroErro, setBairroErro] = useState(false);
    const [bairroErroMsg, setBairroErroMsg] = useState("");


    // ===============================
    //  FUNÇOES DE VALIDAÇAO DE FORMULARIO:
    // ===============================

    // funcao pra validar nome:
    const validName = (value: string) => {
        if (value.trim() === "") {
            setNameErro(false);
            setNameErroMsg("");
            return;
        }

        if (/\d/.test(value)) {
            setNameErro(true);
            setNameErroMsg("Nome não pode conter números");
        } else {
            setNameErro(false);
            setNameErroMsg("");
        }
    };


    // funcao pra validar telefone:
    const validTelefone = (value: string) => {
        if (value.length === 0) {
            setTelefoneErro(false);
            setTelefoneErroMsg("");
            return;
        }
        else if (/[a-zA-Z]/.test(value)) {
            setTelefoneErro(true);
            setTelefoneErroMsg("Telefone invalido");
        } else if (value.length < 10 || value.length > 11) {
            setTelefoneErro(true);
            setTelefoneErroMsg("Telefone inconpleto");
        } else {
            setTelefoneErro(false);
            setTelefoneErroMsg("");
        }
    };


    
    
    
   
// funcao que cria o objeto dados compra 1:
const handlesubmit = () => { 
    // aqui e feita a logica de criaçao do objeto compra
    if (!name || !telefone || !rua || !numero || !bairro ) {
        alert("preencha todos os campos.")
        return
    }

    const dataCliente: DataClient = {
        name,
        telefone,
        rua,
        numero,
        complemento,
        bairro,
    }
}

return (
        <div className="max-w-xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-[#285087] mb-6 border-b pb-2">
                Cadastro de Endereço
            </h2>

            <form className="flex flex-col gap-5">

                {/* NOME */}
                <div className="flex flex-col">
                    <label className={`text-sm font-semibold mb-1 ${!nameErro ? "text-[#285087]" : "text-red-400"}`}>
                        {!nameErro ? 'Nome completo' : nameErroMsg}
                    </label>
                    <input
                        placeholder="Ex: João Silva"
                        type="text"
                        onChange={(e) => {
                            setName(e.target.value)
                            const value = e.target.value
                            validName(value)
                        }}
                        className={`
                        border rounded-lg px-4 py-2 text-[#285087]
                        focus:outline-none focus:ring-2
                        ${nameErro
                                ? "border-red-400 focus:ring-red-300"
                                : "border-gray-300 focus:ring-[#285087]"
                            }
                        `}
                    />
                </div>

                {/* TELEFONE */}
                <div className="flex flex-col">
                    <label className={`text-sm font-semibold mb-1 ${!telefoneErro ? "text-[#285087]" : "text-red-400"}`}>
                        {!telefoneErro ? "Telefone" : telefoneErroMsg}
                    </label>

                    <input
                        onChange={(e) => {
                            setTelefone(e.target.value)
                            validTelefone(e.target.value)
                        }}
                        type="text"
                        className={`
                                text-[#285087] rounded-lg px-4 py-2
                                focus:outline-none focus:ring-2
                                  ${telefoneErro
                                ? "border border-red-400 focus:ring-red-300"
                                : "border border-gray-300 focus:ring-[#285087]"
                            }
    `}
                        placeholder="(XX) XXXXX-XXXX"
                    />
                </div>

              

                {/* RUA */}
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-[#285087] mb-1">
                        Rua / Logradouro
                    </label>
                    <input
                        onChange={(e) => setRua(e.target.value)}
                        type="text"
                        className="text-[#285087] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#285087]"
                        placeholder="Nome da rua"
                    />
                </div>

                {/* NÚMERO + COMPLEMENTO */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold text-[#285087] mb-1">
                            Número
                        </label>
                        <input
                            onChange={(e) => setNumero(e.target.value)}
                            type="text"
                            className="text-[#285087] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#285087]"
                            placeholder="000"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold text-[#285087] mb-1">
                            Complemento (opcional)
                        </label>
                        <input
                            onChange={(e) => setComplemento(e.target.value)}
                            type="text"
                            className="text-[#285087] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#285087]"
                            placeholder="Casa / Apto / Bloco"
                        />
                    </div>
                </div>

                {/* BAIRRO */}
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-[#285087] mb-1">
                        Bairro
                    </label>
                    <input
                        onChange={(e) => setBairro(e.target.value)}
                        type="text"
                        className="text-[#285087] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#285087]"
                        placeholder="Seu bairro"
                    />
                </div>

            

                {/* BOTÃO */}
                <button
                    type="submit"
                    className="
              bg-[#285087] text-white font-semibold text-lg
              py-3 rounded-xl shadow-md
              hover:bg-white hover:text-[#285087] border border-[#285087]
              transition mt-4
            "
                >
                    Salvar Endereço
                </button>
            </form>
        </div>
    );
}

   
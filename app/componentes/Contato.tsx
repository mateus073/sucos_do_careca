"use client";

export const Contato = () => {
  return (
    <section
      className="max-w-3xl mx-auto p-8 flex flex-col gap-8"
      style={{ color: "#285087" }}
    >
      {/* TÍTULO */}
      <h2 className="text-3xl font-bold text-center" style={{ color: "#285087" }}>
        Entre em Contato
      </h2>

      {/* DESCRIÇÃO */}
      <p className="text-lg text-center leading-relaxed">
        Tem alguma dúvida, sugestão ou deseja fazer um pedido especial?
        Fale com a gente! Estamos sempre prontos para te atender.
      </p>

      {/* FORMULÁRIO */}
      <form
        className="flex flex-col gap-6 p-6 rounded-xl shadow-md"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        {/* NOME */}
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="font-medium">
            Nome
          </label>
          <input
            id="nome"
            type="text"
            placeholder="Seu nome"
            className="border p-3 rounded-md outline-none focus:ring-2"
            style={{
              borderColor: "#285087",
              caretColor: "#285087",
              boxShadow: "0 0 0 0 transparent",
            }}
          />
        </div>

        {/* EMAIL */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-medium">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="Seu e-mail"
            className="border p-3 rounded-md outline-none focus:ring-2"
            style={{
              borderColor: "#285087",
              caretColor: "#285087",
            }}
          />
        </div>

        {/* MENSAGEM */}
        <div className="flex flex-col gap-2">
          <label htmlFor="mensagem" className="font-medium">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            placeholder="Escreva sua mensagem..."
            className="border p-3 rounded-md outline-none h-32 resize-none focus:ring-2"
            style={{
              borderColor: "#285087",
              caretColor: "#285087",
            }}
          />
        </div>

        {/* BOTÃO */}
        <button
          type="submit"
          className="w-full py-3 font-medium rounded-md transition"
          style={{
            backgroundColor: "#80BF21",
            color: "#FFFFFF",
          }}
        >
          Enviar Mensagem
        </button>
      </form>

      {/* INFORMAÇÕES DE CONTATO */}
      <div className="flex flex-col items-center gap-2 text-center mt-4">
        <p className="text-lg font-semibold">Outros canais:</p>

        <p className="text-md">
          📞 <strong>(11) 99999-0000</strong>
        </p>
        <p className="text-md">
          📧 <strong>contato@sucosdocareca.com</strong>
        </p>
        <p className="text-md">
          📍 Av. dos Sucos Naturais, 123 - São Paulo
        </p>
      </div>
    </section>
  );
};

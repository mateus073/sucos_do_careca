"use client";

export const QuemSomos = () => {
  return (
    <section
      className="max-w-4xl mx-auto p-8 flex flex-col gap-8"
      style={{ color: "#285087" }}
    >
      {/* TÍTULO */}
      <h2 className="text-3xl font-bold text-center" style={{ color: "#285087" }}>
        Quem Somos
      </h2>

      {/* TEXTO PRINCIPAL */}
      <p className="text-lg leading-relaxed text-justify">
        Somos a <strong>Sucos do Careca</strong>, uma empresa apaixonada por saúde,
        sabor e qualidade. Desde a nossa fundação, buscamos oferecer sucos
        naturais preparados com frutas frescas selecionadas, valorizando a
        simplicidade e o cuidado em cada detalhe.
      </p>

      <p className="text-lg leading-relaxed text-justify">
        Nosso compromisso é entregar bebidas nutritivas, refrescantes e livres de
        conservantes. Acreditamos que um bom suco pode transformar o dia de uma
        pessoa — e é por isso que fazemos tudo com carinho, dedicação e aquele
        toque especial que só a Sucos do Careca tem.
      </p>

      {/* SEÇÃO MISSÃO / VISÃO / VALORES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* MISSÃO */}
        <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-md"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <h3 className="text-xl font-semibold mb-3" style={{ color: "#80BF21" }}>
            Missão
          </h3>
          <p className="text-sm">
            Oferecer sucos naturais de alta qualidade, promovendo bem-estar e
            saúde com ingredientes frescos e processos responsáveis.
          </p>
        </div>

        {/* VISÃO */}
        <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-md"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <h3 className="text-xl font-semibold mb-3" style={{ color: "#80BF21" }}>
            Visão
          </h3>
          <p className="text-sm">
            Ser referência nacional em bebidas naturais, reconhecida por qualidade,
            inovação e compromisso com o cliente.
          </p>
        </div>

        {/* VALORES */}
        <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-md"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <h3 className="text-xl font-semibold mb-3" style={{ color: "#80BF21" }}>
            Valores
          </h3>
          <p className="text-sm">
            Transparência, respeito, qualidade, sustentabilidade e foco total na
            experiência do cliente.
          </p>
        </div>
      </div>

      {/* IMAGEM */}
      <div className="flex justify-center mt-6">
        <img
          src="/imgs/baner.png"
          alt="Equipe Sucos do Careca"
          className="rounded-xl shadow-lg w-full max-w-2xl object-cover"
        />
      </div>
    </section>
  );
};

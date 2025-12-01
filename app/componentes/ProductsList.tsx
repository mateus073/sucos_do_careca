'use client'
import { sucos } from "../datas/SucosList"

type Props = {
  onSelectProduct: (product: any) => void;
}

export const ProductsList = ({ onSelectProduct }: Props) => {
  return (
    <section className="w-full font-bold">

      {/* BANNER FULL WIDTH */}
      <div className="w-full">
        <img
          src="/imgs/baner.jpg"
          alt="Banner de sucos"
          className="w-full object-cover"
        />
      </div>

      {/* TEXTO */}
      <div className="w-full flex items-center justify-center gap-20 py-6 px-4">

        <span className="text-[#80BF21] text-md md:text-xl">
          temos sucos:
        </span>

        <span className="flex items-center gap-2 text-[#023373] text-md md:text-xl">
          Naturais
          <span>🌿</span>
        </span>

        <span className="flex items-center gap-2 text-[#023373] text-md md:text-xl">
          Frescos
          <span>❄️</span>
        </span>

        <span className="flex items-center gap-2 text-[#023373] text-md md:text-xl">
          Saborosos
          <span>🍃</span>
        </span>
      </div>

      {/* SESSÃO DE SABORES */}
      <div className="w-full pb-10">

        {/* Título */}
        <div className="w-full bg-[#023373] py-6 px-4 text-left">
          <span className="text-white text-4xl md:text-5xl tracking-tight uppercase font-extrabold">
            Sabores
          </span>
        </div>

        {/* LISTA DE SUCOS */}
        <div className="bg-white flex flex-wrap gap-6 p-5 justify-center">

          {sucos.map((suco, index) => {
            const isRefrigerado = suco.temperatura === "refrigerada";

            const bgTemperatura = isRefrigerado
              ? "bg-blue-100 text-blue-900"
              : "bg-green-100 text-green-900";

            const icone = isRefrigerado ? "❄" : "🌿";

            return (
              <div
                onClick={() => onSelectProduct(suco)}
                key={index}
                className="w-64 border rounded-3xl shadow-md p-4 flex flex-col items-center cursor-pointer"
              >
                <img
                  src={`/imgs/img-${suco.picture}-300ml.webp`}
                  alt={suco.sabor}
                  className="h-40 object-contain mb-3"
                />

                <h2 className="text-md md:text-xl font-bold text-[#0A2F5A] text-center uppercase mb-3">
                  {suco.sabor}
                </h2>

                <div
                  className={`${bgTemperatura} px-4 py-2 rounded-xl flex items-center gap-2 text-md md:text-md font-bold capitalize`}
                >
                  {suco.temperatura}
                  <span>{icone}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

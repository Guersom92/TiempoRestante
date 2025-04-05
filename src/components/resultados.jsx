import React from "react";
import calculadorDeSemanas from "../logica/calculadorSemanas";

function Resultados({ añosVividos, expectativa, setMostrarFormulario }) {
  const semanasTotales = calculadorDeSemanas(expectativa);
  const semanasVividas = calculadorDeSemanas(añosVividos);

  // Creamos un arreglo con el total de semanas.
  const semanas = Array.from({ length: semanasTotales }, (_, index) => index);

  return (
    <>
      <div className=" h-svh w-screen flex flex-col justify-center p-6 ">
        {/* Leyenda */}

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 pb-5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm">Semanas vividas: {semanasVividas}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span className="text-sm">Semanas restantes: {semanasTotales}</span>
          </div>
        </div>

        {/* Contenedor de círculos */}
        <div className=" md:overflow-auto overflow-y-scroll">
          <div
            className="grid gap-0.5 w-full"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(0.5rem, 1fr))",
            }}
          >
            {semanas.map((week, index) => (
              <div
                key={index}
                className={`aspect-square rounded-full ${
                  index < semanasVividas ? "bg-blue-500" : "bg-green-400"
                }`}
              ></div>
            ))}
          </div>
        </div>

        <button
          onClick={() => setMostrarFormulario(true)}
          className="text-white mt-4 bg-[#0066CC] hover:bg-[#005bb5] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full   sm:w-auto px-5 py-2.5 text-center mx-auto"
        >
          Recalcular
        </button>
      </div>
    </>
  );
}

export default Resultados;

import { useState } from "react";

export default function Formulario({
  setAñosVividos,
  setExpectativa,
  setMostrarFormulario,
}) {
  const [error, setError] = useState("");

  //Funcion q se ejecuta luego de presionar el boton del Formulario
  function handleSubmit(event) {
    event.preventDefault();
    const { edad, expectativa } = event.target;
    const edadNum = parseInt(edad.value, 10);
    const expectativaNum = parseInt(expectativa.value, 10);

    if (edadNum === expectativaNum || expectativaNum < edadNum) {
      setError("Inputs invalidos");
    } else {
      setAñosVividos(edadNum);
      setExpectativa(expectativaNum);
      setMostrarFormulario(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-100  h-svh w-9/12 flex flex-col  mx-auto"
    >
      <h1 className=" text-5xl  my-10 text-center">Calculadora de Tiempo</h1>
      <div className="my-5">
        <label
          htmlFor="edad"
          className="block mb-2 text-sm font-medium text-gray-800 "
        >
          Tu edad
        </label>
        <input
          name="edad"
          id="edad"
          type="number"
          min="1"
          className="focus:outline-2 focus:outline-sky-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
          required
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="expectativa"
          className="block mb-2 text-sm font-medium text-gray-800"
        >
          Tu expectativa de vida
        </label>
        <input
          name="expectativa"
          id="expectativa"
          type="number"
          min="1"
          className="focus:outline-2 focus:outline-sky-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-[#0066CC] hover:bg-[#005bb5] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
      >
        Calcular
      </button>
      {error && <p className="py-1.5 mt-2 text-sm text-red-600 ">{error}</p>}
    </form>
  );
}

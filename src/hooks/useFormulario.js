import { useState } from "react";

export default function useFormulario({
  setAñosVividos,
  setExpectativa,
  setMostrarFormulario,
}) {
  const [error, setError] = useState("");

  const validarInputs = (edad, expectativa) => {
    return edad >= expectativa;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const edad = parseInt(formData.get("edad"), 10);
    const expectativa = parseInt(formData.get("expectativa"), 10);

    if (validarInputs(edad, expectativa)) {
      setError("Inputs inválidos");
      return;
    }

    setError("");
    setAñosVividos(edad);
    setExpectativa(expectativa);
    setMostrarFormulario(false);
  };

  return { error, handleSubmit };
}

import { useState } from "react";
import Formulario from "./components/formulario";
import Resultados from "./components/resultados";

function App() {
  const [añosVividos, setAñosVividos] = useState(0);
  const [expectativa, setExpectativa] = useState(0);
  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  return (
    <>
      <div>
        {mostrarFormulario ? (
          <Formulario
            setAñosVividos={setAñosVividos}
            setExpectativa={setExpectativa}
            setMostrarFormulario={setMostrarFormulario}
          />
        ) : (
          <Resultados
            añosVividos={añosVividos}
            expectativa={expectativa}
            setMostrarFormulario={setMostrarFormulario}
          />
        )}
      </div>
    </>
  );
}

export default App;

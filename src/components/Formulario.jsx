import React, { useState } from 'react'
import Card from './card';
import "../css/Formulario.css"

const Formulario = () => {

    const [nombre, setName] = useState("");
    const [especie, setEspecie] = useState("");
    const [error, setError] = useState("");
    const [flag, setFlag] = useState(false);
    const [datos, setDatos] = useState({ nombre: "", especie: "" });
    
    const input1Regex = /^[^\s][\S\s]{2,}$/;
    const input2Regex = /^.{6,}$/;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
    
        if (!input1Regex.test(nombre) || !input2Regex.test(especie) ) {
          setError("Por favor chequea que la información sea correcta");
          return;
        } else{
            console.log("Formulario enviado con éxito");
            setFlag(true);
        } 
        setDatos({ nombre, especie });
        setName("");
        setEspecie("");
      };


      return (
        <div>
          <form onSubmit={handleSubmit}>
            <label>Ingresa el nombre de tu mascota</label>
            <input type="text" value={nombre} onChange={(e) => setName(e.target.value)}/>
            <label>¿De qué especie es?</label>
            <input type="text" value={especie} onChange={(e) => setEspecie(e.target.value)}/>
            {error && <p style={{color: "red"}}>{error}</p>}
            <button type="submit">Enviar</button>
          </form>
          {flag ? <Card nombre={datos.nombre} especie={datos.especie} /> : null}
        </div>
      );
}

export default Formulario

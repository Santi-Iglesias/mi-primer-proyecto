"use client"
import React, { useRef, useState } from 'react';

const PaginaContacto = () => {
  const nombreRef = useRef(null);
  const correoRef = useRef(null);
  const mensajeRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = nombreRef.current.value;
    const correo = correoRef.current.value;
    const mensaje = mensajeRef.current.value;

    if (!nombre || !correo || !mensaje) {
      return;
    }

    console.log('Nombre:', nombre);
    console.log('Correo:', correo);
    console.log('Mensaje:', mensaje);

    alert("Usuario creado con exito, bienvenido");

  };

  return (
    <div>
      <h2>¡Esta es la página para contactarnos!</h2>
      <p>Nuestros datos:</p>
      <p>Facebook: Puresito</p>
      <p>Instagram: pure.papa</p>
      <p>Correo electrónico: puredepapa@gmail.com</p>
      <p>Teléfono: 2234925271</p>

      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre"></label>
          <input type="text" id="nombre" ref={nombreRef} placeholder='Nombre' />
        </div>
        <div>
          <label htmlFor="correo"></label>
          <input type="email" id="correo" ref={correoRef} placeholder='Correo Electrónico' />
        </div>
        <div>
          <label htmlFor="mensaje"></label>
          <textarea id="mensaje" rows="4" ref={mensajeRef} placeholder='Mensaje' ></textarea>
        </div>
        <button type="submit">Enviar</button>
        
      </form>
    </div>
  );
};

export default PaginaContacto;
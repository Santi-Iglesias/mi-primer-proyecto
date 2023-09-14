import React from 'react';
import Image from 'next/image'
import Counter from './components/Counter'

export default function Home() {
  return (
    <main className="">
      <h1>Hola soy la pagina principal con el contador</h1>
      <Counter />
    </main>
  )
}

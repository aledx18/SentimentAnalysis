/* eslint-disable multiline-ternary */
/* eslint-disable indent */
import Head from 'next/head'
import React, { useState } from 'react'
import service from './components/service'
import RandomSvg from './components/random'

interface Respuesta {
  id: string
  input: string
  prediction: string
  confidence: number
  labels: {
    negativo: {
      confidence: number
    }
    neutral: {
      confidence: number
    }
    positivo: {
      confidence: number
    }
  }
}

export default function Home() {
  const [text, setText] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [res, setRes] = useState<Respuesta[]>([])

  async function handdleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (text) {
      const result = await service(text)

      if (typeof result.then === 'function') {
        const resolvedResult = await result
        setRes(resolvedResult)
      } else {
        setRes(result)
      }
    }

    setText('')
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
    console.log(text)
  }

  return (
    <>
      <Head>
        <title>Analizer</title>
      </Head>
      <main className='bg-slate-100'>
        <div className='flex h-screen justify-center items-center m-auto'>
          <form action='' onSubmit={handdleSubmit}>
            <label className='flex flex-col-reverse relative focus group'>
              <input
                className='px-4 py-3 leading-2 rounded-xl shadow-md focus:outline-none focus:border-sky-400'
                type='text'
                onChange={handleChange}
              />
            </label>
            <button className='bg-blue-300 py-2 px-2 rounded-md'>Enviar</button>
            {res?.map((r) => (
              <div key={r.id}>
                <h2 key={r.id}> {r.prediction} </h2>
                {r.prediction === 'negativo' ? (
                  <RandomSvg type='negativo' />
                ) : (
                  <RandomSvg type='positivo' />
                )}
              </div>
            ))}
          </form>
        </div>
      </main>
    </>
  )
}

// ;<h3>
//   {r.prediction === 'negativo' ? (
//     <PositivoOne />
//   ) : r.prediction === 'positivo' ? (
//     '😀'
//   ) : (
//     '😐'
//   )}
// </h3>

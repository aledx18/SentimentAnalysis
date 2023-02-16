import Head from 'next/head'
import React, { useState } from 'react'
import service from './components/service'

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
  const [res, setRes] = useState<Respuesta[]>([])

  async function handdleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (text) {
      const result = await service(text)
      setRes(result)
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
                className='border-2 border-black px-4 py-3 leading-9'
                type='text'
                onChange={handleChange}
              />
            </label>
            <button className='bg-blue-300 py-2 px-2 rounded-md'>Enviar</button>
            {res?.map((r) => (
              <div key={r.id}>
                <h2 key={r.id}> {r.prediction} </h2>
                <h3>
                  {r.prediction === 'negativo'
                    ? '😌'
                    : r.prediction === 'positivo'
                    ? '😃'
                    : '😐'}
                </h3>
              </div>
            ))}
          </form>
        </div>
      </main>
    </>
  )
}

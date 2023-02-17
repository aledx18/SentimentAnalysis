/* eslint-disable multiline-ternary */
/* eslint-disable indent */
import Head from 'next/head'
import React, { useState } from 'react'
// import service from './components/service'
import RandomSvg from './components/random'

// interface Respuesta {
//   id: string
//   input: string
//   prediction: string
//   confidence: number
//   labels: {
//     negativo: {
//       confidence: number
//     }
//     neutral: {
//       confidence: number
//     }
//     positivo: {
//       confidence: number
//     }
//   }
// }

export default function Home() {
  const [text, setText] = useState('')
  const [res, setRes] = useState('')

  async function handdleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!text) return
    try {
      const response = await fetch(
        'https://sentiment-analysis-liart.vercel.app/api/cohere',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ prompt: text })
        }
      )

      const result = await response.json()

      console.log(result.prediction)
      setRes(result.prediction)
    } catch (error) {
      console.error(`Failed to fetch sentiment analysis: ${error}`)
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
            {res && (
              <div>
                <h2> {res} </h2>
                {res === 'negativo' ? (
                  <RandomSvg type='negativo' />
                ) : (
                  <RandomSvg type='positivo' />
                )}
              </div>
            )}
          </form>
        </div>
      </main>
    </>
  )
}

// async function service(text: string) {
//   try {
//     const response = await fetch(
//       'https://sentiment-analysis-liart.vercel.app/',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ prompt: text })
//       }
//     )

//     const json = await response.json()

//     return json
//   } catch (error) {
//     console.error(`Failed to fetch sentiment analysis: ${error}`)
//     return Promise.reject(error)
//   }
// }

// export default service

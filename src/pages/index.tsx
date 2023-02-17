/* eslint-disable multiline-ternary */
/* eslint-disable indent */
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import RandomSvg from './components/random'
import { Base } from './components/icons'

export default function Home() {
  type RandomSvgType = 'positivo' | 'negativo' | 'neutral' | ''
  const [text, setText] = useState('')
  const [res, setRes] = useState<RandomSvgType>('')

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

      setRes(result.prediction)
    } catch (error) {
      console.error(`Failed to fetch sentiment analysis: ${error}`)
    }

    setText('')
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setRes('')
    setText(event.target.value)
  }

  return (
    <>
      <Head>
        <title>Analizer</title>
      </Head>

      <section className='pt-2 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary'>
        <div className='md:flex-1 md:mr-20'>
          <h1 className='font-pt-serif text-5xl font-bold mb-7'>
            How do you feel today ?
          </h1>
          <p className='font-pt-serif font-normal mb-7'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            harum tempore consectetur voluptas.
          </p>
          <div className='font-montserrat'>
            <form onSubmit={handdleSubmit}>
              <label
                htmlFor='default-search'
                className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
              >
                Search
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                  </svg>
                </div>
                <input
                  type='text'
                  onChange={handleChange}
                  className='block w-full font-pt-serif font-medium p-4 pl-10 text-sm shadow-lg text-gray-90 rounded-lg focus:outline-neutral-600  border-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Today...'
                  required
                />
                <button
                  type='submit'
                  className='text-gray-black absolute right-2 bottom-2 border-2 border-black border-solid hover:text-gray-50 hover:bg-black/75 focus:outline-none font-medium rounded-lg text-sm px-4 py-2'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <h2 className='font-pt-serif font-normal py-3'> {res && res} </h2>
        </div>
        <div className='flex justify-around md:block mt-8 md:mt-0 md:flex-1'>
          <div className='relative'>
            <Image
              src='./Highlight1.svg'
              alt=''
              className='absolute -top-10 -left-2'
              width={100}
              height={100}
            />
          </div>
          <div className='w-80'>
            {!res ? <Base /> : <RandomSvg type={res} />}
          </div>
          <div className='relative'>
            <Image
              src='./Highlight2.svg'
              alt=''
              className='absolute -bottom-2 right-20'
              width={80}
              height={100}
            />
          </div>
        </div>
      </section>
    </>
  )
}

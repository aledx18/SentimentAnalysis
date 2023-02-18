/* eslint-disable multiline-ternary */
/* eslint-disable indent */
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import RandomSvg from './components/random'
import { Base } from './components/icons'

export default function Home() {
  type RandomSvgType = 'positive' | 'negative' | 'neutral' | ''
  const [text, setText] = useState('')
  const [res, setRes] = useState<RandomSvgType>('')
  const [spinner, setSpinner] = useState(false)

  async function handdleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!text) return
    try {
      setSpinner(true)
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
      setSpinner(false)
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
          <h1 className='font-pt-serif text-6xl font-bold mb-7'>
            How do you feel today ?
          </h1>
          <p className='font-pt-serif font-normal text-xl mb-7'>
            Sentiment analysis is a type of classification task that analyzes
            the tone of a text. For example... "Today I feel exhausted" or "I
            failed my exam".
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

                {spinner ? (
                  <button
                    disabled
                    type='button'
                    className='py-2 px-4 text-sm absolute right-2 bottom-2 font-medium text-gray-black rounded-lg border-2 border-black hover:bg-black/75 hover:text-gray-50 focus:outline-none inline-flex items-center cursor-not-allowed'
                  >
                    <svg
                      aria-hidden='true'
                      role='status'
                      className='inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600'
                      viewBox='0 0 100 101'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                        fill='currentColor'
                      />
                      <path
                        d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                        fill='#000000'
                      />
                    </svg>
                    Loading...
                  </button>
                ) : (
                  <button
                    type='submit'
                    className='text-gray-black absolute right-2 bottom-2 border-2 border-black border-solid hover:text-gray-50 hover:bg-black/75 focus:outline-none font-medium rounded-lg text-sm px-4 py-2'
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
          <h2 className='font-pt-serif font-medium py-3'>
            {' '}
            You feel ... {res && res}{' '}
          </h2>
        </div>
        <div className='flex justify-around md:block mt-8 md:mt-0 md:flex-1'>
          <div className='relative'>
            <Image
              src='./Highlight1.svg'
              alt=''
              className='absolute -top-10 left-20'
              width={120}
              height={100}
            />
          </div>
          <div className='w-96 mx-auto'>
            {!res ? <Base /> : <RandomSvg type={res} />}
          </div>
          <div className='relative'>
            <Image
              src='./Highlight2.svg'
              alt=''
              className='absolute -bottom-2 right-24'
              width={100}
              height={100}
            />
          </div>
        </div>
      </section>
    </>
  )
}

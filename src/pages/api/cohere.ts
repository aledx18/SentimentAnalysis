import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return res.status(405).end()

  const { prompt } = req.body

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' })
  }

  const apiUrl = 'https://api.cohere.ai/classify'
  const authToken = process.env.API_KEY

  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        Authorization: `BEARER ${authToken}`,
        'Content-Type': 'application/json',
        'Cohere-Version': '2022-12-06'
      },
      body: JSON.stringify({
        model: 'large',
        inputs: [`${prompt}`],
        examples: [
          { text: 'Me siento mal ', label: 'negativo' },
          { text: 'Me siento muy mal', label: 'negativo' },
          { text: 'Hoy me chocaron', label: 'negativo' },
          { text: 'Hoy me robaron', label: 'negativo' },
          { text: 'Hoy desaprobe un examen', label: 'negativo' },
          { text: 'Me fue un poco mal en un examen', label: 'negativo' },
          { text: 'Me siento feliz', label: 'positivo' },
          { text: 'Me duele un poquito la cabeza', label: 'neutral' },
          { text: 'No puedo levantarme de mi cama', label: 'negativo' },
          { text: 'Hoy me siento infeliz', label: 'negativo' },
          { text: 'Hoy trabaje un poco menos', label: 'neutral' },
          { text: 'Me siento con muchos animos', label: 'positivo' },
          { text: 'Me encuentro bien de salud', label: 'positivo' },
          { text: 'Me despidieron', label: 'negativo' },
          { text: 'Me ascendieron en mi trabajo', label: 'positivo' },
          { text: 'Hoy me regalaron algo', label: 'positivo' },
          { text: 'Murio mi perrito', label: 'negativo' },
          { text: 'Cocine mi comida favorita', label: 'positivo' },
          { text: 'Estoy un poco deprimido', label: 'positivo' },
          { text: 'Estoy bien pero no muy feliz', label: 'neutral' },
          { text: 'Gane un premio', label: 'positivo' },
          { text: 'Casi gane un premio', label: 'neutral' },
          { text: 'Me siento indiferente', label: 'neutral' },
          { text: 'Estoy un poco preocupado', label: 'neutral' },
          { text: 'Estoy incomodo', label: 'neutral' }
        ]
      })
    }

    const response = await fetch(apiUrl, requestOptions)
    const data = await response.json()

    if (!data) {
      console.error(data.statusText)
      return res.status(500).json({ error: 'cohere API error' })
    }

    return res.status(200).json(data.classifications)
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: e })
  }
  res.end()
}

// fetch(apiUrl, requestOptions)
//   .then((response) => response.json())
//   .then((data) => {
//     if (!data) {
//       console.error(data.statusText)
//       return res.status(500).json({ error: 'cohere API error' })
//     }

//     return res.status(200).json(data.classifications)
//   })

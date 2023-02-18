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
  let text = process.env.TEXT

  if (text) {
    text = JSON.parse(text)
  }
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
        examples: text
      })
    }

    const response = await fetch(apiUrl, requestOptions)
    const data = await response.json()

    if (!data) {
      console.error(data.statusText)
      return res.status(500).json({ error: 'cohere API error' })
    }

    return res.status(200).json(data.classifications[0])
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: e })
  }
  res.end()
}

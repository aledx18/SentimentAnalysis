async function service(text: string) {
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

    const json = await response.json()

    return json
  } catch (error) {
    console.error(`Failed to fetch sentiment analysis: ${error}`)
    return Promise.reject(error)
  }
}

export default service

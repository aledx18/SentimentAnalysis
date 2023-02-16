async function service(text: string) {
  try {
    const response = await fetch('/api/cohere', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt: text })
    })

    const json = await response.json()

    return json
  } catch (e) {
    console.log(e)
  }
}

export default service

import { useEffect, useState } from "react"

function AdviceSection() {

  const [randomAdvice, setRandomAdvice] = useState([])
  const [savedAdvice, setSavedAdvice] = useState([])


  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice`)
      .then(res=>res.json())
      .then(data=>setRandomAdvice(data.slip))
  }, [])

  useEffect(() => {
    fetch(`http://localhost:5000/saved`)
      .then(res=>res.json())
      .then(data=>setSavedAdvice(data))
  }, [savedAdvice])

  const getNewAdvice = () => {
    fetch(`https://api.adviceslip.com/advice`)
      .then(res=>res.json())
      .then(data=>setRandomAdvice(data.slip))
  }

  const saveAdvice = () => {
    const body = {advice: randomAdvice.advice}
    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
    }}

    fetch(`http://localhost:5000/saved`, options)
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip"></section>
      <h3>Some Advice</h3>
      <p>{randomAdvice.advice}</p>
      <button onClick={getNewAdvice}>Get More Advice</button>
      <button onClick={saveAdvice}>Save to Favourites</button>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {savedAdvice.map((slip, index)=>(
            <li key={index}>{slip.advice}</li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default AdviceSection

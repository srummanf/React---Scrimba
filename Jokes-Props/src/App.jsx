import React from 'react'
import Jokes from './components/Jokes'
import './App.css'

function App() {
  return (
    <>
      < Jokes
        heading="I got my daughter a fridge for her birthday."
      joke="I can't wait to see her face light up when she opens it."
    />
    <Jokes
        heading="How did the hacker escape the police?"
        joke="Scurvy."></Jokes>
    </>
  )
}

export default App

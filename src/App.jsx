import React from 'react'
import './App.css'
import Dice from './Dice'

function App() {

  return (

      <div className='App'>
        <h1>Lets Design an App !</h1>
        <Dice numDice={4} maxVal={6} />
        <Dice title='Roll Me !' />
      </div>
  )

}

export default App

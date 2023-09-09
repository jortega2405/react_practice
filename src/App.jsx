import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Text from './components/Text'
import Counter from './components/Counter'
import Lists from './components/Lists'
import Form from './components/Form'

function App() {
  const style = 'active'
  const content = 'Good Morning'

  return (
    <>
      <h1>Hello world</h1>
      <div className={style}>{content}</div>
      <Text/>
      <Form/>
      <Counter/>
      <Lists/> 
    </>
  )
}

export default App

import { useState } from 'react'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar.css/SearchBar'
import Main from './components/Main/Main'
import './App.css'
import {movieData} from './movieData'

function App() {

  const movieElements = movieData.map((entry) => {
    return (
      <Main key={entry.id} entry={entry} />
      
    )
  })

  return (
    <>
      <Header />
      <SearchBar />  
      <main className='container'>
        {movieElements}
      </main>
      
    </>
      
  )
}

export default App

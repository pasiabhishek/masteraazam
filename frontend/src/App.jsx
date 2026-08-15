import React from 'react'
import Nav from './component/Nav'
import Hero from './component/Hero'
import About from './component/About'
import Book from './component/Book'
import Music from './component/Music'
import SmoothScroll from './component/Smooth-scrolling'
import './App.css'

function App() {
  
  return (
    <>
    <SmoothScroll/>
      <Nav />
      <Hero />
      <About />
      <Book />
      <Music />
      
      <Hero />

    </>
  )
}

export default App

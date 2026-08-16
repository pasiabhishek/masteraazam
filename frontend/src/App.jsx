import Nav from './component/Nav'
import Hero from './component/Hero'
import About from './component/About'
import Book from './component/Book'
import Music from './component/Music'
import SmoothScroll from './component/Smooth-scrolling'
import './App.css'
import Reels from './component/Reels'
import Podcast from './component/Podcast'

function App() {
  
  return (
    <>
    <SmoothScroll/>
      <Nav />
      <Hero />
      <About />
      <Book />
      <Music />
      <Reels/>
      <Podcast/>
      <Hero />

    </>
  )
}

export default App

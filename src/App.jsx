import { React, useState } from 'react'
import Nav from './Components/navigationBar/nav'
import Heading from './Components/Heading/heading'
import SearchResults from './Components/Body/SearchResults'
import Footer from './Components/Footer/footer'
function App() {

  return (
    <>
      <Nav />
      <Heading/>
      <SearchResults/>
      <Footer/>
    </>
  )
}

export default App

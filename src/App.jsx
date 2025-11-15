import React from 'react'
import Header from './components/LandingPageInReact/Header'
import Home from './components/LandingPageInReact/Home'
import Footer from './components/LandingPageInReact/Footer'
import CompA from './components/PropsParentToChild/CompA'

const App = () => {

  let b = 20;

  return (
    <>
      
      {/* <Header />
      <Home />
      <Footer /> */}

      <h1>Parent Component</h1>
      <CompA b={b} />
    </>
  )
}

export default App

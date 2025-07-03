import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Post from './pages/Post'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #fffaf9;
    color: #55423d;
    font-family: 'Quicksand', 'Segoe UI', sans-serif;
    margin: 0;
    padding: 0;
  }
`

const AppContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  box-shadow: 0 0 32px #ffe4e1;
  border-radius: 24px;
  background: #fff;
  min-height: 100vh;
`

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </AppContainer>
    </Router>
  )
}
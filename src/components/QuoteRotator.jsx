import quotes from '../data/quotes.json'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

const Box = styled.div`
  background: #fff0f6;
  color: #a9746e;
  font-family: 'Dancing Script', cursive;
  font-size: 1.2rem;
  text-align: center;
  margin: 1.5rem auto;
  padding: 1rem 2rem;
  border-radius: 18px;
  max-width: 90%;
  min-height: 60px;
  transition: opacity 0.5s;
`

export default function QuoteRotator() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => setIndex(i => (i + 1) % quotes.length), 7000)
    return () => clearInterval(interval)
  }, [])
  return <Box>{quotes[index]}</Box>
}
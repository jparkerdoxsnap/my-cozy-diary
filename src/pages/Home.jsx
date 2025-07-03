import PostList from '../components/PostList'
import QuoteRotator from '../components/QuoteRotator'
import styled from 'styled-components'

const Welcome = styled.div`
  text-align: center;
  padding: 2rem 1rem 1rem 1rem;
  font-family: 'Dancing Script', cursive;
  font-size: 2rem;
  color: #a9746e;
`

export default function Home() {
  return (
    <>
      <Welcome>
        Welcome to My Cozy Diary 💌<br />
        A digital nest for my thoughts, memories, and favorite quotes.
      </Welcome>
      <QuoteRotator />
      <PostList />
    </>
  )
}
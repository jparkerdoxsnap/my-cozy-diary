import { useParams, Link } from 'react-router-dom'
import posts from '../data/posts.json'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 2rem 1rem;
`

export default function Post() {
  const { id } = useParams()
  const post = posts.find(p => p.id === id)
  if (!post) return <Wrapper>Post not found.</Wrapper>
  return (
    <Wrapper>
      <Link to="/">← Back</Link>
      <h1 style={{ fontFamily: "'Dancing Script', cursive", color: "#a9746e" }}>{post.title}</h1>
      <div style={{ color: "#bfaeaa", fontSize: "0.95rem" }}>{post.date}</div>
      <div style={{ marginTop: "1.5rem", lineHeight: 1.7 }}>{post.content}</div>
    </Wrapper>
  )
}
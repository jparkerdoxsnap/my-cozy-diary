import posts from '../data/posts.json'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem 1rem;
`

const Card = styled.div`
  background: #fff7f0;
  border-radius: 18px;
  box-shadow: 0 2px 16px #ffe4e1aa;
  padding: 1.5rem;
  transition: transform 0.1s;
  &:hover { transform: translateY(-4px) scale(1.01); }
`

const Title = styled.div`
  font-family: 'Dancing Script', cursive;
  font-size: 1.4rem;
  color: #a9746e;
`

export default function PostList() {
  return (
    <List>
      {posts.map(post => (
        <Card key={post.id}>
          <Title>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </Title>
          <div style={{ color: "#bfaeaa", fontSize: "0.95rem" }}>{post.date}</div>
          <div>{post.summary}</div>
        </Card>
      ))}
    </List>
  )
}
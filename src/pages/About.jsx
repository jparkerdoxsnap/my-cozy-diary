import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
  padding: 2.5rem 1rem;
`

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #ffe4e1;
  margin-bottom: 1rem;
`

export default function About() {
  return (
    <Wrapper>
      <ProfileImage src="/profile.jpg" alt="Profile" />
      <h2 style={{ fontFamily: "'Dancing Script', cursive", color: "#a9746e" }}>Hi, I'm [Your Name]!</h2>
      <p>
        I’m a romantic at heart, passionate about writing, beauty, and everyday magic. This blog is my cozy diary—where stories, dreams, and favorite words find a home. Welcome, friend!
      </p>
    </Wrapper>
  )
}
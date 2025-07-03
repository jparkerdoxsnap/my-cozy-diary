import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  background: #ffe4e1cc;
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  padding: 0.95rem 0;
  border-radius: 0 0 22px 22px;
  box-shadow: 0 2px 12px #ffe4e188;
  backdrop-filter: blur(6px);
  animation: fadeIn 1s;
  @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
`

const NavLink = styled(Link)`
  font-family: 'Dancing Script', cursive;
  font-size: 1.25rem;
  color: #a9746e;
  text-decoration: none;
  transition: color 0.2s;
  &:hover, &.active {
    color: #e17b7b;
    text-shadow: 0 2px 8px #fff4;
  }
`

export default function Navbar() {
  const { pathname } = useLocation()
  return (
    <Nav>
      <NavLink to="/" className={pathname === "/" ? "active" : ""}>Home</NavLink>
      <NavLink to="/about" className={pathname === "/about" ? "active" : ""}>About Me</NavLink>
    </Nav>
  )
}
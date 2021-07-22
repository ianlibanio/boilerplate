import Link from 'next/link'
import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #0d1117;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled(Link)`
  color: #fff;
  font-size: 2.5rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`

export const Credits = styled.h2`
  color: #e4e4e4;
  text-decoration: none;
  margin-top: 3rem;
  font-size: 1.75rem;
  font-weight: 350;
`

export const CreditsLink = styled(Link)`
  color: #3cd3c1;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: #000;
  color: #fff;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  height: 4rem;
`

const Footer = () => {
  return (
    <Container>Created by Nothando Mthalane || 2022</Container>
  )
}

export default Footer

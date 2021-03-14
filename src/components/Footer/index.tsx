import React from 'react'
import {styled} from '@linaria/react'

import palette from '../../config/palette'
import {MOBILE, TABLET} from '../../config/sizes'

import Border from './img/border.svg'
import Description from './Description'
import Links from './Links'
import Bottom from './Bottom'

const Container = styled.footer`
  background: ${palette.mainGreen};
  color: ${palette.primaryText};
`
const Content = styled.div`
  padding: 0 40px;
`
const Title = styled.h1`
  width: 40%;
  font-size: 4rem;
  ${TABLET} {
    font-size: 2rem;
  }
  ${MOBILE} {
    width: 100%;
  }
`
const Underlined = styled.span`
  display: inline-block;
  position: relative;
  z-index: 1;
  &:after {
    content: '';
    position: absolute;
    display: block;
    bottom: 4px;
    width: 100%;
    height: 8px;
    background: ${palette.mainRed};
    z-index: -1;
  }
`
const Main = styled.section`
  display: flex;
  line-height: 2rem;
  padding-bottom: 40px;
  ${MOBILE} {
    flex-direction: column;
    line-height: 1.2rem;
  }
`

const Footer = () => {
  return (
    <Container>
      <Border />
      <Content>
        <Title>
          Sveriges största <Underlined>marknadsplats</Underlined> för fynd.
        </Title>
        <Main>
          <Description />
          <Links />
        </Main>
        <Bottom />
      </Content>
    </Container>
  )
}

export default Footer

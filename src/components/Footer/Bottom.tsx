import React from 'react'
import {styled} from '@linaria/react'

import {MOBILE} from '../../config/sizes'
import palette from '../../config/palette'
import Logo from './img/logo.svg'
import Klarna from './img/klarna.svg'
import MasterCard from './img/masterCard.svg'
import Visa from './img/visa.svg'
import Trygg from './img/trygg.svg'
import Social from './Social'

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  border-top: 1px solid ${palette.secondaryText};
  ${MOBILE} {
    border-top: none;
    flex-direction: column-reverse;
    padding-top: 0;
  }
`
const Fyndiq = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  svg {
    height: 54px;
  }
  ${MOBILE} {
    svg {
      display: none;
    }
  }
`
const Copyright = styled.div`
  color: ${palette.secondaryText};
  font-size: 0.8rem;
  margin: 4px 0 4px 10px;
  ${MOBILE} {
    margin: 8px 0;
    text-align: center;
  }
`
const Payments = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  & li {
    margin-left: 20px;
  }
`
const SocialContainer = styled.div`
  ${MOBILE} {
    display: none;
  }
`

const Bottom = () => (
  <Container>
    <Fyndiq>
      <a href="http://fyndiq.se">
        <Logo />
      </a>
      <div>
        <Copyright>Copyright (c) 2010-2019</Copyright>
        <Copyright>Fyndiq AB, Org.nr: 5567922-1712</Copyright>
      </div>
    </Fyndiq>
    <SocialContainer>
      <Social />
    </SocialContainer>
    <Payments>
      <li>
        <Klarna />
      </li>
      <li>
        <MasterCard />
      </li>
      <li>
        <Visa />
      </li>
      <li>
        <Trygg />
      </li>
    </Payments>
  </Container>
)

export default Bottom

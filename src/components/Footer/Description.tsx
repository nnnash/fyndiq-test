import React from 'react'
import {styled} from '@linaria/react'

import {MOBILE} from '../../config/sizes'
import palette from '../../config/palette'
import Check from './img/check.svg'

const Container = styled.section`
  width: 40%;
  ${MOBILE} {
    width: 100%;
  }
`
const Title = styled.h4`
  ${MOBILE} {
    margin: 10px 0;
  }
`
const Text = styled.p`
  color: ${palette.secondaryText};
  ${MOBILE} {
    margin: 0;
  }
`
const CheckPoints = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  ${MOBILE} {
    flex-direction: row;
    flex-wrap: wrap;
    flex-basis: 50%;
    margin-right: 0;
  }
`
const CheckPoint = styled.li`
  font-weight: 500;
  padding: 0;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  ${MOBILE} {
    flex-basis: 50%;
    margin-right: 0;
  }
`
const CheckIcon = styled.span`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  height: 22px;
  width: 22px;
  border-radius: 50%;
  background: ${palette.secondaryGreen};
`

const Description = () => {
  return (
    <Container>
      <Title>Gör som 1,6 miljoner kunder, hitta fynden hos oss.</Title>
      <Text>
        Hitta dina fynd bland våra olika handlares utbud. DIna prylar skickas direkt till dig inom Sverige och du har
        dina produkter inom några dagar.
      </Text>
      <CheckPoints>
        {['Alltid 9 kr frakt', 'Svensk kundtjänst', 'Snabba leveranser'].map((item) => (
          <CheckPoint key={item}>
            <CheckIcon>
              <Check />
            </CheckIcon>
            {item}
          </CheckPoint>
        ))}
      </CheckPoints>
    </Container>
  )
}

export default Description

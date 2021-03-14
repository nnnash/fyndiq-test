import React from 'react'
import {styled} from '@linaria/react'

import palette from './config/palette'
import Footer from './components/Footer'

const AppContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background: ${palette.mainWhite};
`
const Content = styled.main`
  flex-grow: 1;
`

function App() {
  return (
    <AppContainer>
      <Content />
      <Footer />
    </AppContainer>
  )
}

export default App

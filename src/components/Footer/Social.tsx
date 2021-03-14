import React from 'react'
import {styled} from '@linaria/react'

import Facebook from './img/fb.svg'
import Instagram from './img/instagram.svg'
import Youtube from './img/youtube.svg'

const Container = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  & > li {
    padding: 0 10px;
  }
`
interface SocialLinkProps {
  link: string
  icon: React.ReactNode
}
const SocialLink = ({link, icon}: SocialLinkProps) => (
  <li>
    <a href={link} target="_blank" rel="noreferrer">
      {icon}
    </a>
  </li>
)

const Social = () => (
  <Container>
    <SocialLink link="https://www.facebook.com/fyndiq" icon={<Facebook />} />
    <SocialLink link="https://www.instagram.com/fyndiq/" icon={<Instagram />} />
    <SocialLink link="https://www.youtube.com/user/Fyndiq" icon={<Youtube />} />
  </Container>
)

export default Social

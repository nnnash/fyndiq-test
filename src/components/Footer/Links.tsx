import React, {useEffect, useRef, useState} from 'react'
import {css} from '@linaria/core'
import {styled} from '@linaria/react'
import cn from 'classnames'

import palette from '../../config/palette'
import {MOBILE} from '../../config/sizes'
import ExpandIcon from './img/expand.svg'
import Social from './Social'
import {TLinkApiRes} from '../../config/types'

const ANIMATION_DURATION = '0.2s'

const Container = styled.section`
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  ${MOBILE} {
    flex-direction: column;
  }
`
const BlockContainer = styled.div<{mobileOnly?: boolean}>`
  display: ${(props) => (props.mobileOnly ? 'none' : 'block')};
  margin: 0 10px;
  ${MOBILE} {
    display: block;
    margin: 0;
    &:first-child {
      border-top: 1px solid ${palette.secondaryText};
    }
  }
`
const BlockTitle = styled.h4`
  ${MOBILE} {
    display: none;
  }
`
const BlockTitleButton = styled.button`
  display: none;
  width: 100%;
  border: none;
  background: transparent;
  color: ${palette.primaryText};
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  outline: none;
  border-bottom: 1px solid ${palette.secondaryText};
  ${MOBILE} {
    display: flex;
  }
  & > * {
    margin: 10px 0;
  }
  svg {
    transform: rotate(-90deg);
    transition: transform ${ANIMATION_DURATION} linear;
  }
`
const Expandable = styled.div`
  max-height: 300px;
  transition: max-height ${ANIMATION_DURATION};
  overflow: hidden;
  ${MOBILE} {
    max-height: 0;
  }
`
const LinkList = styled.ul`
  list-style: none;
  padding-left: 0;
  & a {
    color: ${palette.secondaryText};
    text-decoration: none;
  }
  ${MOBILE} {
    margin: 10px 0 0;
  }
`
const LinkListItem = styled.li`
  ${MOBILE} {
    padding: 10px 0;
  }
`
const blockExpanded = css`
  ${Expandable} {
    max-height: 300px;
  }
  ${BlockTitleButton} svg {
    transform: rotate(90deg);
  }
`

interface BlockProps {
  title: string
  content: React.ReactNode
  mobileOnly?: boolean
}
const Block = ({title, content, mobileOnly = false}: BlockProps) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <BlockContainer className={cn(expanded && blockExpanded)} mobileOnly={mobileOnly}>
      <BlockTitle>{title}</BlockTitle>
      <BlockTitleButton onClick={() => setExpanded((prevState) => !prevState)}>
        <h2>{title}</h2>
        <ExpandIcon />
      </BlockTitleButton>
      <Expandable>{content}</Expandable>
    </BlockContainer>
  )
}

const Links = () => {
  const [data, setData] = useState<null | TLinkApiRes['footer']>(null)
  const mounted = useRef(false)
  useEffect(() => {
    mounted.current = true
    fetch('https://shop-bff.fyndiq.se/cms/footer')
      .then((res) => res.json())
      .then((data) => {
        if (mounted.current) {
          setData(data.footer)
        }
      })
    return () => {
      mounted.current = false
    }
  }, [])

  return (
    <Container>
      {!!data &&
        data.blocks.map((block) => (
          <Block
            key={block.key}
            title={block.linkBlockTitle}
            content={
              <LinkList>
                {block.links.map((link) => (
                  <LinkListItem key={link.key}>
                    <a href={link.linkUrl.slug} title={link.linkTitle}>
                      {link.linkTitle}
                    </a>
                  </LinkListItem>
                ))}
              </LinkList>
            }
          />
        ))}
      <Block title="Fyndiq i sociala medier" content={<Social />} mobileOnly />
    </Container>
  )
}

export default Links

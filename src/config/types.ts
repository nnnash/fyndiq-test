export interface TLink {
  key: string
  linkTitle: string
  linkUrl: {
    slug: string
  }
}

export interface TBlock {
  key: string
  linkBlockTag: string
  linkBlockTitle: string
  links: Array<TLink>
}

export interface TLinkApiRes {
  footer: {
    blocks: Array<TBlock>
  }
}

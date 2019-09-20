import React from 'react'
import styled from 'styled-components'

const setWidth = (width) => {
  if (typeof width === 'number') return `width: ${width}px;`
  return `width: ${width};`
}

const setObjectFit = (fit) => `object-fit: ${fit};`

const StyledImage = styled.img`
  ${(props) => setWidth(props.width)}
  ${(props) => setObjectFit(props.fit)}
`

function Image({
  src, width, height, fit,
}) {
  return <StyledImage src={src} width={width} height={height} fit={fit} />
}

export default Image

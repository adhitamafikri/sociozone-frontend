import React from 'react'
import styled from 'styled-components'

const setWidth = (width) => {
  if (typeof width === 'number') return `width: ${width}px;`
  return `width: ${width};`
}

const setHeight = (height) => {
  if (typeof height === 'number') return `height: ${height}px;`
  return `height: ${height};`
}

const setMargin = (margin) => {
  if (typeof margin === 'number') return `margin: ${margin}px;`
  return `margin: ${margin};`
}

const setObjectFit = (fit) => `object-fit: ${fit};`

const StyledImage = styled.img`
  ${(props) => setWidth(props.width)}
  ${(props) => setHeight(props.height)}
  ${(props) => setObjectFit(props.fit)}
  ${(props) => setMargin(props.margin)}
`

function Image({
  src, width, height, fit, margin
}) {
  return <StyledImage src={src} width={width} height={height} fit={fit} margin={margin} />
}

export default Image

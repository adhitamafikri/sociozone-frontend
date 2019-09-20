import React from 'react'
import styled from 'styled-components'
import { Pane, Text, Paragraph } from 'evergreen-ui'

import Image from 'components/common/Image'

const SliderDots = styled.div`
  background: red;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin: 4px 4px;
`

function PostCard({ user, photos, content }) {
  return (
    <Pane width="100%" marginBottom={48}>
      <Pane display="flex" alignItems="center" marginBottom={8}>
        <Pane
          width={30}
          height={30}
          borderRadius={50}
          display="flex"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
        >
          <Image src="https://i.ibb.co/CHxxP6G/pp-placeholder.png" width={30} height={30} />
        </Pane>
        <Text marginLeft={16} fontWeight={500}>Roxanne</Text>
      </Pane>
      <Pane
        background="redTint"
        width="100%"
        height={240}
        overflow="hidden"
      >
        <Image src={photos[0]} width="100%" height="100%" fit="cover" />
      </Pane>
      <Pane
        width="100%"
        display="flex"
        justifyContent="center"
        marginTop={8}
        marginBottom={8}
      >
        <SliderDots />
        <SliderDots />
        <SliderDots />
      </Pane>
      <Pane>
        <Paragraph>
          quis illum malis elit velit quis quae tempor magna malis amet malis anim culpa
          eram esse aliqua legam ipsum quae
        </Paragraph>
      </Pane>
    </Pane>
  )
}

export default PostCard

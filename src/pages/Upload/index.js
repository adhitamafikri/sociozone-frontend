import React from 'react'
import styled from 'styled-components'
import { Pane, Button, Text, TextInput } from 'evergreen-ui'

import Layout from 'components/common/Layout'
import Header from 'components/common/Header'
import Navigation from 'components/common/Navigation'
import Image from 'components/common/Image'

const StyledImageInput = styled.input.attrs({ type: 'file', accept: 'image/x-png,image/gif,image/jpeg', multiple: true })`
  display: none;
`

function ImagePreviews({ images }) {
  if (images) {
    return images.map((img, idx) => {
      return (
        <Image
          key={idx}
          src={img.src}
          alt="preview"
          width={100}
          height={100}
          fit="cover"
          margin={8}
        />
      )
    })
  }
  return null
}

function Upload() {
  const [postObject, setPostObject] = React.useState({
    images: [],
    caption: '',
  })
  const [errors, setErrors] = React.useState({
    images: true,
    caption: true,
  })

  const setImagePreviews = (e) => {
    if (e.target.files.length > 3) {
      alert('Cannot upload more than 3 images plz')
      setErrors({ ...errors, images: true })
    } else {
      if (postObject.images.length + e.target.files.length > 3) {
        alert('Cannot upload more than 3 images in a post')
        setErrors({ ...errors, images: true })
      }
      else if (postObject.images.length === 3) {
        alert('already 3 images')
      } else {
        const files = e.target.files
        for(let i = 0; i < files.length; i++) {
          const reader = new FileReader()
          reader.onload = function() {
            const newImage = {
              src: reader.result
            }
            const images = [ ...postObject.images, newImage ]
            setPostObject({ ...postObject, images })
          }
          reader.readAsDataURL(e.target.files[i])
        }
      }
      setErrors({ ...errors, images: false })
    }
  }

  const handleCaption = (e) => {
    const caption = e.target.value
    setPostObject({ ...postObject, caption })

    if (caption.length > 20) setErrors({ ...errors, caption: true })
    else setErrors({ ...errors, caption: false })
  }

  const uploadPost = () => {
    if (errors.images || errors.caption) alert('Fix the error man wtf')
    else alert('Submitted!')
  }

  console.log(postObject)
  console.log(errors)

  return (
    <Layout
      header={{
        component: <Header />,
      }}
      navigation={{
        component: <Navigation />,
      }}
    >
      <Pane>
        <StyledImageInput id="image-input" onChange={setImagePreviews} />
        <Pane>
          <label htmlFor="image-input">
            <Button height={24}>
              <Text>Choose Images...</Text>
            </Button>
          </label>
        </Pane>
        <Pane
          width="100%"
          minHeight={120}
          border="default"
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginBottom={16}
        >
          <ImagePreviews images={postObject.images} />
        </Pane>
      </Pane>

      <TextInput
        width="100%"
        value={postObject.caption}
        onChange={handleCaption}
        placeholder="Caption max.20 chars"
        marginBottom={16}
      />

      <Button
        onClick={uploadPost}
        width="100%"
        justifyContent="center"
      >
        Upload
      </Button>
    </Layout>
  )
}

export default Upload

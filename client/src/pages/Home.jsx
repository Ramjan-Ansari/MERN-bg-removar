import React from 'react'
import { Header } from '../component/Header'
import { Steps } from '../component/Steps'
import { Bgslider } from '../component/Bgslider'
import { Testimonial } from '../component/Testimonial'
import { Upload } from '../component/Upload'
export const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <Bgslider />
      <Testimonial />
      <Upload />
    </div>
  )
}

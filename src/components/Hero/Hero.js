import React, { Fragment } from 'react'
import Carousel from "react-material-ui-carousel";
import { CarouselItems } from './CarouselItems';

export const Hero = (props) => {

  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #2",
      description: "Hello Carousel"
    },
    {
      name: "Random Name #3",
      description: "Hello Carousel"
    },
    {
      name: "Random Name #4",
      description: "Hello Carousel"
    },
    {
      name: "Random Name #5",
      description: "Hello Carousel"
    },
  ]

  return (
    <div className='mt-5 mb-5 p-9'>
      <Carousel 
        NextIcon={<img src='https://mdbootstrap.com/img/Photos/Slides/img%20(31).webp'/>}
        PrevIcon={<img src='https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg'/>}

      >
        {
          items.map((item, i) => <CarouselItems key={i} item={item} />)
        }
      </Carousel>
    </div>
  )
}

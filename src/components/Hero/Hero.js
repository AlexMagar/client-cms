import React, { Fragment } from 'react'
import Carousel from "react-material-ui-carousel";
import { CarouselItems } from './CarouselItems';

export const Hero = (item) => {

  const slider = [
    {
      "id": 1,
      "image": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFuZHNjYXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      "title": "--- Smart Phones 1 ---"
    },
    {
      "id": 2,
      "image": "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "title": "--- Smart Phones 2 ---"
    },
    {
      "id": 3,
      "image": "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "title": "--- Smart Phones 3 ---"
    },
    {
      "id": 4,
      "image": "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "title": "--- Smart Phones 4 ---"
    },
  ]

  return (
    <div className='carou'>
      <Carousel>
        {
          slider.map( (item) => <CarouselItems key={item.id} item={item} />)
        }
      </Carousel>
    </div>
  )
}

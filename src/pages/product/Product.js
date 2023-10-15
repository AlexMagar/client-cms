import React, { useEffect } from 'react'
import { getProductAction } from './productAction'
import { useDispatch, useSelector } from 'react-redux'
import { ImageList, ImageListItem } from '@mui/material'

export const Product = () => {

    const dispatch = useDispatch()

    const { products } = useSelector((state) => state.productInfo)

    console.log("This is from the product itself, ", products)

    useEffect(() => {
        dispatch(getProductAction())
    }, [dispatch])

  return (
    <div>
        <p>Product</p>
        <hr/>
        <p>This many products are there {products.length}</p>
        <ImageList sx={{width: 500, height: 450}} cols={3} rowHeight={164}>
          {
            products.map((item,i) => (
              <ImageListItem key={item.thumbnail}>
                <img 
                  srcSet={`${item.thumbnail}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.thumbnail}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.name}
                  loading='lazy'
                />
              </ImageListItem>
            ))
          }
        </ImageList>
    </div>
  )
}

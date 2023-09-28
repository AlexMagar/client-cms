import React, { useEffect } from 'react'
import { getProductAction } from './productAction'
import { useDispatch, useSelector } from 'react-redux'

export const Product = () => {

    const dispatch = useDispatch()

    const { products } = useSelector((state) => state.productInfo)

    useEffect(() => {
        dispatch(getProductAction())
    }, [dispatch])

  return (
    <div>
        <p>Product</p>
        <hr/>
        <p>This many product are there {products.length}</p>
    </div>
  )
}

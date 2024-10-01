import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'
import image1 from '../../assets/product/p-1.jpg'
import image2 from '../../assets/product/p-2.jpg'
import image3 from '../../assets/product/p-3.jpg'
import image4 from '../../assets/product/p-4.jpg'
import image5 from '../../assets/product/p-5.jpg'
import image7 from '../../assets/product/p-7.jpg'
import image9 from '../../assets/product/p-9.jpg'
const productsData =[
  {
    "id": 1,
    "image": image1,
    "title": "Boat Headphone",
    "price": "$120",
    "aosDelay": "0"
  },
  {
    "id": 2,
    "image": image2,
    "title": "Rokey Mountain",
    "price": "$420",
    "aosDelay": "200"
  },
  {
    "id": 3,
    "image": image3,
    "title": "Goggles",
    "price": "$320",
    "aosDelay": "400"
  },
  {
    "id": 4,
    "image": image1,
    "title": "Printed",
    "price": "$220",
    "aosDelay": "600"
  },
  {
    "id": 5,
    "image": image4,
    "title": "Boat Headphone",
    "price": "$120",
    "aosDelay": "800"
  },
  {
    "id": 6,
    "image": image5,
    "title": "Rocky Mountain",
    "price": "$420",
    "aosDelay": "1000"
  },
  {
    "id": 7,
    "image": image7,
    "title": "Goggles",
    "price": "$320",
    "aosDelay": "1200"
  },
  {
    "id": 8,
    "image": image9,
    "title": "Printed",
    "price": "$220",
    "aosDelay": "1400"
  },
]
const Products = () => {
  return (
    <div>
      <div className="container">
        <Heading title={"Our Products"} subtitle={"Explore Our Products"}/>
        <ProductCard data={productsData}/>
      </div>
    </div>
  )
}

export default Products

import React from 'react'
import ItemCount from './ItemCount'


export default function Item(props) {
  return (
    <>
      <div classname="container">
        <div className='productCard'>
          <h3 className='productName'>{props.name}</h3>
          <img className='img' src={props.imgPath} alt="dalee pipi" />
          <p className='productDescription'>{props.description}</p>
          <p className='productPrice'>{props.price}</p>
          <ItemCount stock={9} initial={1}/>
        </div>
      </div>
    </>
  )
}
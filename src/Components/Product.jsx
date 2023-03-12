import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { addToCart } from '../app/cartSlice'


export default function Product({ id, title, url, price }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="advt mt-3 position-relative col-lg-4 col-md-6 col-sm-12">
        <img src={url} alt="" />
        <button onClick={() =>
          dispatch(addToCart({
            id, title, url, price
          }))
        } type="button" className='btn btn-success position-absolute btstar'>Add to cart</button>
        <div className="star mt-3 d-flex">
          <h3><Link to={`/furniture/${id}`}>{title}</Link></h3>
          <h4>{price}</h4>
        </div>
        <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>
      </div>
    </>
  )
}
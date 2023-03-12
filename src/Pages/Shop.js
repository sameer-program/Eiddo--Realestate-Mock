import React from 'react'
import ProductData from '../Data/ProductData'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../Components/Product'

export default function Shop({id,title,url,price}) {

    const dispatch = useDispatch()

    return (
        <>
            <div className="shop position-relative">
                <div className="shpp">
                    <img src={require('../img/250.jpg')} alt="" className='w-100' />
                    <div className="shipp position-absolute">
                        <h1>Shop</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><link to="/" />Home</li>
                                <li className="breadcrumb-item active" aria-current="page">Shop</li>
                            </ol>

                        </nav>
                    </div>
                </div>
            </div>

            <div className="conainer product">

                <div className="ads row">
                    {ProductData.map((item) => (       
                        <Product key={item.id} {...item} />    
                    ))}
                </div>
                <div className="cats">
                    <div className="onsh">
                        <h1 className='bg-dark text-light'> Product categories</h1>
                        <ul className=''>
                            <li><a href="">Design</a></li>
                            <li><a href="">Furniture</a></li>
                            <li><a href="">Interior</a></li>
                            <li><a href="">Lifestyle</a></li>
                            <li><a href="">Modern</a></li>
                            <li><a href="">Style</a></li>
                        </ul>
                    </div>
                    <div className="twsh">
                        <img src={require('../img/20s.jpg')} alt="" className='w-100 mt-5' />
                    </div>
                    <div className="thresh mt-5">
                        <h1 className='bg-dark text-light'> Related Product</h1>
                        <div className="light mt-4 d-flex">
                            <img src={require('../img/21s.jpg')} alt="" className='lamppp' />
                            <div className="ltcat">
                                <h5>Metal Lamp</h5>
                                <h5>$120</h5>
                            </div>
                        </div>
                        <div className="light mt-4 d-flex">
                            <img src={require('../img/22s.jpg')} alt="" className='lamppp' />
                            <div className="ltcat">
                                <h5>Fresh Plant</h5>
                                <h4 className='gstar'> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i></h4>
                                <h5>$120</h5>
                            </div>
                        </div>
                        <div className="light mt-4 d-flex">
                            <img src={require('../img/23s.jpg')} alt="" className='lamppp' />
                            <div className="ltcat">
                                <h5>Rosepetal Chair</h5>
                                <h5>$2500</h5>
                            </div>
                        </div>
                        <div className="light mt-4 d-flex">
                            <img src={require('../img/24s.jpg')} alt="" className='lamppp' />
                            <div className="ltcat">
                                <h5>Design Corner</h5>
                                <h4 className='gstar'> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i></h4>
                                <h5>$800</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



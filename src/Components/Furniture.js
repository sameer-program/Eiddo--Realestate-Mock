import React from 'react'
import { Link, useParams } from 'react-router-dom'
import FurnitureData from '../Data/FurnitureData'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../app/counterSlice'

export default function Furniture() {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()


    let { id } = useParams()
    let displaydata = FurnitureData.find((a) => a.id == id)
    return (
        <>
            <div className="shop position-relative">
                <div className="shpp">
                    <img src={require('../img/250.jpg')} alt="" className='w-100' />
                    <div className="shipp position-absolute">
                        <h1>Shop</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li class="breadcrumb-item"><Link to="/shop">Shop</Link></li>
                                <li class="breadcrumb-item"><Link to="/shop">Furniture</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">{displaydata.title}</li>
                            </ol>
                        </nav>

                    </div>
                </div>
            </div>
            <div className="content d-flex mt-3">
                <div className="cont mt-5">
                    <img src={displaydata.url} alt="" />
                </div>
                <div className="contry mt-5 ms-5">
                    <h1 className='mt-3 fs-2 fw-normal'>{displaydata.title}</h1>
                    <h4 className='gstar'> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><span className='text-dark mx-2'>(1 customer review)</span></h4>
                    <h2 className='fs-1 mt-4 fw-light'>{displaydata.price}</h2>

                    <p className='me-5 text-secondary'>Lorem ipsum dolor sit amet, sea an mutat populo facilis, nisl blandit sea ne, eum hinc omnium scripta et. Laudem delicatissimi duo no. Hinc wisi cetero cum at, te persius fabulas.</p>

                    <div className='clkkk mt-4 d-flex'><button
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                    >
                        +
                    </button>
                        <h5 className='count'> {count}</h5>
                        <button
                            aria-label="Decrement value"
                            onClick={() => dispatch(decrement())}
                        >
                            -
                        </button> <span> <button type="button" className="btbtt btn btn-success mx-3" > <h5 className=' hrhr'>ADD TO CART</h5> </button> </span> </div>
                    <h6 className='mt-4'>SKU: <span className='fs-6 fw-light'>{displaydata.sku}</span> </h6>
                    <h6>Category: <span className='fs-6 fw-light'>{displaydata.category}</span> </h6>
                    <h6>Tags: <span className='fs-6 fw-light'>{displaydata.tags}</span> </h6>
                    <div className="shsh">
                        <ul className='share d-flex'>
                            <li> Share: </li>
                            <li> <a href=""><i class="fa fa-twitter mx-3" aria-hidden="true"></i></a></li>
                            <li> <a href=""><i class="fa fa-facebook mx-3" aria-hidden="true"></i></a></li>
                            <li> <a href=""><i class="fa fa-instagram mx-3" aria-hidden="true"></i></a></li>
                            <li> <a href=""><i class="fa fa-pinterest-p mx-3" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Description</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                        </li>

                    </ul>
                    <div class="tab-content me-3 mb-5" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">Mei an dolorem omittam, cum officiis interesset eu, mel nemore molestie ex. Ex vix nibh ancillae, latine moderatius cu mei, mei sensibus accusamus at. Cu duo autem dolore eligendi. Ad nisl reque dolorem nam. Utamur feugiat ad usu. Nam ea esse oportere, eu nonumy consetetur vix, sit dico porro.</div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">Weight 5 kg <br />
                            Dimensions	 50 × 50 × 70 cm</div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">Sameer Rai </div>
                    </div>
                </div>

            </div>
        </>
    )
}

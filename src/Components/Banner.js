import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
    return (
        <>
            <div className="container-fluid p-0">
                <div className="banner">
                    <div className="container-fluid">
                        <img src={require('../img/signature.png')} />
                        <h1> All you need is one click y.</h1>
                        <div className="housee">
                            <ul className="dis text-white mb-lg-0">
                                <li className="nav-item fir">
                                    <a className=" text-white" href="#"> <i class="fa fa-building" aria-hidden="true"></i> Appartment</a>
                                </li>
                                <li className="nav-item">
                                    <a className=" text-white" href="#"> <i class="fa fa-users" aria-hidden="true"></i>Condominium</a>
                                </li>
                                <li className="nav-item text-white">
                                    <a className=" text-white" aria-current="page" href="#" > <i class="fa fa-home" aria-hidden="true"></i>House</a>
                                </li>
                                <li className="nav-item">
                                    <a className="text-white" href="#"> <i class="fa fa-briefcase" aria-hidden="true"></i>Office</a>
                                </li>
                                <li className="nav-item lir">
                                    <a className="text-white" href="#"><i class="fa fa-shopping-bag" aria-hidden="true"></i>Shop</a>
                                </li>
                            </ul>
                        </div>

                        <div className="drop">
                           
                            <select class="" aria-label="Default select example">
                                    <option value=""> <input class="input-field" type="text" /> All Location </option>
                                    <option value="US">Amsterdam</option>
                                    <option value="KE">London</option>
                                    <option value="UK">Lucerne</option>
                                    <option value="IN">New York</option>
                                    <option value="CN">Paris</option>
                                </select>
                          
                          
                            <select class="" aria-label="Default select example">
                                    <option value=""> All Statues <i class="fa fa-sort-desc" aria-hidden="true"></i></option>
                                    <option value="US">For Rent</option>
                                    <option value="KE">For Sale</option>
                                    <option value="UK">Just Sold</option>
                                </select>
                           
                        </div>

                        <form className="search" role="search">
                            <button className="btn btn-success " type="submit">  <Link to='/list' className='text-decoration-none text-transform-uppercase text-white fs-6'>Search Places</Link></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

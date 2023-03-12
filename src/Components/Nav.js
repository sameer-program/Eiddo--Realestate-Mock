import React, { useState } from 'react'
import '../Style.scss'
import { Route, Routes, Link, } from "react-router-dom";
import Home from '../Pages/Home';
import Page from '../Pages/Page';
import Blog from '../Pages/Blog';
import Listing from '../Pages/Listing';
import Elements from '../Pages/Elements';
import Shop from '../Pages/Shop';
import FurnitureItem from '../Pages/FurnitureItem';
import Cart from '../app/Cart';
import PropertiesItem from '../Pages/PropertiesItem';
import AdList from '../Pages/AdList';
import { useSelector, useDispatch } from 'react-redux';

export default function Nav() {
    const [show, setShow] = useState(false);

    const { quantity } = useSelector((state) => state.cart)

    const [userRegistration, setUserRegistration] = useState({
        username: "",
        password: ""
    });

    const [records, setRecords] = useState([]);
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value)

        setUserRegistration({ ...userRegistration, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = { ...userRegistration, id: new Date().getTime().toString() }
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(records);
    }


    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="row sticky-top">
                        <ul className="navbar-nav text-white mb-lg-0 col-lg-3 col-md-4 col-sm-6 col-3">
                            <li className="nav-item ">
                                <Link className="navbar-brand" to="/"> <img src={require('../img/Logo.png')} className="w-100" /> </Link>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link place text-white remove mx-3" href="#">UniquePlaces</a>
                            </li>

                        </ul>
                        <nav className="navbar navbar-expand-lg text-white col-lg-6 col-md-3 col-sm-1 col-2" >
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon bg-white"></span>
                            </button><div className='collapse navbar-collapse' id='navbarSupportedContent'>
                                <ul className="navbar-nav navvv ms-3 text-white mb-lg-0 ">

                                    <li className="nav-item text-white ms-5">
                                        <Link className="nav-link text-white" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/page">Page</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/list">Listing</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/shop">Shop</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/blog">Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/element">Elements</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <ul className="navbar-nav endd text-white mb-0 text-end col-lg-3 col-md-5 col-sm-5 col-7">
                            <li className="nav-item">
                                <Link to='/cart' className="nav-link plc text-white"><div className='position-relative'><i class="fa fa-shopping-basket " aria-hidden="true"></i> <p className='position-absolute pppp'>{quantity}</p></div></Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-decoration-none' to='/adlist '><button className='nav-link text-white bsbs p-2'> Add Listing <i class="fa fa-plus fs-5" aria-hidden="true"></i></button></Link>
                            </li>
                            <button type="button" className='bg-black me-4' data-bs-target="#exampleModalToggle" data-bs-toggle="modal"> <i class="fa fa-user text-light fs-3" aria-hidden="true"></i>
                            </button>
                        </ul>
                    </div>
                </div>
                <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered ">
                        <form action='' onSubmit={handleSubmit}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <div className="bg-success text-light lglg" ata-bs-target="#exampleModalToggle" data-bs-toggle="modal"><h3 className='text-center'>Login</h3></div>
                                    <div className="bg-dark text-light rgrg " data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"><h3 className='text-center'>Register</h3></div>
                                </div>
                                <div className="modal-body px-4">
                                    <input className='w-100 iii' type='text' autoComplete='on' placeholder='User Name*'
                                        value={userRegistration.username}
                                        onChange={handleInput}
                                        name='username' id='username' />
                                    <input className='w-100 mt-2 iii' type='text' autoComplete='off' placeholder='Password*'
                                        value={userRegistration.password}
                                        onChange={handleInput}
                                        name='password' id='password' />
                                    <div className="dflex justify-content-between">
                                        <div class="input-group my-3 d-flex justify-content-between align-items-center">
                                            <div class="input-group-text">
                                                <input className="form-check-input mt-0 me-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                                                <p className='mt-3'>Remember me?</p>
                                            </div>
                                            <p className='text-success'> Lost Your Password? </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer p-3 text-center">
                                    <button type="submit" className="btn btn-success bg-success boti">LOGIN</button>
                                    <p className='w-100'>or Connect with Social Networks</p>
                                    <i className="fa fa-facebook-official w-100" aria-hidden="true"></i>
                                    <p className='w-100'>By creating an account you are accepting our Terms & Conditions</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="btn  bg-success text-light ghgh" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"><h3 className='text-center'>Login</h3></div>

                                <div className="bg-dark text-light rgrg " data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"><h3 className='text-center'>Register</h3></div>

                            </div>
                            <div className="modal-body">
                                <input type="text" placeHolder='Username*' className='w-100 p-2' />
                                <input type="email" placeHolder='Email*' className='w-100 p-2 my-2' />
                                <input type="password" placeHolder='Password*' className='w-100 p-2 my-2' />
                                <input type="password" placeHolder='Repeat Password*' className='w-100 p-2 my-2' />
                                <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                            </div>
                            <div className="modal-footer">
                                <button className='ms-5 btn btn-success byyy' >Register</button>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/page" element={<Page />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/list" element={<Listing />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/adlist" element={<AdList />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/element" element={<Elements />} />
                <Route path="/furniture/:id" element={<FurnitureItem />} />
                <Route path="/properties/:id" element={<PropertiesItem />} />
            </Routes>

        </>

    )
}
{/* <nav className="navbar sticky-top navbar-expand-lg text-white ">
                <div className="container-fluid">
                    <div className="row">
                        <ul className="navbar-nav text-white mb-lg-0 col-lg-4 col-md-4">
                            <li className="nav-item ">
                                <Link className="navbar-brand" to="/"> <img src={require('../img/Logo.png')} /> </Link>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link place text-white" href="#">Unique Place to stay</a>
                            </li>

                        </ul>
                        <div className='collapse navbar-collapse col-lg-5 col-md-3' id='navbarSupportedContent'>
                        <ul className="navbar-nav text-white mb-lg-0 ">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
                            <li className="nav-item text-white">
                                <Link className="nav-link text-white" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/page">Page</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/list">Listing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/shop">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/element">Elements</Link>
                            </li>
                        </ul>
                        </div>
                        <ul className="navbar-nav text-white mb-0 text-end col-lg-3 col-md-5">
                            <li className="nav-item">
                                <Link to='/cart' className="nav-link plc text-white"><div className='position-relative'><i class="fa fa-shopping-basket " aria-hidden="true"></i> <p className='position-absolute pppp'>{quantity}</p></div></Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-decoration-none' to='/adlist '><button className='nav-link text-white bsbs '> Add Listing <i class="fa fa-plus" aria-hidden="true"></i></button></Link>
                            </li>
                            <button type="button" className='bg-black' data-bs-target="#exampleModalToggle" data-bs-toggle="modal"> <i class="fa fa-user text-light" aria-hidden="true"></i>
                            </button>
                        </ul>
                    </div>
                </div>
            </nav> */}

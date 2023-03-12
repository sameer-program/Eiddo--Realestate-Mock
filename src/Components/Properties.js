import React from 'react'
import ItemsData from '../Data/ItemsData'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react';


export default function Properties() {

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

    let { id } = useParams()
    let prodata = ItemsData.find((a) => a.id == id)
    return (
        <>
            <div className="property d-flex text-center row mt-5">
                <div className="col-lg-3 pone">
                    <h3 className='fs-3 fw-normal'>{prodata.title}</h3>
                    <p className='mt-2'>28.06.2017 <span className='text-success'><i class="fa fa-star border-start ms-2" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star border-end" aria-hidden="true"></i></span></p>
                    <i class="fa fa-eye" aria-hidden="true"></i><span className='px-2 border-end'>5027</span>
                    <i class="fa fa-share-alt ms-2" aria-hidden="true"></i><span className='px-2'>Share this</span>
                </div>
                <div className="col-lg-4 mt-4 ptwo border-start d-flex">
                    <div className="bro ms-2">
                        <h5 className='fs-6'>Property size:</h5><br />
                        <p>178m2</p>
                    </div>
                    <div className="bro ms-3">
                        <h5 className='fs-6'>Structure:</h5><br />
                        <p>8 Bedrooms</p>
                    </div>
                    <div className="bro ms-3">
                        <h5 className='fs-6'>Accommodation:</h5><br />
                        <p>Furnished</p>
                    </div>
                    <div className="bro ms-3">
                        <h5 className='fs-6'>Heating:</h5><br />
                        <p>TA furnace</p>
                    </div>
                </div>
                <div className="col-lg-5 pthree border-start">
                    <h3 className='text-success fs-2 ms-2 mt-4'> {prodata.price} <span ><a href="" className='fs-6 text-dark ms-3' data-bs-target="#exampleModalRequest" data-bs-toggle="modal">REQUEST A SHOWING</a></span> <span className='text-white bg-success p-2 fs-6 ms-5'>{prodata.abs}</span></h3>

                    <p className='text-end mt-4'>Property ID: {prodata.ad}</p></div>
            </div>
            <div class="modal fade" id="exampleModalRequest" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered ">
                <form action='' onSubmit={handleSubmit}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="bg-dark text-light shiww" ata-bs-target="#exampleModalToggle" data-bs-toggle="modal"><h3 className='text-center shoow'>Request Your Showing</h3></div>
                            <div className="bg-success text-light shinn"><h3 className='text-center'><i class="fa fa-times" aria-hidden="true"></i></h3></div>
                        </div>
                        <div className="modal-body px-4 mt-4">
                            <input className='w-100 iii' type='text' autoComplete='on' placeholder='Your Full Name*'
                                value={userRegistration.username}
                                onChange={handleInput}
                                name='username' id='username' />
                            <input className='w-100 mt-2 iii mt-3' type='text' autoComplete='off' placeholder='Your Email Address*'
                                value={userRegistration.password}
                                onChange={handleInput}
                                name='password' id='password' />
                                 <input className='w-100 iijj mt-4' type='message' autoComplete='on' placeholder='Your Message*'
                                value={userRegistration.username}
                                onChange={handleInput}
                                name='username' id='username' />
                        </div>
                        <div className="modal-footer p-3 text-center">
                            <button type="submit" className="btn btn-success fs-6 fw-light bg-success boti text-uppercase">Send your message</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
            <div className="propp d-flex mt-5">
                <img className='mx-2' src={prodata.nurl} alt="" />
                <img className='mx-2 imggg' src={prodata.murl} alt="" />
              
            </div>
            <div className="specif d-flex row mt-5 ms-3 bg-light">
                <div className='col-lg-3 text-center'><h5>Specification</h5><h5 className='spaa border-top'>Leasing terms</h5></div>

                <div className="ttti col-lg-6 d-flex">
                    <div className="bed col-lg-3 w-50">
                        <div className="bd d-flex">
                            <i class="fa fa-bed mx-3" aria-hidden="true"></i>Bedrooms: <p className='mx-5 '>8</p>
                        </div>
                        <div className="bd d-flex">
                            <i class="fa fa-plus-square-o mx-3" aria-hidden="true"></i>Property Size: <p className='mx-5'>178m2</p>
                        </div>
                        <div className="bd d-flex">
                            <i class="fa fa-floppy-o mx-3" aria-hidden="true"></i>Total Floors: <p className='mx-5'>4</p>
                        </div>
                        <div className="bd d-flex">
                            <i class="fa fa-header mx-3" aria-hidden="true"></i>Heating: <p className='mx-5'>TA Furnace</p>
                        </div>

                        <div className="bdd d-flex mt-3 border-top">
                            <i class="fa fa-italic mx-3 mt-3" aria-hidden="true"></i> <h5 className='mt-3 fs-6'>Celling Height: </h5><p className='mx-5 mt-3'>2.6</p>
                        </div>
                        <div className="bd d-flex">
                            <i class="fa fa-arrows-h mx-3" aria-hidden="true"></i>From Center: <p className='mx-5'>12.7km</p>
                        </div>
                        <div className="bd d-flex">
                            <i class="fa fa-area-chart mx-3" aria-hidden="true"></i>Areas Size: <p className='mx-5'>150m2</p>
                        </div>
                        <div className="bd d-flex">
                            <i class="fa fa-gavel mx-3" aria-hidden="true"></i>Garage Size: <p className='mx-5'>30m2</p>
                        </div>

                        <div className="bdd d-flex mt-4 border-top">
                            <i class="fa fa-window-maximize mx-3 mt-4" aria-hidden="true"></i><h5 className='mt-3 fs-6'>Deposit:</h5> <p className='mx-5 mt-3 '>$1300</p>
                        </div>
                        <div className="bd d-flex">
                            <i class="fa fa-money mx-3" aria-hidden="true"></i>Payment Period: <p className='mx-5'>Monthly</p>
                        </div>
                        <div className="bd d-flex">
                            <i class="fa fa-paw mx-3" aria-hidden="true"></i>Allowed Pets: <p className='mx-5'>Dogs,Cats</p>
                        </div>

                    </div>
                    <div className="bath col-lg-3 w-50">
                        <div className="bd d-flex">
                            <i class="fa fa-bath mx-3" aria-hidden="true"></i>Bathrooms: <p className='mx-5'>4</p>
                        </div>
                        <div className="bd d-flex">
                            <i class="fa fa-bars mx-3" aria-hidden="true"></i>Floor: <p className='mx-5'>1</p>
                        </div>
                        <div className="bd d-flex">
                            <i class="fa fa-yahoo mx-3" aria-hidden="true"></i>Year Built: <p className='mx-5'>2017</p>
                        </div><div className="bd d-flex">
                            <i class="fa fa-bus mx-3" aria-hidden="true"></i>Accomodation: <p className='mx-5'>Furnished</p>
                        </div>

                        <div className="bdd d-flex mt-3 border-top">
                            <i class="fa fa-paypal mx-3 mt-3" aria-hidden="true"></i><h5 className='mt-3 fs-6'>Parking:</h5> <p className='mx-5 mt-3 '>Free Zone</p>
                        </div>
                        <div className="bd d-flex">
                            <i class="fa fa-calendar mx-3" aria-hidden="true"></i>Publication: <p className='mx-5'>June28,17</p>
                        </div>
                        <div className="bd d-flex">
                            <i class="fa fa-floppy-o mx-3" aria-hidden="true"></i>Garage: <p className='mx-5'>Yes</p>
                        </div>
                        <div className="bd d-flex">
                            <i class="fa fa-plus mx-3" aria-hidden="true"></i>Additional: <p className='mx-5'>Basement</p>
                        </div>

                        <div className="bdd d-flex mt-4 border-top">
                            <i class="fa fa-minus-square-o mx-3 mt-4" aria-hidden="true"></i><h5 className='mt-3 fs-6'>Minimum Lease Terms:</h5> <p className='mx-5 mt-3 '>6Months</p>
                        </div>
                        <div className="bd d-flex">
                            <i class="fa fa-sign-out mx-3" aria-hidden="true"></i>Habitable: <p className='mx-5'>Instability</p>
                        </div>

                    </div>

                </div>
                <div className="onsh col-lg-3">
                   
                    <img src={require('../img/ltc.jpg')} alt="" className='blfr mt-3' />
                    <ul className='blast mt-4'>
                        <li><i class="fa fa-map-marker" aria-hidden="true"></i> <span className='ms-2'>429 Castro St, San Francisco</span></li>
                        <li><i class="fa fa-user" aria-hidden="true"></i> <span className='ms-2'>Hill Roger</span></li>
                        <li><i class="fa fa-phone" aria-hidden="true"></i> <span className='ms-2'> +444455444</span></li>
                        <li><a href=""><i class="fa fa-envelope" aria-hidden="true"></i> http://qodeinteractive.com</a></li>
                    </ul>
                </div>
            </div>
            <div className="featpe d-flex ">
                <div className="oor col-lg-3"><h4 className='text-center'>Features</h4></div>
                <div className="checkbox d-flex mt-4 col-lg-6">
                    <input className="mx-2" type="checkbox" />
                    <h6 className=' fs-6'>  Air Conditioning</h6>
                    <input className="mx-2" type="checkbox" />
                    <h6 className='fs-6'>  Barbeque</h6>
                    <input className="mx-2" type="checkbox" />
                    <h6 className='fs-6'>  Dryer</h6>
                    <input className="mx-2" type="checkbox" />
                    <h6 className='fs-6'>  Gym</h6>
                    <input className="mx-2" type="checkbox" />
                    <h6 className='fs-6'>  Hangers</h6>
                    <input className="mx-2" type="checkbox" />
                    <h6 className='fs-6'>  Laundry</h6>
                    <input className="mx-2" type="checkbox" />
                    <h6 className='fs-6'>  Microwave </h6>
                    <input className="mx-2" type="checkbox" />
                    <h6 className='fs-6'>  Outdoor</h6>
                    <input className="mx-2" type="checkbox" />
                    <h6 className='fs-6'>  Refrigerator</h6>
                    <input className="mx-2" type="checkbox" />
                    <h6 className='fs-6'>  Sauna</h6>
                    

                </div>
                <div className="ooorr col-lg-3">
                    <h4 className='bg-dark text-light'>Connect With Us</h4>
                    <ul className='sorr d-flex'>
                        <li> <a href=""><i class="fa fa-twitter mx-3" aria-hidden="true"></i></a></li>
                        <li> <a href=""><i class="fa fa-pinterest-p mx-3" aria-hidden="true"></i></a></li>
                        <li> <a href=""><i class="fa fa-facebook mx-3" aria-hidden="true"></i></a></li>
                        <li> <a href=""><i class="fa fa-instagram mx-3" aria-hidden="true"></i></a></li>
                        <li> <a href=""><i class="fa fa-flickr mx-3" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="desro d-flex border-top mt-4">
                <h3 className='ms-5 mt-4'>Description</h3>
                <p className='ms-5 mt-4 text-secondary lh-base'>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas. Feugiat nulla facilisis at vero eros et accumsan et iusto odio<br/>
                Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium congit lectorum. Mirum est littera. iusto odio dignissim qui blandit Sameer Rai..</p>
            </div>

        </>
    )
}

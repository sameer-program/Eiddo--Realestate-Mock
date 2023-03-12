import React from 'react'
import ItemsData from '../Data/ItemsData'
import DemoData from '../Data/DemoData'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperData from '../Data/SwiperData';
import CircleData from '../Data/CircleData';
import RoomData from '../Data/RoomData';
import LogoData from '../Data/LogoData';
import { Autoplay } from 'swiper';
import { Link } from 'react-router-dom';

export default function Advertisement() {
    return (
        <>
            <div className='container items'>
                <h1> Check out out feature </h1>
                <div className="items row-gap-3">
                    {ItemsData.map((a) => (
                        <div className="item  position-relative">
                            <div className="">
                                <img src={a.url} alt="" />
                                <button className='position-absolute bg-success abs'> {a.abs} </button>
                            </div>
                            <div className="bold">
                                <h3 className='hir'> <Link to={`/properties/${a.id}`}> {a.title} </Link></h3>
                                <h5 className='fir'> {a.body} </h5>
                                <p className='pir'> {a.price} </p>
                            </div>
                           
                        </div>
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="design mt-5">
                    <div className="wall">
                        <h1 className=''>Newly-launched campaign in Whitby agencies</h1>
                        <ul class="list-group">
                            <li className=''>Ut aliquam purus sit amet luctus</li>
                            <li class=""> Duis convallis convallis tellus id</li>
                            <li className=''>Nisi vitae suscipit tellus mauris</li>
                            <li class="">Aliquet risus feugiat ante dictum at</li>
                            <li class="">Sit amet justo donec enim diam vul</li>
                        </ul>
                        <img src={require('../img/sig.png')} />
                    </div>
                    <div className="picture">
                        <img src={require('../img/wall.jpg')} className="w-100"/>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="description bg-light">
                    <h4> Search Places </h4>
                    <h1> Peoples Experience </h1>
                    <div className="row">
                        {DemoData.map((b) => (
                            <div className="intro col-lg-6 col-md-6 col-sm-12">
                                <div className="demo">
                                    <img src={b.url} />
                                    <div className="def">
                                        <h5>{b.name}</h5>
                                        <h4> {b.title}</h4>
                                    </div>
                                </div>
                                <p>{b.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container-fluid swp">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    loop={true}
                    breakpoints={{
                        0:{
                            slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                        990: {
                          slidesPerView: 4,
                          spaceBetween: 0,
                        }}}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {SwiperData.map((a) => (
                        <SwiperSlide> 
                            <div className="swww position-relative">
                                <img src={a.url} alt="" className='w-100'/> 
                                <h3 className='position-absolute'>{a.title}</h3>
                            </div></SwiperSlide>
                    ))}
                </Swiper>

                <div className="row my-5 p-2">
                    <ul className='list'>
                        <li><h4> Find a New Palace </h4></li>
                        <li><a href=""> <i class="fa fa-briefcase" aria-hidden="true"></i>OFFICE</a></li>
                        <li><a href=""> <i class="fa fa-shopping-bag" aria-hidden="true"></i>SHOP</a></li>
                        <li><a href=""><i class="fa fa-building" aria-hidden="true"></i>APARTMENT</a></li>
                        <li><a href=""><i class="fa fa-users" aria-hidden="true"></i>CONDOMINIUM</a></li>
                        <li className='lt'><a href=""><i class="fa fa-home" aria-hidden="true"></i>HOUSE</a></li>
                    </ul>
                </div>
            </div>

            <div className="container bg-light fttw">
                <h1 className='fw-light feat'> Featured </h1>
                <div className="featured">
                    <div className="imf position-relative">
                        <img src={require('../img/31.jpg')} className="w-100" alt="" />
                        <img src={require('../img/32.jpg')} alt="" className='position-absolute imfa'/>
                    </div>
                    <div className="inform">
                        <h4>$80.000</h4>
                        <h3>109 Oxford St Soho</h3>
                        <h5>Property size:</h5>
                        <p>52m2</p>
                        <h5>Structure:</h5>
                        <p>1 Bedroom</p>
                        <h5>Accommodation:</h5>
                        <p>Furnished</p>
                        <h5>Heating:</h5>
                        <p>Floor Heating</p>
                    </div>
                </div>
                <h2 className='hLL'> APPARTMENT FROM HEAVEN </h2>
            </div>

            <div className="container-fluid crcc mt-5">
                <div className="row">
                    {CircleData.map((a) => ( 
                    <div className="circus position-relative col-lg-3 mt-5 col-md-6 col-sm-12">
                        <img src={a.url} alt="" />
                        <h5 className='position-absolute cirt'> <span>{a.id}</span></h5>
                        <h3>{a.title}</h3>
                        <p>{a.body}</p>
                    </div>
                    ))}
                 
                </div>
                
            </div>

            <div className="container">
                <div className="people">
                    <div className="imap">
                    <img src={require('../img/50.png')} className="w-100" alt="" /> </div>
                        <div className="impp">
                       <h4> SEARCH PLACES</h4>
                       <h1>People's Experiences</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus est pellen tesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Et netus malesuada fames ac turpis egestas. Nisl vel pretium.</p>
                        <button type="button" class="btn btn-success">SEARCH PLACES</button>
                        </div>
                </div>
            </div>

            <div className="container-fluid room">
            <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    loop={true}
                    breakpoints={{
                        0:{
                            slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 40,
                        },
                        990: {
                          slidesPerView: 4,
                          spaceBetween: 50,
                        }}}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {RoomData.map((a) => (
                        <SwiperSlide> <img src={a.url} alt="" className='position-relative' /> <h3 className='position-absolute'>{a.title}</h3></SwiperSlide>
                    ))}
                </Swiper>

            </div>

            <div className="container-fluid bg-light logo">
            <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    breakpoints={{
                        0:{
                            slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 40,
                        },
                        990: {
                          slidesPerView: 4,
                          spaceBetween: 50,
                        }}}
                    autoplay={{
                        delay:2500,
                        disableOnInteraction:false,
                    }}
                    modules={[Autoplay]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {LogoData.map((a) => (
                        <SwiperSlide> <img src={a.url} alt="" /> </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </>
    )
}

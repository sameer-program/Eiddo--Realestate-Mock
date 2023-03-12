import React from 'react'
import { Link } from 'react-router-dom'
import ListData from '../Data/ListData'

export default function Listing() {
  return (
    <>
      <div className="listing d-flex">
        <div className='frame'>
          <iframe className='' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14131.051813521555!2d85.34462204999998!3d27.69372045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198c8d6a0639%3A0x99903dada8289577!2sTinkune%20Park!5e0!3m2!1sen!2snp!4v1670401026575!5m2!1sen!2snp" width="100%" height="500px" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="frmtwo text-dark">
          <ul className="navbar-nav dis text-dark mb-lg-0">
            <li className="nav-item fir">
              <a className="nav-link text-dark" href="#"> <i class="fa fa-building" aria-hidden="true"></i> Appartment</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-dark" href="#"> <i class="fa fa-users" aria-hidden="true"></i>Condominium</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" aria-current="page" href="#" > <i class="fa fa-home" aria-hidden="true"></i>House</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#"> <i class="fa fa-briefcase" aria-hidden="true"></i>Office</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#"><i class="fa fa-shopping-bag" aria-hidden="true"></i>Shop</a>
            </li>
            <li className="nav-item mx-5">
              <select class="form-select" aria-label="Default select example">
                <option value=""> All Statues <i class="fa fa-sort-desc" aria-hidden="true"></i></option>
                <option value="US">For Rent</option>
                <option value="KE">For Sale</option>
                <option value="UK">Just Sold</option>
              </select>
            </li>

          </ul>
          <div className="range mt-3 d-flex">
            <div className="rage mx-3">
              <label htmlFor="customRange1" className="form-label">Price range: From $0 to $350000</label>
              <input type="range" className="form-range" id="customRange1" width="100" />
            </div>
            <div className="locat">
              <h2 className='fs-6'>Choose a location</h2>
              <select class="form-select" aria-label="Default select example">
                <option value=""> <input class="input-field" type="text" /> All Locations </option>
                <option value="US">Amsterdam</option>
                <option value="KE">London</option>
                <option value="UK">Lucerne</option>
                <option value="IN">New York</option>
                <option value="CN">Paris</option>
              </select>
            </div>
          </div>

          <div className="checkbox d-flex mt-4">
            <input className="mx-3" type="checkbox" />
            <h5 className='mrit fs-6'>  Air Conditioning</h5>
            <input className="mx-3" type="checkbox" />
            <h5 className='mrit fs-6'>  Barbeque</h5>
            <input className="mx-3" type="checkbox" />
            <h5 className='mrit fs-6'>  Dryer</h5>
            <input className="mx-3" type="checkbox" />
            <h5 className='mrit fs-6'>  Gym</h5>
            <input className="mx-3" type="checkbox" />
            <h5 className='mrit fs-6'>  Hangers</h5>
            <input className="mx-3" type="checkbox" />
            <h5 className='mrit fs-6'>  Laundry</h5>
            <input className="mx-3" type="checkbox" />
            <h5 className='mrit fs-6'>  Microwave </h5>
            <input className="mx-3" type="checkbox" />
            <h5 className='mrit fs-6'>  Outdoor</h5>
            <input className="mx-3" type="checkbox" />
            <h5 className='mrit fs-6'>  Refrigerator</h5>
            <input className="mx-3" type="checkbox" />
            <h5 className='mrit fs-6'>  Sauna</h5>
            <input className="mx-3" type="checkbox" />

          </div>
          <form className="d-flex reset mt-4" role="search">
            <button className="btn btn-success mx-3" type="submit">Filter Results</button>
            <button className="btn btn-success mx-2" type="submit">Save Search</button>
            <button className="btn btn-secondary mx-2" type="submit">RESET</button>
          </form>
          <div className='container itemss'>
                <div className="ms-4 items row-gap-3">
                    {ListData.map((a) => (
                        <div className="item  position-relative">
                            <div className="pepe">
                                <img src={a.url} alt="" />
                                <button className='position-absolute bg-success abs'> {a.abs} </button>
                            </div>
                            <div className="bold">
                                <h3 className='hir'> <Link to={`/properties/${a.id}`}> {a.title}</Link> </h3>
                                <h5 className='fir'> {a.body} </h5>
                                <p className='pir'> {a.price} </p>
                            </div>
                           
                        </div>
                    ))}
                </div>
            </div>
            <div className='text-center my-4'>

            <button type="button" class="btn btn-success loadd">Load More</button>
            </div>

        </div>
      </div>

    </>
  )
}

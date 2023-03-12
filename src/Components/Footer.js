import React from 'react'

export default function Footer() {
    return (
        <>
        <div className="end bg-dark">
            <div className="footer">
                <div className="one text-start text-light">
                    <img src={require('../img/Logo.png')} alt="" />
                    <p>Lorem ipsum dolor sit amet, consect <br/> adipiscing elit est pellen</p>
                </div>
                <div className="two text-light">
                    <h3 className='text-start'> Contact</h3>
                    <ul className='scc text-start'>
                        <li> <a href=""> 754 NE 60th St Miami, FL 33879</a></li>
                        <li> <a href="">Call us FREE +1 (800) 990 8877</a></li>
                        <li> <a href="">eiddo@qodeinteractive.com</a></li>
                    </ul>
                </div>
                <div className="three text-light">
                    <h3 className='text-start'>Newsletter Subscribe</h3>
                    <form className="d-flex" role="search">
                        
                            <input className="form-control" type="search" placeholder="Enter Your Email" aria-label="Search" />
                            <button type="button" class="btn btn-success">Submit</button>
                        
                    </form>
                    <h4 className='text-start'>Dont forget to follow us on: </h4>
                    <ul className='social'>
                        <li> <a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li> <a href=""><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                        <li> <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li> <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                        <li> <a href=""><i class="fa fa-flickr" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
            <h4>© 2018 Qode Interactive, All Rights Reserved</h4>
           </div>
           
        </>
    )
}

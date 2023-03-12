import React from 'react'
import AgentData from '../Data/AgentData'

export default function Page() {
  return (
    <>
      <div className="page text-light">
        <div className="pgg">
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempore <br /> incididunt ut labore et dolore magna aliqua, rhoncus est</p>
        </div>
      </div>
      <div className="container">
        <div className="people">
          <div className="expe">
            <img src={require('../img/201.jpg')} alt="" /> </div>
          <div className="impp">
            <h4> SEARCH PLACES</h4>
            <h1>People's Experiences</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus est pellen tesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Et netus malesuada fames ac turpis egestas nisl vel.</p>
            <h2>“Feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.”</h2>

            <button type="button" class="btn btn-success"> <h3>SEARCH PLACES</h3></button>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="agent">
           {AgentData.map((a) => ( 
          <div className="imagent position-relative">
            <img src={a.url} className="w-100" alt="" />
            <div className="imade position-absolute p-10 text-light">
              <h1 className='fs-5 m-2'>{a.name}</h1>
              <h3 className='fs-6 m-2'>{a.title}</h3>
              <ul className='imsss '>
                <li> <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li> <a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li> <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="people">
          <div className="impp">
            
            <h1>Searching for the best places?</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus est pellen tesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Et netus malesuada fames ac turpis egestas nisl vel.</p>

            <button type="button" class="btn btn-success"> <h3>SEARCH PLACES</h3></button>
          </div>
          <div className="plrrr">
            <img src={require('../img/230.jpg')} alt="" /> </div>
        </div>
      </div>
    </>
  )
}

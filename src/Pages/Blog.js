import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <>
      <div className="blog position-relative">
        <div className="shpp">
          <img src={require('../img/blog.jpg')} alt="" className='w-100' />
          <div className="shipp position-absolute">
            <h1>Blog List</h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Blog List</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="conainer product">
        <div className="ads">
          <div className="adblog position-relative">
            <img src={require('../img/blog1.jpg')} alt="" className='w-100' />
            <h3 className='position-absolute absblog'>March4,2018</h3>
          </div>
          <div className="comment">
            <h3 className='mt-5 fs-6 text-secondary'>LIFESTYLE ! BY ANGELA MATHIS</h3>
            <h1 className='fs-2 fw-normal'>Newly-launched campaignin Whitby agencies Brooklin, come to see cozy Place</h1>
            <p className='mt-1 text-secondary'>Cibo euripidis ut qui, sumo mnesarchum no his. Ius magna pertinax cu, cu cum summo erant, percipit adipisci nam an. Eu vim delectus tractatos sapientem, mel te nullam dicunt epicurei. Eligendi appetere et mei, ex nec aeterno nominavi consetetur recusabo... </p>
            <a href="" className='text-dark fst-normal'>READ MORE</a>
            <ul className='comit d-flex mt-3 text-end'>
              <li><a href=""><i class="fa fa-comment" aria-hidden="true"></i></a></li>
              <li><a href=""><i class="fa fa-heart" aria-hidden="true"></i></a></li>
              <li> <a href=""><i class="fa fa-twitter mx-3" aria-hidden="true"></i></a></li>
              <li> <a href=""><i class="fa fa-facebook mx-3" aria-hidden="true"></i></a></li>
              <li> <a href=""><i class="fa fa-flickr mx-3" aria-hidden="true"></i></a></li>
              <li> <a href=""><i class="fa fa-pinterest-p mx-3" aria-hidden="true"></i></a></li>
            </ul>
          </div>
          <div className="adblog position-relative">
            <img src={require('../img/blog2.jpg')} alt="" className='w-100' />
            <h3 className='position-absolute absblog'>March3,2018</h3>
          </div>
          <div className="comment">
            <h3 className='mt-5 fs-6 text-secondary'>LIFESTYLE ! BY ANGELA MATHIS</h3>
            <h1 className='fs-2 fw-normal'>The shortest distance between paradise and the place you call your home.</h1>
            <p className='mt-1 text-secondary'>Cibo euripidis ut qui, sumo mnesarchum no his. Ius magna pertinax cu, cu cum summo erant, percipit adipisci nam an. Eu vim delectus tractatos sapientem, mel te nullam dicunt epicurei. Eligendi appetere et mei, ex nec aeterno nominavi consetetur recusabo... </p>
            <a href="" className='text-dark fst-normal'>READ MORE</a>
            <ul className='comit d-flex mt-3'>
              <li><a href=""><i class="fa fa-comment" aria-hidden="true"></i></a></li>
              <li><a href=""><i class="fa fa-heart" aria-hidden="true"></i></a></li>
              <li> <a href=""><i class="fa fa-twitter mx-3" aria-hidden="true"></i></a></li>
              <li> <a href=""><i class="fa fa-facebook mx-3" aria-hidden="true"></i></a></li>
              <li> <a href=""><i class="fa fa-flickr mx-3" aria-hidden="true"></i></a></li>
              <li> <a href=""><i class="fa fa-pinterest-p mx-3" aria-hidden="true"></i></a></li>
            </ul>
          </div>
          <div className="blurbck position-relative">
            <h2 className='bh2'> “If you’re not going to put money in real estate, where else?”</h2>
            <p className='text-light mx-5'>by Sameer Rai</p>
            <h4 className='position-absolute bdbd'> March2,2018</h4>
            <h3 className='position-absolute bade'><i class="fa fa-quote-right" aria-hidden="true"></i></h3>
            
          </div>
        </div>
        <div className="cats">
          <div className="onsh">
            <h1 className='bg-dark text-light'> About Me</h1>
            <img src={require('../img/attr1.jpg')} alt="" className='blfr mt-3' />
            <ul className='blogrr'>
              <li><a href="">Libero id faucibus nisl lorem tincidunt. Sit amet tellus et cras adipiscing in arcu curs</a></li>
              <li><a href=""><i class="fa fa-envelope-o" aria-hidden="true"></i> angela@qodeinteractive.com</a></li>
              <li><a href=""><i class="fa fa-link" aria-hidden="true"></i> http://qodeinteractive.com</a></li>
            </ul>
          </div>
          <h1 className='bg-dark text-light mt-5'>Connect With Us</h1>
          <ul className='social d-flex'>
            <li> <a href=""><i class="fa fa-twitter mx-3" aria-hidden="true"></i></a></li>
            <li> <a href=""><i class="fa fa-pinterest-p mx-3" aria-hidden="true"></i></a></li>
            <li> <a href=""><i class="fa fa-facebook mx-3" aria-hidden="true"></i></a></li>
            <li> <a href=""><i class="fa fa-instagram mx-3" aria-hidden="true"></i></a></li>
            <li> <a href=""><i class="fa fa-flickr mx-3" aria-hidden="true"></i></a></li>
          </ul>
          <div className="onsh mt-5">
            <h1 className='bg-dark text-light'> Categories</h1>
            <ul className=''>
              <li><a href="">Advertising</a></li>
              <li><a href="">Apartments</a></li>
              <li><a href="">Breaking News</a></li>
              <li><a href="">Furniture</a></li>
              <li><a href="">Cities</a></li>
              <li><a href="">LifeStyle</a></li>
            </ul>
          </div>
          <div className="twsh">
            <img src={require('../img/20s.jpg')} alt="" className='w-100 mt-5' />
          </div>
          <div className="thresh mt-5">
            <h1 className='bg-dark text-light'> Recent Posts</h1>
            <div className="light mt-4 d-flex">
              <img src={require('../img/post1.jpg')} alt="" className='lamppp' />
              <div className="ltcat">
                <a href=''>Homes With ‘Subway Tiles...</a>
                <h3 className='mt-1'>February 1, 2018</h3>
              </div>
            </div>
            <div className="light mt-4 d-flex">
              <img src={require('../img/post2.jpg')} alt="" className='lamppp' />
              <div className="ltcat">
                <a href=''>   House of the Week: An Aspen Re...</a>
                <h3 className='mt-1'>February 27, 2018</h3>
              </div>
            </div>
            <div className="light mt-4 d-flex">
              <img src={require('../img/post3.jpg')} alt="" className='lamppp' />
              <div className="ltcat">
                <a href=''>Find out where the people are ...</a>
                <h3 className='mt-1'>February 28, 2018</h3>
              </div>
            </div>
            <div className="light mt-4 d-flex">
              <img src={require('../img/ost4.jpg')} alt="" className='lamppp' />
              <div className="ltcat">
                <a href=''>4 Surprising Things That May I...</a>
                <h3 className='mt-1'>March 1, 2018</h3>
              </div>
            </div>
          </div>
          <h1 className='bg-dark mt-5 text-light'> Tags </h1>
            <ul className=''>
              <li><a href="">Beauty</a></li>
              <li><a href="">Design</a></li>
              <li><a href="">Fashion</a></li>
              <li><a href="">Mountains</a></li>
            </ul>
        </div>
      </div>
    </>
  )
}

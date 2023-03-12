import React from 'react'
import { Link } from 'react-router-dom'

export default function Elements() {
  return (
    <>
   <div className="shop position-relative">
                <div className="shpp">
                    <img src={require('../img/blog.jpg')} alt="" className='w-100' />
                    <div className="shipp position-absolute">
                        <h1>Blockquote</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li class="breadcrumb-item"><Link to="">Blockquote</Link></li>
                                
                            </ol>
                        </nav>

                    </div>
                </div>
            </div>
     <h5 className=' m-5 fw-normal text-secondary fs-6 lh-base'> Lorem ipsum dolor sit amet, nec in adipiscing purus luctus, urna pellentesque fringilla vel, non sed arcu integer, mauris ullamcorper ante ut non torquent. Justo praesent, vivamus eleifend torquent, suspendisse etiam lorem vestibulum, vestibulum in lorem nec vel, sit curabitur dui ligula vehicula quam. Nec in neque mauris, enim hac risus in lorem. Mi risus, feugiat egestas nunc vehicula vehicula libero. Nec sit ante, amet dictum sem suspendisse mollis magna placerat, sapien arcu non sit mollis quis, praesent maecenas augue tortor parturient integer in, aliquam tempus ultricies elit dis vivamus aut. Ipsum non ut egestas in, suspendisse ut. Sodales sed cras. Et consequat viverra. Orci urna etiam, consequat rhoncus in et.</h5>

<h4 className='text-success fs-6 ms-5 me-5'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. At nam eros erant. Ut debet denique his, mel te fugit inermis signiferumque cum.”</h4>

<h5 className=' m-5 fw-normal text-secondary fs-6 lh-base'>Lorem ipsum dolor sit amet, nec in adipiscing purus luctus, urna pellentesque fringilla vel, non sed arcu integer, mauris ullamcorper ante ut non torquent. Justo praesent, vivamus eleifend torquent, suspendisse etiam lorem vestibulum, vestibulum in lorem nec vel, sit curabitur dui ligula vehicula quam. Nec in neque mauris, enim hac risus in lorem. Mi risus, feugiat egestas nunc vehicula vehicula libero. Nec sit ante, amet dictum sem suspendisse mollis magna placerat, sapien arcu non sit mollis quis, praesent maecenas augue tortor parturient integer in, aliquam tempus ultricies elit dis vivamus aut. Ipsum non ut egestas in, suspendisse ut. Sodales sed cras. Et consequat viverra. Orci urna etiam, consequat rhoncus in et.</h5>
    </>
  )
}

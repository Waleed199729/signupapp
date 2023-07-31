import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer'>
      <footer className="page-footer font-small blue pt-4 ">
        <div className="container-fluid text-center text-md-left">
          <div className="row-footer">
            <div className="footer-paragraph col-md-6 mt-md-0 mt-3">
              <h3 className="text-uppercase"> UrbanBazaar </h3>
             <span><p>The company description of your business plan describes the vision and direction of the company so potential lenders 
                and partners can develop an accurate impression about who you are.1
                A good company description should succinctly outline key details while conveying your passion for the mission.</p></span> 
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">UrbanBazaar</h5>
              <ul className="list-unstyled">
                <li><a href="#!">   </a>  Jewelery </li>
                <li><a href="#!">   </a> Electronics </li>
                <li><a href="#!">   </a> Women's Clothing  </li>
                <li><a href="#!">   </a> Men's Clothing  </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase"> Social </h5>
              <ul className="list-unstyled">
                <li><a href="#!">  </a>GitHub</li>
                <li><a href="#!">  </a>Twitter</li>
                <li><a href="#!">  </a>Facebook</li>
                <li><a href="#!">  </a>Instagram</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">© 2020 Copyright:
          <a href="/"> SiddiquiGroup.com</a>
        </div>

      </footer>
      </div>

    </>
  )
}

export default Footer
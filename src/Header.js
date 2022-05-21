import React from 'react'

export const Header = () => {
  return (
  <>
  <header>
    {/* main header left side */}
    <section className="container main-hero-container">
      <div className='row'>
        <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start'>
          <h1 className='display-2'>
            Online Payment Made <br /> Easy For You
          </h1>
          <p className='main-hero-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis asperiores, molestias architecto sunt aliquam nemo temporibus porro deserunt nihil natus dolorum nam culpa sequi odit esse eaque sint perspiciatis. Doloribus?</p>
          
          {/* input group and button */}
          <h3>Get early access for you </h3>
          <div className='input-group mt-3'>
            <input type="text" className='rounded-pill w-75 p-2  me-3 form-control-text' placeholder='Enter Your Email' />
              <div className='input-group-button'> Get it now</div>
              </div>
              </div>

              {/* main header right side */}
              <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center align-item-center main-hero-section-images'>
              <img src="./images/hero1.jpg" 
              alt="hero1img" 
              className='img-fluid'
              />
               <img src="./images/hero4.jpg" 
              alt="hero4img" 
              className='img-fluid main-hero-img2' 
              /> 
              </div>
               </div>
     
    </section>
  </header>
  </>
);
}

export default Header

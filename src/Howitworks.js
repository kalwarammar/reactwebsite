import React from 'react'

export const Howitworks = () => {
  return (
    <>
   <section>
     <div className='work-container container'>
       <h1 className='main-heading text-center'>How does it works</h1>
       <div className='row' >
       <div className='col-12 col-lg-4 text-center work-container-subdiv'>
       <i class="fa fa-download" aria-hidden="true"></i>
       <h2 className='sub-heading'>download app</h2>
       <p className='main-hero-para w-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis asperiores, molestias architecto sunt aliquam nemo temporibus porro deserunt nihil Doloribus?</p>
       </div>
       <div className='col-12 col-lg-4 text-center work-container-subdiv'>
       <i class="fas fa-chalkboard-teacher"></i>
       <h2 className='sub-heading'>Complete the instruction</h2>
       <p className='main-hero-para w-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis asperiores, molestias architecto sunt aliquam nemo temporibus porro deserunt nihil Doloribus?</p>
       </div>
       <div className='col-12 col-lg-4 text-center work-container-subdiv'>
       <i class="fas fa-donate"></i>
       <h2 className='sub-heading'>Recieve your funds</h2>
       <p className='main-hero-para w-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis asperiores, molestias architecto sunt aliquam nemo temporibus porro deserunt nihil Doloribus?</p>
       </div>
     </div>
     </div>
   </section>
    </>
  );
  
};

export default Howitworks;
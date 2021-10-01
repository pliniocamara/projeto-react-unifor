import React from 'react';
import img1 from "../src/images/img1.jpg"
import img2 from "../src/images/img2.jpg"
import img3 from "../src/images/img3.jpg"
import img4 from "../src/images/img4.jpg"
import img5 from "../src/images/img5.jpg"
import img6 from "../src/images/img6.jpg"

const Home = () => {
  return (

    <div>

        <header className="py-5">
            <div className="container px-lg-5">
                <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
                    <div className="m-4 m-lg-5">
                        <h1 className="display-5 fw-bold">Prepare-se...</h1>
                        <p className="fs-4">Para um novo jeito de escutar e sentir música! Em breve...</p>
                    </div>
                </div>
            </div>
        </header>

        <section className="py-4">
            <div className="container px-lg-5">
                <div className="row gx-lg-5">
                    <div className="col-lg-6 col-xxl-4 mb-5">   
                    <img className="card-img-top" src={img1} alt=""></img>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">   
                    <img className="card-img-top" src={img2} alt=""></img>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">   
                    <img className="card-img-top" src={img3} alt=""></img>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">   
                    <img className="card-img-top" src={img4} alt=""></img>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">   
                    <img className="card-img-top" src={img5} alt=""></img>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">   
                    <img className="card-img-top" src={img6} alt=""></img>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
};

export default Home;
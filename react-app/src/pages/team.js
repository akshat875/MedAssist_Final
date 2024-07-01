import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import team1 from '../assets/ahlem.jpg';
import Footer from '../components/footer';

function Team() {
  const loadScript = (src) => {
    return new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.src = src;
      script.addEventListener('load', function () {
        resolve();
      });
      script.addEventListener('error', function (e) {
        reject(e);
      });
      document.body.appendChild(script);
      document.body.removeChild(script);
    });
  };

  useEffect(() => {
    loadScript(`${process.env.PUBLIC_URL}js/main.js`);
  }, []);

  return (
    <div>
      <Navbar />
      <section className="home-slider owl-carousel">
        <div
          className="slider-item bread-item"
          style={{ backgroundImage: 'url("images/bg_1.jpg")' }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay" />
          <div className="container" data-scrollax-parent="true">
            <div className="row slider-text align-items-end">
              <div className="col-md-7 col-sm-12 ftco-animate mb-5">
                <p
                  className="breadcrumbs"
                  data-scrollax=" properties: { translateY: '70%', opacity: 1.6}"
                >
                  <span className="mr-2">
                    <a href="index.html">Home</a>
                  </span>{' '}
                  <span>Sign Up</span>
                </p>
                <h1
                  className="mb-3 navbar-brand"
                  data-scrollax=" properties: { translateY: '70%', opacity: .9}"
                >
                  Sign Up In{' '}
                  <span style={{ fontWeight: 'bold' }}>Med</span>
                  <span style={{ color: 'blue', fontWeight: 'bold' }}>
                    Assist
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <h2 className="mb-3">About</h2>
              <h3>JavaScript and React developer</h3>
            </div>
            <div className="row g-10">
              <div className="col-md-4 col-lg-4">
                <div className="card bg-light">
                  <div className="card-body text-center d-flex flex-column align-items-center">
                    <img
                      src={team1}
                      style={{ width: '300px', height: '250px' }}
                      className="mb-3"
                      alt="Developer"
                    />
                    <h3 className="card-title mb-3">Akshat Vishwakarma</h3>
                    <p className="card-text">WEB DEVELOPER</p>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Team;

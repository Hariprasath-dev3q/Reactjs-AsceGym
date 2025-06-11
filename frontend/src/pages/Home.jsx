import React from "react";
import { Link } from "react-router-dom";
// import '../components/style.css'

function Home() {
  return (
    <>{/* //Homepage: A dynamic and attractive landing page that introduces ASCE Gym, its services, and benefits */}
      <div className="mainHome_container">
        <div className="home_content">
          <div className="position-relative">
            <img
              src="/sportsman-training-biceps-with-dumbbell.jpg"alt="Man training with dumbbell" style={{ height: "95vh", width: "100vw", objectFit: "cover" }} className="img-fluid"/>

            {/* Text Overlay */}
            <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
              <h1 className="lh-base custom-h1">Welcome to ASCE Gym</h1>
              <p className="lh-base custom-p">Achieve your fitness goals with expert trainers and tailored plans.</p>
              <div className="d-flex justify-content-center mt-3">
                <Link to='/login' className="btn btn-outline-info mx-2">Join Now</Link>
                <Link to='/pricing' className="btn btn-outline-info mx-2">Explore Membership Plans</Link>
              </div>
            </div>
          </div>

          <div className="m-5 p-5 bg-dark bg-opacity-25">
            <h3 className="text-center mb-5">Welcome to ASCE Gym – More Than Just a Gym</h3>
            <h5 className="text-center">ASCE Gym is where fitness meets passion. Whether you’re a beginner or a pro, our tailored programs, certified trainers, and friendly environment make your journey enjoyable and effective. We offer a blend of modern facilities, professional guidance, and a strong community to help you stay on track.</h5>
          </div>
          <div className="container-fluid">
            <h2 className="text-center mb-3">Section</h2>
            <h3 className="text-center mb-3">What We Offer</h3>
            <div className="d-flex justify-content-center flex-wrap mb-3 gap-3">
              <div className="card border-secondary mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header bg-transparent ">Personal Training</div>
                <div className="card-body text-secondary">
                  <p className="card-text">Custom workout plans and one-on-one sessions with certified trainers.</p>
                </div>
              </div>
              <div className="card border-secondary mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header bg-transparent ">Group Classes</div>
                <div className="card-body text-secondary">
                  <p className="card-text">Zumba, Yoga, HIIT, CrossFit, and more – stay motivated in a group setting  .</p>
                </div>
              </div>
              <div className="card border-secondary mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header bg-transparent ">Nutrition Plans</div>
                <div className="card-body text-secondary">
                  <p className="card-text">Personalized diet and nutrition advice to fuel your goals.</p>
                </div>
              </div>
              <div className="card border-secondary mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header bg-transparent ">Strength & Conditioning</div>
                <div className="card-body text-secondary">
                  <p className="card-text">Top-notch equipment and routines for muscle building and endurance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


  );
}

export default Home;

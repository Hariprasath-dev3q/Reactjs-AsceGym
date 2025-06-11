import { Link } from "react-router-dom";

function Trainer() {
  return (
    <div>
      <h3 className="text-center m-4">Meet Our Expert Trainers <Link to='/login' className="btn btn-outline-warning">Book Session</Link></h3>
      <p className="text-center m-4">At ASCE Gym, our certified trainers are here to guide, motivate, and push you towards your fitness goals. Get to know their backgrounds and the programs they lead.</p>
      <div className="container-fluid d-flex justify-content-center mt-4 mb-4">
        <div className="row row-cols-1 row-cols-md-3 g-4 w-50">
          <div className="col">
            <div className="card h-100">
              <img src="/trainer1.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">John</h5>
                <p className="card-text">Qualifications: <span>ACE Certified Personal Trainer</span></p>
                <p className="card-text">Expertise: <span>Weight Training</span> <span>Age: 25</span></p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="/trainer2.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lara</h5>
                <p className="card-text">Qualifications: <span>ACE Certified Personal Trainer</span></p>
                <p className="card-text">Expertise: <span>HIIT</span> <span>Age: 25</span></p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="/trainer3.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">George</h5>
                <p className="card-text">Qualifications: <span>ACE Certified Personal Trainer</span></p>
                <p className="card-text">Expertise: <span>Bodybuilding</span> <span>Age: 30</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )

}

export default Trainer;

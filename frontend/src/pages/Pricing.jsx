import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div>
      <div>
        <p className="text-center m-4">Join the ASCE Gym Family Today</p>
        <p className="text-center m-4">Choose the membership plan that fits your goals and budget. Whether you're looking for monthly flexibility or long-term commitment, we have something for everyone. Already a member? Log in to manage your account.</p>
        <p className="text-start ms-4 fw-bold fs-3" >Our Membership Plans</p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 p-4 ">
        <div className="col ">
          <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Basic Plan</h5>
                <ul>
                  <li>₹999/month</li>
                  <li>Access to gym floor</li>
                  <li>Locker facilities</li>
                  <li>1 free consultation</li>
                </ul>
              </div>
              <div className="card-footer">
                <Link to='/login' className="btn btn-danger">Join Now</Link>  
              </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Standard Plan</h5>
                <ul>
                  <li>₹2499/3 months</li>
                  <li>All Basic Plan features</li>
                  <li>3 personal training sessions</li>
                  <li>Free diet chart</li>
                </ul>
              </div>
              <div className="card-footer">
                <Link to='/login' className="btn btn-danger">Join Now</Link>
              </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Premium Plan</h5>
                <ul>
                  <li>₹8499/year</li>
                  <li>All Standard Plan features</li>
                  <li>Unlimited group classes</li>
                  <li>Dedicated personal trainer</li>
                  <li>Priority support</li>
                </ul>
              </div>
              <div className="card-footer">
                <Link to='/login' className="btn btn-danger">Join Now</Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

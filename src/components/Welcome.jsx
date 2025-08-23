import React from "react";
import { Link } from "react-router-dom";  

import adoption from "../assets/image/adoption.png";
import shelter from "../assets/image/animal-shelter.png";

const Welcome = () => {
  return (
    <div className="wrapper">
      <div className="group-title">
        <h1 className="title">
          Welcome to PetCaress
          {""} <i class="fa-solid fa-paw"></i>
        </h1>
        <p className="subtitle">
          Connect loving pets with caring families. Whether you're a shelter
          looking to find homes for animals or someone ready to adopt, you're in
          the right place.
        </p>
      </div>

      <div className="selection">
        <Link to="/register" className="box">
          <img className="img" src={shelter} alt="" />
          <h1 className="title-selection">Shelter</h1>
          <p className="subtitle-selection">
            Animal shelters and rescue organizations. Create an account to post
            pets looking for homes.
          </p>
        </Link>
        <Link to="/profile" className="box">
          <img className="img" src={adoption} alt="" />
          <h1 className="title-selection">Adopter</h1>
          <p className="subtitle-selection">
            Looking for a new companion? Browse available pets from local
            shelters. No account needed!
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;

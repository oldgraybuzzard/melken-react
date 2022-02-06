import React, {useState} from "react";
import backgroundCover from '../../assets/img/info-managment.jpg'

function About(){
  const [pages] = useState([
    {
      name: 'about us'
    }
  ]);

  const [currentPage] = useState(pages[0]);

  return (
    <div className="masthead text-center d-flex">
      <div className="container my-auto">
        <div className="col">
          <img src={backgroundCover} alt="information management"></img>
        <h1>help</h1>
        <h1>Hello</h1>
        </div>
      </div>
    </div>
  )
}

export default About;
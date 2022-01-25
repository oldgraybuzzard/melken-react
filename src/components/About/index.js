import React, {useState} from "react";

function About(){
  const [pages] = useState([
    {
      name: 'about us'
    }
  ]);

  const [currentPage] = useState(pages[0]);

  return (
    <div className="masthead text-center-white d-flex">
      <div>
        
      </div>
    </div>
  )
}

export default About;
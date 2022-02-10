import React, { useEffect} from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';

import logo from '../../assets/img/Small.png'

function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

    useEffect(() => {
      document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

      const icons = [
        {
            name: "fab fa-linkedin fa-lg",
            link: "https://www.linkedin.com/company/melken-solutions-llc"
        },
        {
            name: "fab fa-twitter fa-lg",
            link: "https://twitter.com/melkensolutions"
        }
    ]

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container-fluid">
        <a href="/" className="navbar-brand js-scroll-trigger">
          <img src={ logo } alt="Melken Logo"/>
        </a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
                {pages.map((Page) => (
                    <li
                        className={`nav-item nav-link js-scroll-trigger ${
                            currentPage.name === Page.name && 'active'
                            }`}
                        key={Page.name}
                    >
                        <span
                            onClick={() => setCurrentPage(Page)}
                        >
                            {capitalizeFirstLetter(Page.name)}
                        </span>
                    </li>
                ))}
            </ul>

        </div>
        <div className='col-md-auto'>
                {icons.map(icon =>
                    (
                        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name} style={{color: '#FF7F11'}}></i>{' '}</a>
                    )
                )}                         
        </div>
    </div>
</nav>
);
}


export default Nav;
import React from 'react';

function Footer() {
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

    function fullYear() {
    const yearFormat = new Date();
    return yearFormat.getFullYear();
  }

    return (
        <section>
            <div className="container">
                <div className='row'>
                    <div className='col-3'>
                        <span> &copy; {fullYear()} Melken Solutions, LLC</span>
                    </div>
                    <div className="col-6 text-center">
                        <span>Created with ❤️ and ✊ for all by {' '} <a target='blank' href="https://github.com/oldgraybuzzard">OldGrayBuzzard!</a>
                        </span>
                    </div>
                    <div className='col-3 justify-content'>
                          {icons.map(icon =>
                              (
                                  <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name} style={{color: '#FF7F11'}}></i>{' '}</a>
                              )
                          )}                         
                    </div>               
                </div>
            </div>
        </section>
    );
}

export default Footer;

import React from 'react';

function Footer() {

    const icons = [
        {
            name: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/kendallfelder/"
        },
        {
            name: "fab fa-twitter",
            link: "https://twitter.com/kenfelder"
        }
    ]

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <span>Created with ❤️ and ✊ for all by
                          {' '}
                            <a target='blank' href="https://github.com/oldgraybuzzard">OldGrayBuzzard!</a>
                        </span>
                        </div>
                        <div className='col-md-auto justify-content'>
                          {icons.map(icon =>
                              (
                                  <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i>{' '}</a>
                              )
                          )}                         
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;

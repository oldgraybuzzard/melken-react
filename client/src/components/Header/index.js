import React from 'react';

function Header(props) {
  return (
    <header>
      {props.children}
    </header>
  );
}

export default Header;
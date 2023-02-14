import React from 'react';
import './header.css';
import { text } from '../helpers/texthelper';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">{text.Home_page_header}</h1>
      <p>{text.Home_page_subheading}</p>
    </div>
  </div>
);

export default Header;

import React from 'react';
import logo from '../../../images/logo3.png';
import './Header.css'

const Header = () => {
  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
  <div class="container-fluid container">
  <div class="navbar-brand">
      <img src={logo} alt="" width="150" height="70"/>
    </div>
    {/* <h3 class="navbar-brand"><span className="header-text">E-</span>Shop</h3> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent ">
      <ul class="navbar-nav mb-2 mb-lg-0 m-auto me-3">
        <li class="nav-item">
          <p class="nav-link active fs-5 header-texts me-4" aria-current="page" >Men</p>
          
        </li>
        <li class="nav-item">
          <p class="nav-link active fs-5 header-texts me-4" >Woman</p>
        </li>
        
        <li class="nav-item">
          <p class="nav-link active fs-5 header-texts me-4" >Kids</p>
        </li>
      </ul>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
        <li class="nav-item me-5">
        <p class="fs-5 text-dark"><i class="fas fa-search"></i></p>
        </li>
        <li class="nav-item me-5">
        <p class="fs-5 text-dark"><i class="fas fa-shopping-cart"></i></p>
        </li>
        <li class="nav-item me-5">
        <p class="fs-5 text-dark"><i class="far fa-user"></i></p>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    </div>
  );
};

export default Header;
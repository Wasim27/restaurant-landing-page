import React from 'react';
import ProductBox from './MenuItem';
import pimage1 from '../images/gourmet-burger.jpg';

const Menu = () => {
  return (
    <div id="menu" className="bg-dark mx-auto pt-8">
      <h1 className="py-4 text-4xl font-bold md:text-4xl text-gray-light lg:text-6xl">
        ORDER & ENJOY
      </h1>
      <p className="font-bold text-gray-light">
        Choose from a selection of delicious burgers crafted with care by our
        Chefs.
      </p>
      <div className="flex justify-center align-center mx-auto">
        <ProductBox image={pimage1} price={'8.00'} title="Gourmet Burger 1" />
        <ProductBox image={pimage1} price={'12.00'} title="Gourmet Burger 2" />
      </div>
    </div>
  );
};

export default Menu;

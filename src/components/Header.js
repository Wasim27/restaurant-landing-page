import React from 'react';
import styled from 'styled-components';
import img from '../images/burger-vector.webp';

// https://www.freepik.com/free-vector/delicious-realistic-burger-chalkboard-background_10578267.htm#query=burger&position=30&from_view=search

export const Header = () => {
  return (
    <header className="bg-dark px-2">
      <div className="container mx-auto flex-wrap items-center text-center md:flex md:flex-nowrap md:text-left">
        <div className="container mx-auto">
          <h3 className="font-medium text-gray-light">
            worth every bite
          </h3>
          <h1 className="py-4 text-4xl font-bold md:text-4xl text-gray-light lg:text-6xl">
            <span className='text-dark-red'>Delicious</span> Burger
            <br /> Shop
          </h1>
          <p className="font-medium my-4 text-gray-light lg:my-6">
            The best burgers in Manchester!
          </p>
          <a
            href="/"
            className="bg-dark-red text-3xl text-bg-light p-3 m-2 rounded inline-block py-2 "
          >
            Order Now
          </a>
        </div>
        <div className="mx-auto mt-8 w-2/4 md:mt-0 md:w-3/4">
          <img src={img} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;

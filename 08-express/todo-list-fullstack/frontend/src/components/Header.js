import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar
      className='d-flex justify-content-center'
      style={{ backgroundColor: 'teal' }}
    >
      <Navbar.Brand
        href='#home'
        className='d-flex align-items-center'
        style={{ color: 'white' }}
      >
        <i
          className='far fa-calendar-check mr-2'
          style={{ fontSize: '2rem', paddingBottom: '6px' }}
        ></i>
        <h1>To-Done List</h1>
      </Navbar.Brand>
    </Navbar>
  );
}

import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Form, FormControl, Button } from "react-bootstrap";

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-none">
      <Form className='d-flex search-nav'>
        <FormControl
          type='search'
          placeholder='Search'
          className='me-2'
          aria-label="Search"
          // value={search}
          // onChange={handleChange}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </nav>
  )
}

import React from 'react';
import NavBar from '../nav/NavBar';
import RestaurantDashboard from '../restaurants/components/RestaurantDashboard';
import './App.css';
import { Container } from 'semantic-ui-react';

 export default function App() {
  return (
    <> 
      <NavBar />
      <Container className='main'>
        <RestaurantDashboard />
      </Container>
    </>
  )
};



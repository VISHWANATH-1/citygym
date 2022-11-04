import React from 'react';
import "./CityGym/Gym/Gym.css"
import Hero from  "./CityGym/Hero/Hero"
import Join from './CityGym/Join/Join';
import Plans from './CityGym/Plans/Plans';
import Program from './CityGym/Program/Program';
import Foot from './CityGym/Footer/Foot';
import Reason from './CityGym/Reasons/Reason';
import Test from './CityGym/Testimonials/Test';
function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reason />
      <Plans />
      <Test />
      <Join />
      <Foot />
    </div>
  );
}

export default App;

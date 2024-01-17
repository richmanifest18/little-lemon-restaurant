import React from 'react';
import {Link} from  'react-router-dom'


const Confirmation = ({ bookingInfo }) => {
  return (
    <div>
      <h1 className='confirmed__title'>Booking confirmed!</h1>
      <div className="confirmation__container">
        <div className='confirmation-wrapper'>
          <p>Name: {bookingInfo.name}</p>
          <p>Date: {bookingInfo.date}</p>
          <p>Time: {bookingInfo.selectedTime}</p>
          <p>Occasion: {bookingInfo.occasion}</p>
          <p>Number of guests: {bookingInfo.guests}</p>
          <p>E-mail: {bookingInfo.email}</p>
        <Link to="/">
          <button className='confirmation__btn btn2' aria-label="On Click">Home</button>
        </Link>
        </div>
      </div>
      </div>
  );
};

export default Confirmation;



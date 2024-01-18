import BookingForm from './BookingForm';
import Footer from './Footer';
import React, { useState, useReducer } from 'react';
import Confirmation from './Confirmation';


const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE_TIMES':
    case 'UPDATE_TIMES':
      return action.payload;
    default:
      return state;
  }
};

//Function to initialize the available times
const initializeTimes = () => {
  return [
  '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'
]
}; 

//Function to update available times based on the selected date
const updateTimes = () => {
  // For now, let's call initializeTimes regardless of the date
  return initializeTimes();
  // Replace the above line with your actual logic to update times based on the date
}; 

function Reservations() {
  const [bookingInfo, setBookingInfo] = useState(null);
  const [availableTimes, dispatch] = useReducer(reducer, [], initializeTimes);


  // Function to update available times based on the selected date
  const handleUpdateTimes = (selectedDate) => {
    const updatedTimes = updateTimes(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', payload: updatedTimes });
  };

  const handleBookingSubmit = (info) => {
    setBookingInfo(info);
  };

  return (
    <div>
      {!bookingInfo ? (
        <BookingForm 
          onSubmit={handleBookingSubmit}
          availableTimes={availableTimes}
          setAvailableTimes={handleUpdateTimes}
          updateTimes={updateTimes}
          initializeTimes={initializeTimes} 
        />


      ) : (
        <Confirmation bookingInfo={bookingInfo} />
      )}
      <Footer />
    </div>
  );
}

export default Reservations;

export { initializeTimes, updateTimes };



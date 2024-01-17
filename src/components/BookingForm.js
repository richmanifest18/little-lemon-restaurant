import React, { useState, useEffect, useCallback } from 'react';

const BookingForm = ({ onSubmit, availableTimes, setAvailableTimes, updateTimes: parentUpdateTimes, initializeTimes }) => {
  const [date, setDate] = useState('');
  const [occasion, setOccasion] = useState('');
  const [guests, setGuests] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTime, setSelectedTime] = useState('');


  const updateTimes = useCallback((selectedDate) => {
    // For now, let's always return the initial set of times
    return initializeTimes();
  }, [initializeTimes]);
  

  // Function to get updated times based on the selected date
  const getUpdatedTimes = useCallback((selectedDate) => {
    return updateTimes(selectedDate);
  }, [updateTimes]);


  // Effect to update available times when the date changes
  useEffect(() => {
    // const updatedTimes = getUpdatedTimes(date);
    // setAvailableTimes('');
    // setAvailableTimes(updatedTimes);
  }, [date, getUpdatedTimes, setAvailableTimes]); 

  // //Handler for date input change
  // const handleDateChange = (e) => {
  //   const selectedTime = e.target.value;
  //   setDate(selectedTime);
  //   // Dispatch state change when the date is changed
  //   const updatedTimes = getUpdatedTimes(selectedTime);
  //   setAvailableTimes(updatedTimes);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, date, selectedTime, guests, occasion, email });
  };

    return (
      <>
      <h1 className='reservations__title' data-testid="booking-form-title">Book your table</h1>
        <form onSubmit={handleSubmit} data-testid="booking-form">
            <label htmlFor="res-date" data-testid="label-choose-date">
                Choose Date:
                <input id="res-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required data-testid="input-choose-date"/>
            </label>
            <br />
            <label htmlFor='res-time' data-testid="label-choose-time">
              Time:
              <select
                id='res-time'
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                required
                data-testid="select-choose-time"
              >

              <option value="" data-testid="option-select-time">Select a time</option>
                {availableTimes && Array.isArray(availableTimes) ? (
                  availableTimes.map((time) => (
                    <option key={time} value={time} data-testid={`option-select-time-${time}`}>
                      {time}
                    </option>
                  ))
                ) : (
                  <option value="" data-testid="option-no-available-times">No available times</option>
                )}
              </select>
            </label>

            <br />
            <label htmlFor='occasion' data-testid="label-occasion">
                Occasion:
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required data-testid="select-occasion">
                    <option value=''>Select an occasion</option>
                    <option value="Birthday" data-testid="option-occasion-birthday">Birthday</option>
                    <option value="Anniversary" data-testid="option-occasion-anniversary">Anniversary</option>
                    <option value="Other" data-testid="option-occasion-other">Other</option>
                </select>
            </label>
            <br />
            <label htmlFor = 'guests' data-testid="label-guests">
                Number of guests:
                <select id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required data-testid="select-guests">
                    <option value=''>Guests</option>
                    <option data-testid="option-guests-1">1</option>
                    <option data-testid="option-guests-2">2</option>
                    <option data-testid="option-guests-3">3</option>
                    <option data-testid="option-guests-4">4</option>
                    <option data-testid="option-guests-5">5</option>
                    <option data-testid="option-guests-6">6</option>
                    <option data-testid="option-guests-7">7</option>
                    <option data-testid="option-guests-8">8</option>
                    <option data-testid="option-guests-9">9</option>
                    <option data-testid="option-guests-10">10</option>
                    <option data-testid="option-guests-11">11</option>
                    <option data-testid="option-guests-12">12</option>
                </select>
            </label>
            <br />
            <label htmlFor='fullname' data-testid="label-fullname">
                Full Name:
                <input id="fullname" type="text" value={name} onChange={(e) => setName(e.target.value)} required data-testid="input-fullname"/>
            </label>
            <br />
            <label htmlFor='email' data-testid="label-email">
                Email:
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required data-testid="input-email"/>
            </label>
            <br />
            <button className='btn2' type="submit" data-testid="btn-book-now">Book Now</button>
        </form>
        </>
    );
};

export default BookingForm;


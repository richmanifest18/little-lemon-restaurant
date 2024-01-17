import { initializeTimes, updateTimes } from './components/Reservations';

describe('Reservations component', () => {
  test('initializeTimes function returns the correct expected value', () => {
    const times = initializeTimes(); // Update the call to use Reservations
    const expectedTimes = [
      '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'
    ];

    expect(times).toEqual(expectedTimes);
  });

  test('updateTimes function returns the same value provided in the state', () => {
    // Set up initial state
    const initialState = ['5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'];

    // Call updateTimes function with the initial state
    const updatedTimes = updateTimes(initialState);

    // Assert that the returned value is the same as the initial state
    expect(updatedTimes).toEqual(initialState);
  });

});






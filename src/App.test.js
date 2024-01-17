import React from 'react';
import { render } from '@testing-library/react';
import BookingForm from './components/BookingForm';


test('renders "Book your table" text', () => {
  const { getByText } = render(<BookingForm />);
  const bookYourTableText = getByText(/Book your table/i);
  expect(bookYourTableText).toBeInTheDocument();
});

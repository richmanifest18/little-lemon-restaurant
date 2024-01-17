import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import BookingForm from './components/BookingForm'; 

// Mock the onSubmit function
const mockOnSubmit = jest.fn();

// Mock availableTimes and initializeTimes
const mockAvailableTimes = ['12:00 PM', '1:00 PM', '2:00 PM'];
const mockInitializeTimes = jest.fn(() => mockAvailableTimes);

describe('BookingForm component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<BookingForm onSubmit={mockOnSubmit} availableTimes={mockAvailableTimes} initializeTimes={mockInitializeTimes} />);
    
    // Test that important elements are rendered
    expect(getByTestId('booking-form-title')).toBeInTheDocument();
    expect(getByTestId('booking-form')).toBeInTheDocument();
    // Add more expectations as needed
  });

  it('submits form with correct data', async () => {
    const { getByTestId, getByLabelText, getByText } = render(<BookingForm onSubmit={mockOnSubmit} availableTimes={mockAvailableTimes} initializeTimes={mockInitializeTimes} />);

    // Fill out the form
    fireEvent.change(getByLabelText('Choose Date:'), { target: { value: '2024-01-20' } });
    fireEvent.change(getByLabelText('Time:'), { target: { value: '1:00 PM' } });
    fireEvent.change(getByLabelText('Occasion:'), { target: { value: 'Birthday' } });
    fireEvent.change(getByLabelText('Number of guests:'), { target: { value: '2' } });
    fireEvent.change(getByLabelText('Full Name:'), { target: { value: 'John Doe' } });
    fireEvent.change(getByLabelText('Email:'), { target: { value: 'john@example.com' } });

    // Submit the form
    fireEvent.click(getByTestId('btn-book-now'));

    // Wait for the form submission to be processed
    await waitFor(() => {
      // Expect that the onSubmit function is called with the correct data
      expect(mockOnSubmit).toHaveBeenCalledWith({
        name: 'John Doe',
        date: '2024-01-20',
        selectedTime: '1:00 PM',
        guests: '2',
        occasion: 'Birthday',
        email: 'john@example.com',
      });
    });
  });

  // Add more test cases as needed
});

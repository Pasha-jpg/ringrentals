import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

// Mock the logo image
jest.mock('../assets/images/logo.png', () => 'logo-mock.png');

describe('Footer Component', () => {
  test('renders without crashing', () => {
    render(<Footer />);
    expect(screen.getByText(/One Ring Rentals/i)).toBeInTheDocument();
  });

  test('displays copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2014 One Ring Rentals/i)).toBeInTheDocument();
  });

  test('shows helpful links section', () => {
    render(<Footer />);
    expect(screen.getByText('Helpful Links')).toBeInTheDocument();
  });
});
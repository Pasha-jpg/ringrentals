// Header.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

// Mock the logo image
jest.mock('../assets/images/logo.png', () => 'logo-mock.png');
jest.mock('./Header.css', () => ({}));
// Wrap component with Router since Header uses Link components
const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Header Component', () => {
  test('renders logo', () => {
    renderWithRouter(<Header />);
    const logo = screen.getByAltText('One Ring Rentals');
    expect(logo).toBeInTheDocument();
  });

  test('renders login and register buttons', () => {
    renderWithRouter(<Header />);
    expect(screen.getByText(/login/i)).toBeInTheDocument();
    expect(screen.getByText(/register/i)).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    renderWithRouter(<Header />);
    expect(screen.getByText('Find a Rental')).toBeInTheDocument();
    expect(screen.getByText('Regions')).toBeInTheDocument();
    expect(screen.getByText('News')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('renders search input', () => {
    renderWithRouter(<Header />);
    const searchInput = screen.getByPlaceholderText('Search...');
    expect(searchInput).toBeInTheDocument();
  });
});
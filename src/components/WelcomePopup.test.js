import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WelcomePopup from './WelcomePopup';

// filepath: c:\Workspaces\lab\DevOps-DevSecOps-Hackathon-lab-files-2\ContosoTraders.Ui.Website.V2.Raw\ContosoTraders.Ui.Website.V2\src\components\WelcomePopup.test.js

describe('WelcomePopup', () => {
  test('renders the modal initially', () => {
    render(<WelcomePopup />);
    expect(screen.getByText('WELCOME')).toBeInTheDocument();
    expect(screen.getByText('TO')).toBeInTheDocument();
    expect(screen.getByText('The DevSecOps Day 2 Hackathon!')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  test('closes the modal when the button is clicked', () => {
    render(<WelcomePopup />);
    fireEvent.click(screen.getByText('Get Started'));
    expect(screen.queryByText('WELCOME')).not.toBeInTheDocument();
    expect(screen.queryByText('TO')).not.toBeInTheDocument();
    expect(screen.queryByText('The DevSecOps Day 2 Hackathon!')).not.toBeInTheDocument();
    expect(screen.queryByText('Get Started')).not.toBeInTheDocument();
  });
});
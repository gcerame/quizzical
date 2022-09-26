import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StartScreen from './StartScreen';

describe('StartScreen', () => {
    it('renders the component', () => {
        render(<StartScreen />);
        expect(screen.getByText('Quizzical')).toBeInTheDocument();
    });
    it('renders a button', () => {
        render(<StartScreen />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
    it('renders a button with the correct text', () => {
        render(<StartScreen />);
        expect(screen.getByRole('button')).toHaveTextContent('Start');
    });
});

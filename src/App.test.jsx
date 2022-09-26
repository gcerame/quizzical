import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
    it('shows the start screen on load', () => {
        render(<App />);
        expect(screen.getByText('Quizzical')).toBeInTheDocument();
    });
    it('shows the game screen when the start button is clicked', async () => {
        render(<App />);
        screen.getByRole('button').click();
        expect(await screen.findByText('Check Answers')).toBeInTheDocument();
    });
});

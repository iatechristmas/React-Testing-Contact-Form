import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from './ContactForm';

test('', () => {
	render(<ContactForm />);

	const firstNameInput = screen.getByLabelText(/first name/i);
	const lastNameInput = screen.getByLabelText(/last name/i);
	const emailInput = screen.getByLabelText(/email/i);
	const messageInput = screen.getByLabelText(/message/i);

	fireEvent.change(firstNameInput, { target: { value: 'Matthew' } });
	fireEvent.change(lastNameInput, { target: { value: 'Molloy' } });
	fireEvent.change(emailInput, { target: { value: 'iatechristmas@gmail.com' } });
	fireEvent.change(messageInput, { target: { value: 'Test message' } });

	const submitButton = screen.getByTestId(/submit/i);
	fireEvent.click(submitButton);
});

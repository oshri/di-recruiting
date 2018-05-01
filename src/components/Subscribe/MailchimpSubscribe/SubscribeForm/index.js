import React from 'react';
import './SubscribeForm.css';

const SimpleForm = ({ status, message, className, style, onSubmitted }) => {
	let input;
	const submit = () =>
		input &&
		input.value.indexOf('@') > -1 &&
		onSubmitted({
			EMAIL: input.value
		});

	return (
		<div className="subscribeForm">
            <div className="form">
                <input  ref={node => (input = node)}
                        type="email"
                        placeholder="Enter Your email address"
                />
                <button onClick={submit}>Submit</button>
            </div>
			<div className="subscribeFormMessage">
				{status === 'sending' && (
					<div style={{ color: '#9321fe' }}>sending...</div>
				)}
				{status === 'error' && (
					<div style={{ color: '#ED0587' }}>{message}</div>
				)}
				{status === 'success' && (
					<div style={{ color: '#9321fe' }}>{message}</div>
				)}
			</div>
		</div>
	);
};

export default SimpleForm;

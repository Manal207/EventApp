import React, { useState } from 'react';
import '../Style/PhoneNumberForm.css'
import usaFlag from '../Icons/usaFlag.svg'

const PhoneNumberForm = () => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isAgreed, setIsAgreed] = useState(false);
    const [errors, setErrors] = useState([]);

    const validateInputs = () => {
        const newErrors = [];
        // Validate full name
        if (fullName.trim() === '') {
            newErrors.push('Full name cannot be empty.');
        }

        // Validate phone number
        if (phoneNumber.trim() === '') {
            newErrors.push('Phone number cannot be empty.');
        } else if (!/^\+?\d{10,15}$/.test(phoneNumber)) {  // Basic validation for international phone numbers
            newErrors.push('Please enter a valid phone number.');
        }

        // Validate terms and conditions checkbox
        if (!isAgreed) {
            newErrors.push('You must agree to the terms and conditions to continue.');
        }

        return newErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validateInputs();
        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors([]);
        console.log(fullName, phoneNumber);
        // Redirect to the next interface or handle the data further here
    };

    return (
        <div className="phoneFormContainer">
            <form onSubmit={handleSubmit} className="phoneForm">
                <h2>Your Phone Number</h2>
                <div className='inputWrapper'>
                    <input
                        type="text"
                        placeholder="Enter Your Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="nameInput"
                    />
                    <input
                        type="tel"
                        placeholder="Enter Your Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="phoneNumberInput"
                    />
                </div>
                
                <div className="termsContainer">
                    <div className='check'>
                        <input
                            type="checkbox"
                            checked={isAgreed}
                            onChange={(e) => setIsAgreed(e.target.checked)}
                        />
                        <label>
                            By checking the box, you agree to our Terms of Service and Privacy Policy
                        </label>
                    </div>
                    <a href="/terms">Read our Terms and Privacy Policy</a>
                </div>
                {errors.length > 0 && (
                    <div className="error">
                        {errors.map((error, index) => (
                            <p key={index}>{error}</p>
                        ))}
                    </div>
                )}
                <button type="submit" className="continueButton">Continue</button>
            </form>
        </div>
    )
}

export default PhoneNumberForm

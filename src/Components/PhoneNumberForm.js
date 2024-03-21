import React, { useState } from 'react';


const PhoneNumberForm = () => {

    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      // Process the phone number
      console.log(phoneNumber);
    };


  return (
    <div className="phoneFormContainer">
      <form onSubmit={handleSubmit} className="phoneForm">
        <h2>Your Phone Number</h2>
        <div className="countryInfo">
          {/* <img src={usFlag} alt="US Flag" className="flagIcon" /> */}
          <p className="countryLabel">United States (+1)</p>
        </div>
        <input
          type="tel"
          placeholder="Enter Your Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="phoneNumberInput"
        />
        <div className="termsContainer">
          <label>
            <input type="checkbox" />
            By checking the box, you agree to our Terms of Service and Privacy Policy
          </label>
          <a href="/terms">Read our Terms and Privacy Policy</a>
        </div>
        <button type="submit" className="continueButton">Continue</button>
      </form>
    </div>
  )
}

export default PhoneNumberForm

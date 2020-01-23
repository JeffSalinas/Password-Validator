import React from 'react';

export default function Validator () {

  return (
    <div>
      <p id="password-title">Password</p>
      <div id="input-container">
        <input
          id="password-input"
          aria-label="Insert Password"
          aria-required="true"
          type="text"
        />
        <div id="toggle-container">
          <input
            id="password-toggle"
            aria-label="Show Password"
            type="checkbox"
            checked={true}
          />
          <p id="toggle-title">Show</p>
        </div>
      </div>
    </div>
  )
}
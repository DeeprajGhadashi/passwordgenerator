import React from 'react';

const PasswordStrengthIndicator = ({ password = "" }) => {
  const getPasswordStrength = () => {
    const passwordLength = password.length;

    if (passwordLength < 1) {
      return "";
    } else if (passwordLength <= 4) {
      return "very Weak";
    } else if (passwordLength < 8) {
      return "Poor";
    } else if (passwordLength < 12) {
      return "Medium";
    } else if (passwordLength < 16) {
      return "Strong";
    } else {
      return "very Strong";
    }
  };

  const passwordStrength = getPasswordStrength();

  if (!passwordStrength) return <React.Fragment />;

  // Define colors for different strength levels
  const strengthColors = {
    "very Weak": "red",
    "Poor": "red",
    "Medium": "yellow",
    "Strong": "#35f76c",
    "very Strong": "darkgreen",
  };

  // Apply the appropriate color based on the password strength
  const strengthColor = strengthColors[passwordStrength];

  // Log the values for troubleshooting
  console.log("Password Strength:", passwordStrength);
  console.log("Strength Color:", strengthColor);

  return (
    <div className='password-strength'>
      Strength :{" "}
      <span style={{ fontWeight: "bold", color: strengthColor }}>
        {passwordStrength}
      </span>
    </div>
  );
};

export default PasswordStrengthIndicator;

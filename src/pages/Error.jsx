
import React from 'react';

const ErrorPage = () => {
  const goBack = () => {
    window.history.back(); // Go back to the previous page
  };

  return (
    <div className="error-page">
      <h1>Oops! Something went wrong.</h1>
      <p>We apologize for the inconvenience.</p>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}

export default ErrorPage;
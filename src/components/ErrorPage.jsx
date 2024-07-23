import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="error-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="error-content">
            <img src="/assets/img/404-error.jpg" alt="Page Not Found" />
            <h3>Oops! Page Not Found</h3>
            <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            <Link to="/" className="default-btn-two">
              Return To Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

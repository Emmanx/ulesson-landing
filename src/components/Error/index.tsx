import React from 'react';

export const Error = () => {
  return (
    <div className="Error -init">
      <div className="Error -body">
        <h2 className="Error -title">Oops... Something went wrong</h2>
        <span className="Error -desc">
          We couldn’t find what you’re looking for. Try again later.
        </span>
      </div>
    </div>
  );
};

export default Error;

import { useState } from "react";

function Packages(props) {
  return (
    <div>
      <div className="container">
        <div className="normal card">
          <h3 className="card-header text-center">{props.package}</h3>
          <p className="card-body">{props.text}</p>

          <button
            type="button"
            className="btn btn-outline-secondary mb-3 btn-sm"
          >
            Check it out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Packages;

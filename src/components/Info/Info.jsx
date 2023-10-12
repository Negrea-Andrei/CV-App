import './Info.css';

import React from 'react';

function Info() {
  return (
    <>
      <section className="section general-info">
        <form>
          <h2 className="title">General Info</h2>
          <div className="grid">
            <input
              placeholder="First & Last Name"
              type="text"
              id="name"
              name=" name"
            />
            <input
              placeholder="Phone"
              type="tel"
              id="phone"
              name="phone number"
            />
            <input
              placeholder="Email"
              id="email"
              type="email"
              name="email"
            />
            <input
              placeholder="Address"
              type="text"
              id="address"
              name="Address"
            />
          </div>
        </form>
      </section>
    </>
  );
}

export default Info;
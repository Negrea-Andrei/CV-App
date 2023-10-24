import "./Info.css";
import React from "react";

function Info({ info, setInfo }) {
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.id]: e.target.value });
  };

  return (
    <>
      <section className="section general-info">
        <form>
          <h2 className="title">General Info</h2>
          <div className="grid">
            <input
              placeholder="First & Last Name"
              type="text"
              pattern="[a-zA-Z]{3,30}"
              id="name"
              name=" name"
              onChange={(e) => handleChange(e)}
              value={info.name}
            />
            <input
              placeholder="Phone"
              type="tel"
              pattern="[0-9]{8,}"
              id="phone"
              name="phone number"
              onChange={(e) => handleChange(e)}
              value={info.phone}
            />
            <input
              placeholder="Email"
              id="email"
              type="email"
              pattern="{8,35}"
              name="email"
              onChange={(e) => handleChange(e)}
              value={info.email}
            />
            <input
              placeholder="Address"
              type="text"
              id="address"
              name="Address"
              onChange={(e) => handleChange(e)}
              value={info.address}
            />
          </div>
        </form>
      </section>
    </>
  );
}

export default Info;

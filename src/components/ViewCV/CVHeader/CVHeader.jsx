import "./CVHeader.css";

export default function CVHeader({name, phone, address, email}) {
  const displayName = name ? name : "Name";
  const displayPhone = phone ? phone : "Phone number";
  const displayAddress = address ? address : "Address";
  const displayEmail = email ? email : "email";

  return (
    <div className="cv-header printer">
      <div className="name-header">{displayName}</div>
      <div className="info-part">
        <div>{displayEmail}</div>
        <div>{displayPhone}</div>
        <div>{displayAddress}</div>
      </div>
    </div>
  );
}

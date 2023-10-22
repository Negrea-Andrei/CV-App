import "./CVHeader.css";

export default function CVHeader({name, phone, address, email}) {
  return (
    <div className="cv-header">
      <div className="name-header">{name}</div>
      <div className="info-part">
        <div>{email}</div>
        <div>{phone}</div>
        <div>{address}</div>
      </div>
    </div>
  );
}

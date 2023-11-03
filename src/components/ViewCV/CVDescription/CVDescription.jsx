import "./CVDescription.css";

export default function CVDescription({ description }) {
  return (
    <>
      <div className="description-header printer">
        <h2>DESCRIPTION</h2>
        <div className="description-body">{description}</div>
      </div>
    </>
  );
}

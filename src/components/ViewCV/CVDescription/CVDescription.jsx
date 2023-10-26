import "./CVDescription.css";

export default function CVDescription({ description }) {
  return (
    <>
      <div className="description-header printer">
        <h2>Description</h2>
        <div className="description-body">{description}</div>
      </div>
    </>
  );
}

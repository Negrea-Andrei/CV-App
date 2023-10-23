import "./CVDescription.css";

export default function CVDescription({ description }) {
  return (
    <>
      <div className="description-header">
        <h2>Description</h2>
        <div>{description}</div>
      </div>
    </>
  );
}

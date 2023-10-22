import './ViewCV.css'
import CVHeader from './CVHeader/CVHeader';

export default function ViewCV({
  info,
  description,
  education,
  experience,
}) {
  return (
    <div className="view-container">
      <CVHeader name={info.name}
      email={info.email}
      phone={info.phone}
      address={info.address} />      
    </div>
  );
};
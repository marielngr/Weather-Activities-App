import "./Header.css";

export default function Header({ temperature, condition }) {
  return (
    <h1>
      <span>{condition}</span>
      <span>{temperature}°C</span>
    </h1>
  );
}

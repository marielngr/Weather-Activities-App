import "./List.css";

export default function List({ children, title }) {
  return (
    <>
      <h3>{title}</h3>
      <ul className="list">{children}</ul>
    </>
  );
}

import "./basicFooter.css";

const basicFooter = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <footer className="Footer">
      <p>
        All &copy; copy rights are reserved to Waves event AB {fullYear}
      </p>
    </footer>
  );
};

export default basicFooter;
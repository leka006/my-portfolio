import './Navbar.css';
export default function Navbar() {
  return (
    <nav>
      <a className="logo">LS</a>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#expertise">Expertise</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
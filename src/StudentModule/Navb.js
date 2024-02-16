import './Navb.css';
import { Link } from 'react-router-dom';

function Navb() {
  return (
    <div >
      <nav >
        <div className="navbar-options">
        <Link to='Review0' id='navbar-option'>Review 0</Link>
        <Link to='Review1' id='navbar-option'>Review 1</Link>
        <Link to='Review2' id='navbar-option'>Review 2</Link>
        <Link to='Review3' id='navbar-option'>Review 3</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navb;

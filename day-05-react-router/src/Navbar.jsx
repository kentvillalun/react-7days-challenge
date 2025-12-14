import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="bg-blue-200 py-3 px-4 uppercase flex justify-between">
          <h1 className="font-bold text-3xl">NAVBAR</h1>
          <div className="align-bottom flex gap-5 justify-center items-center font-semibold">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
    );
}
 
export default Navbar;
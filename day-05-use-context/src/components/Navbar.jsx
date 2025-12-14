import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="flex flex-row py-3 px-20 from-blue-100 justify-between font-mono items-center bg-gradient-to-b shadow-lg sticky top-0">
            <h1 className="text-3xl font-semibold uppercase ">Auth Practice</h1>
            <div className="text-xl flex flex-row justify-between gap-10">
                <Link to="/" className=" hover:text-blue-600 py-1 px-5 rounded-lg transition-colors">Home</Link>
                <Link to="/dashboard" className=" hover:text-blue-600 py-1 px-5 rounded-lg transition-colors" >Dashboard</Link>
            </div>
            <div className="text-xl flex flex-row gap-10 justify-between">
                <Link to="/login" className=" hover:text-blue-600 py-1 px-5 rounded-lg transition-colors" >Login</Link>
            </div>
        </div>
    );
}
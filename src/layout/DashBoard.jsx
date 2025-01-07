import { NavLink, Outlet } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { FaBook, FaCalculator, FaCalendar, FaHome, FaList, FaPhone, FaSearch, FaStar, FaUser, FaUtensils } from "react-icons/fa";
import useCart from "../hooks/useCart";


const DashBoard = () => {
    const [cart] = useCart();
    const isAdmin = true;

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex">
                <div className="w-64 min-h-screen bg-orange-400">
                    <ul className="menu p-4">
                        {
                            isAdmin ? <>
                                <li><NavLink to='/dashboard/adminHome'>
                                    <FaHome />
                                    Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/addItems'>
                                    <FaUtensils />
                                    Add Items</NavLink></li>
                                <li><NavLink to='/dashboard/manageItems'>
                                    <FaList />
                                    Manage Items</NavLink></li>
                                <li><NavLink to='/dashboard/bookings'>
                                    <FaBook />
                                    Manage Bookings</NavLink></li>
                                <li><NavLink to='/dashboard/allUsers'>
                                    <FaUser />
                                    All Users</NavLink></li>
                            </> : <>
                                <li><NavLink to='/dashboard/userHome'>
                                    <FaHome />
                                    User Home</NavLink></li>
                                <li><NavLink to='/dashboard/reservation'>
                                    <FaCalendar />
                                    Reservation</NavLink></li>
                                <li><NavLink to='/dashboard/cart'>
                                    <GrCart />
                                    My cart ({cart.length})</NavLink></li>
                                <li><NavLink to='/dashboard/review'>
                                    <FaStar />
                                    Add a Review</NavLink></li>
                                <li><NavLink to='/dashboard/bookings'>
                                    <FaCalculator />
                                    My Bookings</NavLink></li>
                            </>
                        }
                        {/* sheard nave links */}
                        <div className="divider"></div>
                        <li><NavLink to='/'>
                            <FaHome />
                            Home</NavLink></li>
                        <li><NavLink to='/order/salad'>
                            <FaSearch />
                            Menu</NavLink></li>
                        <li><NavLink to='/order/contact'>
                            <FaPhone />
                            Contact</NavLink></li>
                    </ul>
                </div>
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
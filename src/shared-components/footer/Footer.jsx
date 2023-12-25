import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className='mt-24 p-4 md:p-12 lg:p-20 flex flex-col md:flex-row justify-between items-center bg-slate-900'>
                <section className='w-full md:w-1/3 flex flex-col justify-center items-center md:border-r-2 md:pr-2'>
                    <img className='h-36 w-36' src={logo} alt="" />
                    <h1 className='text-white text-4xl lg:text-5xl font-semibold font-comforta'>Taskify</h1>
                </section>
                <section className='w-full md:w-2/3 space-y-6'>
                    <ul className='flex gap-6 justify-center items-center flex-wrap font-comforta'>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-lg text-transparent font-semibold duration-500 bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text drop-shadow-lg" : "text-white font-normal duration-500"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-lg text-transparent font-semibold duration-500 bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text drop-shadow-lg" : "text-white font-normal duration-500"
                                }
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/profile"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-lg text-transparent font-semibold duration-500 bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text drop-shadow-lg" : "text-white font-normal duration-500"
                                }
                            >
                            Profile
                            </NavLink>
                        </li>
                    </ul>
                    <p className='font-comforta text-white px-6 text-center'>Taskify 123 Productivity Lane, Innovation City, Efficiency State</p>
                    <section className='flex justify-center items-center gap-6 text-white text-3xl'>
                        <FaFacebook></FaFacebook>
                        <FaYoutube></FaYoutube>
                        <FaInstagram></FaInstagram>
                        <FaWhatsapp></FaWhatsapp>
                        <FaLinkedin></FaLinkedin>
                    </section>
                </section>
            </div>
        </>
    );
};

export default Footer;
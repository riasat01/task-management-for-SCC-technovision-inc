import { Link } from 'react-router-dom';
import banner_bg from '../../../../assets/banner-bg.jpeg'
import Button from '../../../../shared-components/button/Button';

const Banner = () => {
    return (
        <div
            style={
                {
                    backgroundImage: `url(${banner_bg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }
            }
            className='w-full flex flex-col justify-center items-center py-24'
        >
            <h1 className='mx-8 md:mx-12 lg:mx-0 w-full lg:w-1/2 text-4xl md:text-5xl lg:text-6xl text-white font-extrabold'>Unleash Your Productivity, Conquer Deadlines and Achieve Goals</h1>
            <Link to="/dashboard" className='mx-8 md:mx-12 lg:mx-0 w-full lg:w-1/2 mt-8 text-4xl'>
                <Button text={`Let's Explore`}></Button>
            </Link>
        </div>
    );
};

export default Banner;
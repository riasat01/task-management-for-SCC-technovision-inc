import banner_bg from '../../../../assets/banner-bg.jpeg'

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
            className='w-full flex justify-center items-center'
        >
            <h1 className='my-24 mx-8 md:mx-12 lg:mx-0 w-full lg:w-1/2 text-4xl md:text-5xl lg:text-6xl text-white font-extrabold'>Unleash Your Productivity, Conquer Deadlines and Achieve Goals</h1>
        </div>
    );
};

export default Banner;
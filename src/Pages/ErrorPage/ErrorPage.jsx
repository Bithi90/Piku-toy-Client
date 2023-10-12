import { Link } from 'react-router-dom';
import errorpage from '../../assets/depositphotos_80897014-stock-photo-page-not-found.jpg';

const ErrorPage = () => {
    return (
        <div>
            <div className='fixed-top'>
            <img className='w-full' src={errorpage} alt="" />
            <Link to='/'><button className="btn bg-white text-orange-600 font-bold absolute   top-[800px] left-[700px]">Go To Home</button></Link>
        </div>
        </div>
    );
};

export default ErrorPage;
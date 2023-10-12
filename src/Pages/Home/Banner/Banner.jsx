
import banner1 from '../../../assets/image1.jpg';
import banner2 from '../../../assets/children-play-wooden-train-build-toy-railroad-home-kindergarten-daycare-68427730.webp';
import banner3 from '../../../assets/blogbanner.jpg';
import banner4 from '../../../assets/toy.webp';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="carousel h-[650px]  w-full">
                <div id="item1" className="carousel-item w-full">
                    <div

                        style={{
                            backgroundImage: `url(${banner1})`,
                            backgroundSize: "cover"
                        }}
                    >
                        <div className="w-[1280px] h-[650px] pt-48 pl-24 justify-center bg-gradient-to-r from-sky-200 ">
                            <h4 className="text-3xl font-bold text-sky-600 "> 𝐏𝐢𝐜𝐤 𝐓𝐡𝐞 𝐁𝐞𝐬𝐭 𝐓𝐨𝐲</h4>
                            <h2 className="text-6xl font-bold text-orange-600 ">𝐅𝐨𝐫 𝐘𝐨𝐮𝐫 𝐤𝐢𝐝</h2>
                            <Link to='/signup'><button className="btn bg-sky-500 mt-4">Register</button></Link>
                        </div>
                    </div>
                    
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div

                        style={{
                            backgroundImage: `url(${banner2})`,
                            backgroundSize: "cover"
                        }}
                    >
                        <div className="w-[1280px] h-[650px] pt-48 pl-24 justify-center bg-gradient-to-r from-sky-200 ">
                            <h4 className="text-3xl font-bold text-sky-600 "> 𝐏𝐢𝐜𝐤 𝐓𝐡𝐞 𝐁𝐞𝐬𝐭 𝐓𝐨𝐲</h4>
                            <h2 className="text-6xl font-bold text-orange-600 ">𝐅𝐨𝐫 𝐘𝐨𝐮𝐫 𝐤𝐢𝐝</h2>
                            <Link to='/signup'><button className="btn bg-sky-500 mt-4">Register</button></Link>
                        </div>
                    </div>
                </div>
                
                <div id="item3" className="carousel-item w-full">
                    <div

                        style={{
                            backgroundImage: `url(${banner3})`,
                            backgroundSize: "cover"
                        }}
                    >
                        <div className="w-[1280px] h-[650px] pt-48 pl-24 justify-center bg-gradient-to-r from-sky-200 ">
                            <h4 className="text-3xl font-bold text-sky-600 "> 𝐏𝐢𝐜𝐤 𝐓𝐡𝐞 𝐁𝐞𝐬𝐭 𝐓𝐨𝐲</h4>
                            <h2 className="text-6xl font-bold text-orange-600 ">𝐅𝐨𝐫 𝐘𝐨𝐮𝐫 𝐤𝐢𝐝</h2>
                            <Link to='/signup'><button className="btn bg-sky-500 mt-4">Register</button></Link>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full">
                    <div

                        style={{
                            backgroundImage: `url(${banner4})`,
                            backgroundSize: "cover"
                        }}
                    >
                        <div className="w-[1280px] h-[650px] pt-48 pl-24 justify-center bg-gradient-to-r from-sky-200 ">
                            <h4 className="text-3xl font-bold text-sky-600 "> 𝐏𝐢𝐜𝐤 𝐓𝐡𝐞 𝐁𝐞𝐬𝐭 𝐓𝐨𝐲</h4>
                            <h2 className="text-6xl font-bold text-orange-600 ">𝐅𝐨𝐫 𝐘𝐨𝐮𝐫 𝐤𝐢𝐝</h2>
                            <Link to='/signup'><button className="btn bg-sky-500 mt-4">Register</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item4" className="btn btn-xs">3</a>
                <a href="#item3" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;
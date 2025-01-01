import SectionTitle from "../SectionTitle";
import featuredImg from '../../assets/home/featured.jpg'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed pt-8 mb-10">
            <SectionTitle 
                heading="Featured item"
                subHeading="Check it out"
            ></SectionTitle>
            <div className="md:flex justify-center items-center px-36 pb-20 pt-12 space-y-4">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 text-white">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">where can i get some?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis repellat a eaque porro error doloremque optio veniam libero, ut ex eius. Alias est esse similique itaque consequuntur. Esse, tempore tempora!</p>
                    <button className="btn btn-outline border-0 border-b-2 mt-6">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
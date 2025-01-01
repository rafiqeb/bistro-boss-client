import { Link } from "react-router-dom";
import MenuCard from "../../components/MenuCard";
import Cover from "../../sheard/Cover";


const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="mt-16">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 mt-10">
                {
                    items.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
            <div className="flex justify-center items-center">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-2 mt-6">Order now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;
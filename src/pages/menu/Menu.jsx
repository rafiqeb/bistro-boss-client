import { Helmet } from "react-helmet-async";
import Cover from "../../sheard/Cover";
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from "./useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory";



const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet><title>Bistr Boss | Menu</title></Helmet>
            <Cover img={menuImg} title={'Our menu'}></Cover>

            {/* offered section */}
            <SectionTitle subHeading={'Dont miss'} heading="Today's offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert items */}
            <MenuCategory items={dessert} title={'dessert'} img={dessertImg}></MenuCategory>

            {/* pizza items */}
            <MenuCategory items={pizza} title={'pizza'} img={pizzaImg}></MenuCategory>

            {/* salad items */}
            <MenuCategory items={salad} title={'salad'} img={saladImg}></MenuCategory>

            {/* soup items */}
            <MenuCategory items={soup} title={'soup'} img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;
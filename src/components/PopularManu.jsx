import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import MenuCard from "./MenuCard";
import useMenu from "../pages/menu/useMenu";


const PopularManu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className="mb-12">
            <SectionTitle
                heading="From our menu"
                subHeading="Popular items">
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
            <div className="flex justify-center items-center mt-6">
                <button className="btn btn-outline border-0 border-b-2 mt-6">View full menu</button>
            </div>
        </section>
    );
};

export default PopularManu;
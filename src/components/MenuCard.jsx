

const MenuCard = ({item}) => {
    const {name, image, price, recipe} = item

    return (
        <div className="flex space-x-2 bg-base-300 p-2 rounded-lg">
            <img style={{borderRadius: '0 120px 120px 120px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h2 className="uppercase">{name}--------</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuCard;
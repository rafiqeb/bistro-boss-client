

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img src={image} alt="Shoes" />
                </figure>
                <p className="absolute bg-slate-900 text-white right-0 px-2 mr-4 mt-4 rounded-md">${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline border-0 border-b-2 border-orange-400 bg-slate-200 mt-6">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
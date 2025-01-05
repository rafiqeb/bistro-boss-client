import { useContext } from "react";
import { AuthContext } from "../../aouthentication/AouthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from "axios";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const { user } = useContext(AuthContext)
    const { _id, name, image, price, recipe } = item
    const [, refetch] = useCart()

    const handleAddToCart = (food) => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axios.post('http://localhost:5000/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 2000
                        });
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not loged in",
                text: "Please login to add to the card",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

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
                        <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-2 border-orange-400 bg-slate-200 mt-6">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
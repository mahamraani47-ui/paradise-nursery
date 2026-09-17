import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
{
id: 1,
name: "Aloe Vera",
price: 12,
category: "Indoor Plants",
image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
},
{
id: 2,
name: "Snake Plant",
price: 18,
category: "Indoor Plants",
image: "https://images.unsplash.com/photo-1593482892290-f54927ae2bb5",
},
{
id: 3,
name: "Peace Lily",
price: 20,
category: "Indoor Plants",
image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
},
{
id: 4,
name: "Spider Plant",
price: 15,
category: "Indoor Plants",
image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
},
{
id: 5,
name: "ZZ Plant",
price: 22,
category: "Indoor Plants",
image: "https://images.unsplash.com/photo-1632207691148-4e9a2f0b3b8d",
},
{
id: 6,
name: "Monstera",
price: 25,
category: "Indoor Plants",
image: "https://images.unsplash.com/photo-1614594574171-6c3f3e6b5c89",
},

{
id: 7,
name: "Rose",
price: 10,
category: "Flowering Plants",
image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322",
},
{
id: 8,
name: "Orchid",
price: 24,
category: "Flowering Plants",
image: "https://images.unsplash.com/photo-1566907225474-7b5e4c7c4e8d",
},
{
id: 9,
name: "Jasmine",
price: 14,
category: "Flowering Plants",
image: "https://images.unsplash.com/photo-1597848212624-e5d8f3f5d2d5",
},
{
id: 10,
name: "Lavender",
price: 16,
category: "Flowering Plants",
image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec",
},
{
id: 11,
name: "Tulip",
price: 13,
category: "Flowering Plants",
image: "https://images.unsplash.com/photo-1520763185298-1b434c919102",
},
{
id: 12,
name: "Sunflower",
price: 11,
category: "Flowering Plants",
image: "https://images.unsplash.com/photo-1597848212624-e5d8f3f5d2d5",
},

{
id: 13,
name: "Cactus",
price: 9,
category: "Succulents",
image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
},
{
id: 14,
name: "Echeveria",
price: 12,
category: "Succulents",
image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
},
{
id: 15,
name: "Jade Plant",
price: 17,
category: "Succulents",
image: "https://images.unsplash.com/photo-1525498128493-380d1990a112",
},
{
id: 16,
name: "Haworthia",
price: 14,
category: "Succulents",
image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
},
{
id: 17,
name: "String of Pearls",
price: 19,
category: "Succulents",
image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
},
{
id: 18,
name: "Burro's Tail",
price: 21,
category: "Succulents",
image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb",
},
];

function ProductList() {
const dispatch = useDispatch();
const cartItems = useSelector((state) => state.cart.items);

const categories = ["Indoor Plants", "Flowering Plants", "Succulents"];

const cartCount = cartItems.reduce(
(total, item) => total + item.quantity,
0
);

const handleAddToCart = (plant) => {
dispatch(addToCart(plant));
};

return ( <div> <nav> <a href="/">Home</a> <a href="/plants">Plants</a> <a href="/cart">Cart 🛒 ({cartCount})</a> </nav>


  <h1>Paradise Nursery Plants</h1>

  {categories.map((category) => (
    <section key={category}>
      <h2>{category}</h2>

      <div>
        {plants
          .filter((plant) => plant.category === category)
          .map((plant) => {
            const isAdded = cartItems.some(
              (item) => item.id === plant.id
            );

            return (
              <div key={plant.id}>
                <img
                  src={plant.image}
                  alt={plant.name}
                  width="150"
                  height="150"
                />

                <h3>{plant.name}</h3>

                <p>${plant.price}</p>

                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={isAdded}
                >
                  {isAdded ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            );
          })}
      </div>
    </section>
  ))}
</div>


);
}

export default ProductList;

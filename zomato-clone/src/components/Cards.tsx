let items = ["Order Online", "Dining", "Live Events"];
import img1 from "../assets/pics/Card-1.avif"
import img2 from "../assets/pics/Card-2.avif";
import img3 from "../assets/pics/Card-3.avif";
let pics = [img1,img2,img3]
import "../styles/cards.css"

const Cards = () => {
  return (
    <div className="cards-container">
      {items.map((item, index) => (
        <div className="card" key={item}>
          <img src={pics[index]} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item}</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facilis ratione iure, enim perferendis doloremque?
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

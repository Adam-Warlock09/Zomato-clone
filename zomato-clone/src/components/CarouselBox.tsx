import { ReactNode, useState } from "react";
import FastFood from "./../assets/pics/FastFood.jpg";
import IndianFood from "./../assets/pics/IndianFood.jpg";
import Restaurant from "./../assets/pics/Restaurant.jpg";
import "../styles/carousel.css";

const pics = [FastFood, IndianFood, Restaurant];

interface carouselProps {
  items: string[];
  children: ReactNode;
}

const CarouselBox = ({ items,children }: carouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="carousel-container">
      <button
        type="button"
        className="btn-carousel"
        onClick={() =>
          setSelectedIndex(selectedIndex - 1 < 0 ? 2 : selectedIndex - 1)
        }
      ></button>
      {items.map((item, index) => (
        <div
          className={
            "carousel-item " + (index == selectedIndex ? "active" : "")
          }
          key={item}
        >
          <img src={pics[index]} alt={item} />
        </div>
      ))}
      <button
        type="button"
        className="btn-carousel"
        onClick={() =>
          setSelectedIndex(selectedIndex + 1 > 2 ? 0 : selectedIndex + 1)
        }
      ></button>
      {children}
    </div>
  );
};

export default CarouselBox;

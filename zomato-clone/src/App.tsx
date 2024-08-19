import Cards from "./components/Cards";
import CarouselBox from "./components/CarouselBox";
import NavTab from "./components/NavTab";
import TitleBox from "./components/TitleBox";

function App() {
  return (
    <>
      <NavTab></NavTab>
      <CarouselBox items={["FastFood", "IndianFood", "Restaurant"]}>
        <TitleBox></TitleBox>
      </CarouselBox>
      <Cards></Cards>
    </>
  );
}
export default App;

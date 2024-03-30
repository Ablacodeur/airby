import AirbnbList from "./components/AirbnbList/AirbnbList";
import FilterContent from "./components/FilterContent/FilterContent";
import Hero from "./components/Hero/Hero";
import s from "./style.module.css"

function App() {
  return (
    <div  className={s.container}>
      <Hero />
      {/* <FilterContent /> */}
      <AirbnbList />
    </div>
  );
}

export default App;

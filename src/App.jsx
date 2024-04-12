import { useDispatch } from "react-redux";
import AirbnbList from "./Containers/AirbnbList/AirbnbList";
import Hero from "./components/Hero/Hero";
import s from "./style.module.css"
import { useEffect } from "react";
import { setAirbnb } from "./store/airbnb/airbnb-slice";
import { DataAPI } from "./api/data-api";
import Comments from "./Containers/Comments/Comments";
import { CommentsAPI } from "./api/comments-api";
import { setComment } from "./store/comments/comments-slice";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  const dispatch = useDispatch();

  async function fecthproperties(){
    try{
        const properties = await DataAPI.fetchAll();
        const comments = await CommentsAPI.fetchAll();

        dispatch(setAirbnb(properties));
        dispatch(setComment(comments))
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }

  useEffect(()=>{
      fecthproperties();
  },[])

  return (
    <div  className={s.container}>
      <Hero />
      <Outlet></Outlet>
    </div>
  );
}

export default App;

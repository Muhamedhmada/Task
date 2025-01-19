import {useEffect, useState} from "react";
// import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import {fetchDataWithToken} from "../../Components/Redux/TokenSlice";
import ControlCard from "./ControlCard/ControlCard";
import NewOrder from "../../Components/NewOrder/NewOrder";
import Aside from "../../Components/Aside/Aside";
import {AngleLeft, AngleRight} from "../../Assets/SVGS";
import LastMessage from "../../Components/LastMessage/LastMessage";

function Home() {
  const [close, setClose] = useState(false);
  const handleClose = () => {
    setClose((prev) => !prev);
  };
  const dispatch = useDispatch();

  const {token, data, loading, error} = useSelector((state) => state.token);
  console.log(token, loading, data);

  useEffect(() => {
    if (token) {
      dispatch(fetchDataWithToken(token)); // Dispatch to fetch data when token is available
    }
  }, [token, dispatch]);

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  if (error) {
    // return <div>Error: {error}</div>; // Show error if there's any issue with data fetching
  }
  return (
    <div
      className='home-container'
    >
      <Aside close={close} handleClose={handleClose} />
      <div className='one'>
        <div className='nav-side-container'>
          <Navbar />
        </div>
        <div className='content'>
          <p>لوحه التحكم</p>
          <ControlCard />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <div style={{flex: 1}}>
              <NewOrder />
            </div>
            <div style={{flex: 1}}>
              <LastMessage />
            </div>
          </div>
        </div>
      </div>
      <div className={close?"closeIcon closed":"closeIcon opened"} onClick={handleClose}>
          {
            close?
              <AngleRight width='30px' color='white' />
            :
              <AngleLeft width='30px' color='white' />
          }
        </div>
    </div>
  );
}

export default Home;

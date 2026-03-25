import MyName from "./components/MyName";
import ParkingSlots from "./components/ParkingSlots";
import Navbar from "./components/Navbar";
// import UserTable from "./components/UserTable";
// import { users } from "./data/users";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <ParkingSlots></ParkingSlots>
      {/* <UserTable data={users}></UserTable> */}
    </>
  )
}

export default App;
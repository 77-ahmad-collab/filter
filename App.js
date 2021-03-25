import logo from "./logo.svg";
import "./App.css";
import Filter from "./Components/Filter";
import Rooms from "./Components/Rooms";
import { AppProvider } from "./Context";

function App() {
  return (
    <>
      <AppProvider>
        <h4>Welcome to this filters app</h4>
        <Filter />
        <Rooms />
      </AppProvider>
    </>
  );
}

export default App;

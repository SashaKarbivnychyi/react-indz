import './App.css'
import Poll from "./components/Poll.jsx";
import {Provider, useSelector} from "react-redux";
import store from "./redux/store.js";

function App() {
  return (
    <Provider store={store}>
      <Polls />
    </Provider>
  )
}

function Polls() {
  const data = useSelector(state => state.polls);
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }}>
      {
        data.map((x, i) => (
          <Poll data={x} key={i} />
        ))
      }
    </div>
  )
}

export default App
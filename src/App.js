import React from "react";
import { Cards } from "./Components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  state ={}

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    // console.log("this is state", this.state)
    // console.log("typeof", typeof this.state)

  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <Cards data={data}/>
      </div>
    );
  }
}
export default App;

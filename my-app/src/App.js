import React, { Component } from "react";
import getDataAPI from "./API/getDataAPI";
import "./App.css";
import Filters from "./components/Filters/Filters";
import Table from "./components/Table/Table";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      isLoading: false,

      filter: {
        startDate: null,
        endDate: null,
        clientName: "",
        onlyMe: false,
      },
    };
  }

  async componentDidMount() {
    this.load();
    const data = await getDataAPI();
    this.setState({ data, isLoading: false });
  }

  load() {
    this.setState({ isLoading: true });
  }

  render() {
    const { isLoading, data } = this.state;
    return (
      <>
        {isLoading && <p>Loading...</p>}
        {data && (
          <>
            <Table data={data} />
            <Filters />
          </>
        )}
      </>
    );
  }
}

export default App;

import React, { Component } from "react";
import getDataAPI from "./API/getDataAPI";
import Table from "./components/Table/Table";
import filter from "./helpers/filter";
import FilterBlock from "./components/FilterBlock/FilterBlock";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      initialData: null,
      filteredData: null,
      isLoading: false,
      value: "",
      register: false,
    };
  }

  async componentDidMount() {
    this.load();
    const data = await getDataAPI();
    this.setState({ initialData: data, filteredData: data, isLoading: false });
  }

  onChangeInput = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  onClickFilter = (event) => {
    this.load();
    const { initialData, value, register } = this.state;
    const filterBy = event.target.dataset.name;
    const filteredData = filter({ initialData, value, register, filterBy });
    this.setState({ filteredData, isLoading: false });
  };

  onClickReset = () => {
    const { initialData } = this.state;
    this.setState({ filteredData: initialData, value: "", register: false });
  };

  load() {
    this.setState({ isLoading: true });
  }

  render() {
    const {
      initialData,
      isLoading,
      filteredData,
      value,
      register,
    } = this.state;
    return (
      <>
        {isLoading && <p className="loader">Loading...</p>}
        {!isLoading && initialData && (
          <>
            <Table data={filteredData} />
            <FilterBlock
              value={value}
              register={register}
              onClickFilter={(event) => this.onClickFilter(event)}
              onChangeInput={(event) => this.onChangeInput(event)}
              onClickReset={() => this.onClickReset()}
            />
          </>
        )}
      </>
    );
  }
}

export default App;

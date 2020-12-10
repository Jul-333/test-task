const filter = ({ initialData, value, register, filterBy }) => {
  let filteredData;
  const valueWithRegister = register ? value : value.toLowerCase();

  if (filterBy === "word-length") {
    filteredData = initialData.filter((element) => element.length > value);
  }

  if (filterBy === "substring") {
    filteredData = initialData.filter((element) => {
      const elementWithRegister = register ? element : element.toLowerCase();
      return elementWithRegister.includes(valueWithRegister);
    });
  }
  return filteredData;
};

export default filter;

import CONSTANTS from "../constants";

async function getDataAPI() {
  try {
    const response = await fetch(`${CONSTANTS.PROXY}${CONSTANTS.URL}`);
    const result = await response.json();
    const data = result.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export default getDataAPI;

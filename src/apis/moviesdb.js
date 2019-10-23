import axios from "axios";

export default axios.create({
  baseURL: "https://www.omdbapi.com/?apikey=c268494&"
});

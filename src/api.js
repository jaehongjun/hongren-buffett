import Axios from "axios";
import { SERVER_URL } from "./constants";

const instance = Axios.create({
  baseURL: `${SERVER_URL}/v1`,
});

export default {
  postTrade: (payload) => instance.post("post-trade", payload),
};

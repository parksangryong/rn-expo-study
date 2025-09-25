import axios from "axios";
import { Platform } from "react-native";

const BASE_URL =
  Platform.OS === "ios" ? "http://localhost:3030" : "http://10.0.2.2:3030";

const apiInstance = axios.create({
  baseURL: BASE_URL,
});

export default apiInstance;

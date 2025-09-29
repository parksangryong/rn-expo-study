import axios from "axios";
import { Platform } from "react-native";

export const BASE_URL =
  Platform.OS === "ios"
    ? "http://192.168.0.175:3030"
    : "http://192.168.0.175:3030";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;

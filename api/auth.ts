import { getSecureStore } from "@/utils/secureStore";
import axios from "axios";

type RequestUser = {
  email: string;
  password: string;
};

type TokenResponse = {
  accessToken: string;
};

async function postSignup(body: RequestUser): Promise<void> {
  const { data } = await axios.post("http://localhost:3030/auth/signup", body);
  return data;
}

async function postLogin(body: RequestUser): Promise<TokenResponse> {
  const { data } = await axios.post("http://localhost:3030/auth/login", body);
  return data;
}

async function getMe() {
  const accessToken = await getSecureStore("accessToken");
  const { data } = await axios.get("http://localhost:3030/auth/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
}

export { getMe, postLogin, postSignup };

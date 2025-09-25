import { Profile } from "@/types";
import { getSecureStore } from "@/utils/secureStore";
import apiInstance from "./axios";

type RequestUser = {
  email: string;
  password: string;
};

type TokenResponse = {
  accessToken: string;
};

async function postSignup(body: RequestUser): Promise<void> {
  const { data } = await apiInstance.post("/auth/signup", body);
  return data;
}

async function postLogin(body: RequestUser): Promise<TokenResponse> {
  const { data } = await apiInstance.post("/auth/login", body);
  return data;
}

async function getMe(): Promise<Profile> {
  const accessToken = await getSecureStore("accessToken");
  const { data } = await apiInstance.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
}

export { getMe, postLogin, postSignup };

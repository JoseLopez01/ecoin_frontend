export interface LoginInfo {
  email: string;
  password: string;
};

export interface LoginResponse {
  accesstoken: string;
  tokentype: string;
  expiresat: string;
};

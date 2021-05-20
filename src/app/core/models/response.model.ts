export interface Response<T> {
  message: string;
  status: number;
  error: boolean;
  data: T[];
};

export interface AuthResponse {
  data: {
    accesstoken: string;
    expiresat: string;
    tokentype: string;
  };
  error: boolean;
  message: string;
  status: number;
}

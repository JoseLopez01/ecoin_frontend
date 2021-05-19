export interface Response {
  message: string;
  status: number;
  error: boolean;
  data: any[];
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

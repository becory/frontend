import axios from "axios";

export interface InstanceResponse<T>{
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
  data: T;
}

export const instance = axios.create({ baseURL: `${process.env.NEXT_PUBLIC_API_HOST}/api`});


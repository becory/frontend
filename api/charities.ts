import { AxiosResponse } from "axios";
import { instance, InstanceResponse } from "./instance";

export interface Charity{
    id: number;
    org_id: number;
    name: string;
    logo: string;
    description: string;
}

export const getCharities = (page: number, limit?:number, q?:string): Promise<AxiosResponse<InstanceResponse<Charity[]>>> => instance.get("/charities",{params: {page, limit, q}})
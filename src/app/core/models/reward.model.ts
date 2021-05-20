import { Price } from "./price.model";

export interface Reward{
    shopid?: number;
    name: string;
    description: string;
    isactive?: boolean;
    price: Price[];

}


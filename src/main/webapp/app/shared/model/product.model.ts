export interface IProduct {
  id?: number;
  code?: string;
  name?: string;
  price?: number;
}

export class Product implements IProduct {
  constructor(public id?: number, public code?: string, public name?: string, public price?: number) {}
}

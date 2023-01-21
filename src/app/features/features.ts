export interface Client {
  clientId: number;
  name: string;
  mainContact?: string;
  email?: string;
  phoneNumber?: string;
  clientAdress?: string;
}

export interface Bill {
  billId: number;
  lot: string;
  date: Date;
  dueDate: Date;
  availability: string;
  billValidaty: Date;
  Details: string;
  client: Client;
  subject: string;
  items: Array<Product>;
  discount: number;

  total: number;
  tax: number;
  totalVAT: number;
}

export interface Product {
  prodId: number;
  prodName: string;
  quantity: number;
  unit: string;
  priceHT: number;
  total: number;
  stock?: number;
}

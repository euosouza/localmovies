import { Customer } from "./customerTypes";
import { User } from "./userTypes";

export interface Location {
  id: number | null,
  customer: Customer,
  movies: string,
  rentDate: string,
  deliveryDate: string,
  user: User,
  status: Status
}

export interface LocationCreateProps {
  customer: Customer,
  movies: string,
  deliveryDate: string,
}

export enum Status {
  ALUGADO = "Alugado",
  ENTREGUE = "Entregue",
}

export const colorStatus = {
  Alugado: "bg-yellow-500",
  Entregue: "bg-red-500",
};

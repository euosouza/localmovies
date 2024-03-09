export interface Location {
  id: number | null,
  customer_id: number,
  movies: string,
  rentDate: string,
  deliveryDate: string,
  user_id: number,
  status: Status
}

export interface LocationCreateProps {
  customer_id: number,
  movies: string,
  rentDate: string,
  deliveryDate: string,
  user_id: number,
  status: Status
}

export enum Status {
  ALUGADO = "Alugado",
  ENTREGUE = "Entregue",
}

export const colorStatus = {
  Alugado: "bg-yellow-500",
  Entregue: "bg-red-500",
};

export interface User {
  id: number | null,
  name: string,
  doc: string,
  status: Status
  password: string,
}

export interface UserCreatedProps {
  doc: string,
  name: string
  password: string,
}

export enum Status {
  ATIVO = "Ativo",
  DESATIVADO = "Desativado",
}

export const colorStatus = {
  Ativo: "bg-green-500",
  Desativado: "bg-red-500",
};

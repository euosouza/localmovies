export interface Customer {
  id: number | null,
  name: string,
  surname: string,
  cpf: string,
  contacts: Contacts,
  address: Address,
  status: Status
}

export interface CustomerCreateProps {
  name: string,
  surname: string,
  cpf: string,
  contacts: Contacts,
  address: Address,
  status: Status
}

export interface Contacts {
  email: string,
  phone: string,
}

export interface Address {
  zipCode: string,
  publicPlace: string,
  neighborhood: string,
  city: string,
  state: string
}

export enum Status {
  ATIVO = "Ativo",
  DESATIVADO = "Desativado",
}

export const colorStatus = {
  Ativo: "bg-green-500",
  Desativado: "bg-red-500",
};

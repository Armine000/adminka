export interface User {
  id: number;
  username: string;
  email: string;
  phone: number;
}

export interface UsersState {
  users: User[];
  status: "idle" | "loading" | "succeeded" | "failed";
}
export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  editData?: any;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}
export interface User {
  id: number;
  name: string;
}

export interface Props {}

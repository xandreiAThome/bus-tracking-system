interface UserType {
  id: number;
  name: string;
  email: string;
  image: string;
  role: "admin" | "user" | "driver" | "cashier";
}

export type { UserType };

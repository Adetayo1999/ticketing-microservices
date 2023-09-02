export interface UserAttributes {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserTypeWithoutPassword {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
}

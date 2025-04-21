export enum AuthType {
  authorization = "auth",
  registration = "registr",
}

export type RegistrationContextType = {
  page: AuthType;
  setPage: React.Dispatch<React.SetStateAction<AuthType>>;
};

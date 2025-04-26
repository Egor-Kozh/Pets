import { TabsType } from "@shared/components/tabs/types";

export enum AuthType {
  authorization = "auth",
  registration = "registr",
}

export type RegistrationContextType = {
  page: AuthType;
  setPage: React.Dispatch<React.SetStateAction<AuthType>>;
};

export const AuthTabs: TabsType[] = [
  { id: AuthType.authorization, label: "Авторизация" },
  { id: AuthType.registration, label: "Регистрация" },
];

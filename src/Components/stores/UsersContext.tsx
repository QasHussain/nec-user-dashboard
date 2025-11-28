import { createContext, useContext, useState, ReactNode } from "react";

export interface IUser {
  id: string;
  fullName: string;
  age: number;
  country: string;
  interests: string[];
}

interface UsersContextValue {
  users: IUser[];
  addUser: (user: Omit<IUser, "id">) => void;
}

const UsersContext = createContext<UsersContextValue | undefined>(undefined);

export const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [nextId, setNextId] = useState(1);

  const addUser: UsersContextValue["addUser"] = (userWithoutId) => {
    setUsers((prev) => {
      const newUser: IUser = {
        ...userWithoutId,
        id: String(nextId),
      };
      const updated = [...prev, newUser];
      console.log("All users (global):", updated);
      return updated;
    });

    setNextId((id) => id + 1);
  };

  return (
    <UsersContext.Provider value={{ users, addUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => {
  const ctx = useContext(UsersContext);
  if (!ctx) {
    throw new Error("useUsers must be used within a UsersProvider");
  }
  return ctx;
};

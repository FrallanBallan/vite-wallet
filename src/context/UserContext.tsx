import { createContext, ReactNode, useContext, useState } from "react";

// <> = in Typescript it defines generic types
// 1. Defining a User Object!
type User = {
  id: number;
  username: string;
  password: string;
};

//2. This interface defines the structure of the context value, which includes an array of User objext and a function
// - users: array of User Objects
// - addUser: funticon to add a new user
// - loginUser: funtction to authenticate
// - logoutUser: funtction to logout
// - loggedInUser: The logged in user or null if no one logged in
interface UserContextType {
  users: User[];
  addUser: (user: User) => void;
  loginUser: (username: string, password: string) => boolean;
  logoutUser: () => void;
  loggedInUser: User | null; //Storing the logged in user State!
}

// 3. Create the UserContext with initial state of undefined **
const UserContext = createContext<UserContextType | undefined>(undefined);

// 4. "Helper hook: Simplifies the use of userContext"
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within userProvider");
  }
  return context;
};

// 5. UserProvider component: wraps around parts of the app that need access to user-related data.
// this provider holds the "users" array, funtciton to manage users and the state for the "loggedinUser"
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  //State to hold list of users
  const [users, setUsers] = useState<User[]>(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  // State to hold the currently logged-in user
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  // 6. Function to add a new user
  // - takes a user object as input and adds it to the "users" array
  const addUser = (user: User) => {
    const newUsers = [...users, user];
    setUsers(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers));
  };

  // 7. Function to log in a user
  // Find a user in the users array bases on matching username and password
  // If found, sets that user as loggedInUser and returns true
  const loginUser = (username: string, password: string): boolean => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      console.log("Login successful!");
      setLoggedInUser(user);
      return true;
    }
    console.log("Login Failed");
    return false;
  };

  const logoutUser = () => {
    setLoggedInUser(null);
  };

  // 8. Return the context of the provider component
  // - the "value" prop provides access to the "users", "addUser", "loginUser"...
  return (
    <UserContext.Provider
      value={{ users, addUser, loginUser, logoutUser, loggedInUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

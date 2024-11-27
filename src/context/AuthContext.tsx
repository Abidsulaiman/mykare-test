import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface User {
  email: string;
  password: string;
  sessionToken: string | null;
  sessionExpiry: number | null;
}

export const AuthContext = createContext<{
  user: User | null;
  users: User[] | [];
  login: (email: string, password: string) => boolean;
  register: (userData: User) => void;
  logout: () => void;
}>({
  user: null,
  users: [],
  login: () => false,
  register: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[] | []>([]);

  useEffect(() => {
    const activeUser = localStorage.getItem('activeUser');
    const users = localStorage.getItem('users');

    if(users?.length){
      setUsers(JSON.parse(users));
    }
    if (activeUser) {
      setUser(JSON.parse(activeUser));
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    const storedUsers = localStorage.getItem('users');
    const users: User[] = storedUsers ? JSON.parse(storedUsers) : [];
    
    const matchedUser = users.find(u => u.email === email && u.password === password);
    
    if (matchedUser) {
      const sessionUser = {
        ...matchedUser,
        sessionToken: Math.random().toString(36).substring(2),
        sessionExpiry: Date.now() + 24 * 60 * 60 * 1000,
      };
      
      const updatedUsers = users.map(u => 
        u.email === email ? sessionUser : u
      );
      
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      localStorage.setItem('activeUser', JSON.stringify(sessionUser));
      setUser(sessionUser);
      return true;
    }
    return false;
  };

  const register = (userData: User): void => {
    const storedUsers = localStorage.getItem('users');
    const users: User[] = storedUsers ? JSON.parse(storedUsers) : [];
    
    if (users.some(u => u.email === userData.email)) {
      alert('User already exists');
      return;
    }
    
    const newUsers = [...users, userData];
    localStorage.setItem('users', JSON.stringify(newUsers));
    localStorage.setItem('activeUser', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = (): void => {
    localStorage.removeItem('activeUser');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, users, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// add session tracking

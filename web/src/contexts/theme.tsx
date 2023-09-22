import { createContext, useState } from 'react';

interface ThemeContextData {
  type: 'dark' | 'light';
  changeTheme: () => void;
}

interface ThemeContextProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeContextProps) {
  const [type, setType] = useState<'dark' | 'light'>('dark');

  const changeTheme = () => setType(type === 'dark' ? 'light' : 'dark');

  return <ThemeContext.Provider value={{ type, changeTheme }}>{children}</ThemeContext.Provider>;
}

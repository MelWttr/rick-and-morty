import {
    createContext, FC, ReactNode, useContext, useMemo, useState,
} from 'react';

interface AuthProviderProps {
    children: ReactNode
}

interface AuthContextType {
    login: string | null;
    signIn: (email: string, callback: () => void) => void;
    signOut: (callback: () => void) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [login, setLogin] = useState<string | null>(() => localStorage.getItem('login') || null);

    const signIn = (email: string, callback: () => void) => {
        setLogin(email);
        localStorage.setItem('login', email);
        callback();
    };
    const signOut = (callback: () => void) => {
        setLogin(null);
        localStorage.removeItem('login');
        callback();
    };

    const value: AuthContextType = useMemo(() => ({
        login,
        signIn,
        signOut,
    }), [login]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>

    );
};

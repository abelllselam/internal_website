"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { app, auth, provider } from "../firebase";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export type User = {
  displayName?: string;
  firstname?: string;
  middlename?: string;
  lastname?: string;
  email?: string;
  uid: string;
  photoURL?: string;
  phoneNumber: string;
  provider: "google" | "manual";
};

interface AuthContextProps {
  user: User | null;
  setUser: (user?: User) => void;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  error?: string;
  setError: (error?: string) => void;
  onLogin: (identifier: string, password: string) => Promise<void>;
  onSignUpwithEmail: (
    email: string,
    password: string,
    firstname: string,
    middlename: string,
    lastname: string,
    phone: string
  ) => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const BASE_URL =
    process.env.API_BASE_URL || "https://my-remit-app-1.onrender.com";
    const router = useRouter();

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);
        Cookies.remove("authToken");
        Cookies.remove("userData");
        setLoading(false);
        return;
      }

      try {
        const token = Cookies.get("authToken");
        const userData = Cookies.get("userData");

        if (token && userData) {
          const parsedUser = JSON.parse(userData);
          const userObj: User = {
            ...parsedUser,
            provider: parsedUser.provider ?? "google",
          };
          // Verify token with /auth/google
          await axios.post(
            `${BASE_URL}/auth/google`,
            { idToken: token },
            { headers: { "Content-Type": "application/json" }, timeout: 10000 }
          );
          setUser(userObj);
          setLoading(false);
          return;
        }

        // If no token, fetch from backend using Firebase ID token
        const firebaseIdToken = await firebaseUser.getIdToken(true);
        const response = await axios.post(
          `${BASE_URL}/auth/google`,
          { idToken: firebaseIdToken },
          { headers: { "Content-Type": "application/json" }, timeout: 10000 }
        );

        if (response.data?.token) {
          const backendToken = response.data.token;
          const userObj: User = {
            uid: firebaseUser.uid,
            email: firebaseUser.email ?? "",
            displayName: firebaseUser.displayName ?? "",
            phoneNumber: firebaseUser.phoneNumber ?? "",
            photoURL: firebaseUser.photoURL ?? "",
            firstname: firebaseUser.displayName?.split(" ")[0] ?? "",
            lastname:
              firebaseUser.displayName?.split(" ").slice(1).join(" ") ?? "",
            middlename: "",
            provider: "google",
          };

          Cookies.set("authToken", backendToken, { expires: 7 });
          Cookies.set("userData", JSON.stringify(userObj), { expires: 7 });
          setUser(userObj);
        }
      } catch (err) {
        console.error("Error syncing Firebase with backend:", err);
        await signOut(auth);
        Cookies.remove("authToken");
        Cookies.remove("userData");
        setUser(null);
        setError("Failed to sync authentication, please try again");
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const onLogin = async (identifier: string, password: string) => {
    try {
      setLoading(true);
      const isPhone = /^\+?\d{7,15}$/.test(identifier.trim());
      const payload = isPhone
        ? { phone: identifier.trim(), password: password.trim() }
        : { email: identifier.trim(), password: password.trim() };

      const response = await axios.post(`${BASE_URL}/login`, payload, {
        headers: { "Content-Type": "application/json" },
        timeout: 50000,
      });

      const { token, user } = response.data;
      if (!token || !user?.user_id) throw new Error("Invalid response");

      const userObj: User = {
        uid: user.user_id,
        email: user.email ?? "",
        displayName: `${user.first_name ?? ""} ${user.last_name ?? ""}`.trim(),
        phoneNumber: user.phone ?? "",
        photoURL: "",
        firstname: user.first_name ?? "",
        lastname: user.last_name ?? "",
        middlename: user.middle_name ?? "",
        provider: "manual",
      };
      Cookies.set("authToken", token, { expires: 7 });
      Cookies.set("userData", JSON.stringify(userObj), { expires: 7 });
      setUser(userObj);
    } catch (e) {
      console.error(e);
      setError("Unexpected Error Occurred, please try again");
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const firebaseIdToken = await result.user.getIdToken(true);
      const response = await axios.post(
        `${BASE_URL}/auth/google`,
        { idToken: firebaseIdToken },
        { headers: { "Content-Type": "application/json" }, timeout: 10000 }
      );

      if (response.data?.token) {
        const backendToken = response.data.token;
        const firebaseUser = result.user;
        const userObj: User = {
          uid: firebaseUser.uid,
          email: firebaseUser.email ?? "",
          displayName: firebaseUser.displayName ?? "",
          phoneNumber: firebaseUser.phoneNumber ?? "",
          photoURL: firebaseUser.photoURL ?? "",
          firstname: firebaseUser.displayName?.split(" ")[0] ?? "",
          lastname:
            firebaseUser.displayName?.split(" ").slice(1).join(" ") ?? "",
          middlename: "",
          provider: "google",
        };
        Cookies.set("authToken", backendToken, { expires: 7 });
        Cookies.set("userData", JSON.stringify(userObj), { expires: 7 });
        setUser(userObj);
      }
    } catch (error: any) {
      console.error("Google Sign-In error:", error);
      setError("Google sign-in failed, please try again");
    } finally {
      setLoading(false);
    }
  };

  const onSignUpwithEmail = async (
    email: string,
    password: string,
    firstname: string,
    middlename: string,
    lastname: string,
    phone: string
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${BASE_URL}/user-sync`,
        {
          email,
          password,
          first_name: firstname,
          middle_name: middlename,
          last_name: lastname,
          phone,
          role:"user"
        } 
      );
      const { token, user } = response.data;
      const userObj: User = {
        uid: user.user_id,
        email: user.email ?? "",
        displayName: `${user.first_name ?? ""} ${user.last_name ?? ""}`.trim(),
        phoneNumber: user.phone ?? "",
        photoURL: "",
        firstname: user.first_name ?? "",
        lastname: user.last_name ?? "",
        middlename: user.middle_name ?? "",
        provider: "manual",
      };
      Cookies.set("authToken", token, { expires: 7 });
      Cookies.set("userData", JSON.stringify(userObj), { expires: 7 });
      setUser(userObj);
      router.replace("/login")
    } catch (e) {
      console.error(e);
      setError("Signup failed, please try again");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      router.replace("/")
      Cookies.remove("authToken");
      Cookies.remove("userData");
    } catch (err) {
      console.error("Logout error:", err);
      setError("Logout failed, please try again");
    }
  };

  const handleSetError = (error?: string) => setError(error ?? "");
  const handleSetUser = (user?: User) => setUser(user ?? null);

  return (
    <AuthContext.Provider
      value={{
        logout,
        user,
        loading,
        signInWithGoogle,
        setError: handleSetError,
        onLogin,
        setUser: handleSetUser,
        onSignUpwithEmail,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

import {
  ErrorFn,
  NextOrObserver,
  User,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { AccountPayload } from "~/types/Account";
import { firebaseApp } from "../firebaseConfig";

const auth = getAuth(firebaseApp);

export const createUser = async ({ email, password }: AccountPayload) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);

  return response;
};

export const loginUser = async ({ email, password }: AccountPayload) => {
  const response = await signInWithEmailAndPassword(auth, email, password);

  return response;
};

export const logoutUser = async () => {
  await signOut(auth);
};

export const getCurrentUser = () => {
  return auth.currentUser;
};

export const observeLoginState = (
  onChange: NextOrObserver<User>,
  onError?: ErrorFn
) => {
  onAuthStateChanged(auth, onChange, onError);
};

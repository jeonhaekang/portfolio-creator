import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { AccountPayload } from "~/types/Account";
import { firebaseApp } from "../firebaseConfig";

const auth = getAuth(firebaseApp);

export const createUser = async ({ email, password }: AccountPayload) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);

  return response;
};

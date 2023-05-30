import { doc, getFirestore, setDoc } from "firebase/firestore";
import { Section } from "~/pages/create/Create.types";
import { getCurrentUser } from "../account";
import { firebaseApp } from "../firebaseConfig";

const db = getFirestore(firebaseApp);

export const createPortfolio = async (sections: Section[]) => {
  const { uid } = getCurrentUser();

  const response = await setDoc(doc(db, "portfolio", uid), {
    uid,
    sections
  });

  return response;
};

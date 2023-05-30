import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { PortfolioPayload, PortfolioSection } from "~/types/Portfolio";
import { getCurrentUser } from "../account";
import { firebaseApp } from "../firebaseConfig";

const db = getFirestore(firebaseApp);

export const createPortfolio = async (sections: PortfolioSection[]) => {
  const { uid } = getCurrentUser();

  const response = await setDoc(doc(db, "portfolio", uid), {
    uid,
    sections
  });

  return response;
};

export const getPortfolio = async (uid: string) => {
  const docRef = doc(db, "portfolio", uid);
  const docSnap = (await getDoc(docRef)).data();

  return docSnap as PortfolioPayload;
};

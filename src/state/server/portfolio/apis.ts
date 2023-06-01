import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { PortfolioForm } from "~/pages/create/Create.types";
import { getCurrentUser } from "../account";
import { firebaseApp } from "../firebaseConfig";

const db = getFirestore(firebaseApp);

export const createPortfolio = async (portfolio: PortfolioForm) => {
  const { uid } = getCurrentUser();

  const response = await setDoc(doc(db, "portfolio", uid), portfolio);

  return response;
};

export const getPortfolio = async (uid: string) => {
  const docRef = doc(db, "portfolio", uid);
  const docSnap = (await getDoc(docRef)).data();

  return docSnap as PortfolioForm;
};

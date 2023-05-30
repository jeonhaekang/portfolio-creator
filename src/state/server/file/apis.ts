import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { FilePayload } from "~/types/File";
import { getCurrentUser } from "../account";
import { firebaseApp } from "../firebaseConfig";

const storage = getStorage(
  firebaseApp,
  "gs://portfolio-creator-37e3a.appspot.com"
);

export const uploadFile = async ({ file, route }: FilePayload) => {
  const { name } = file;

  const _route = [route];

  const user = getCurrentUser();
  if (user) {
    _route.push(user.uid);
  }

  const now = new Date().getTime();
  _route.push(`${now}_${name}`);

  const fileRef = ref(storage, _route.join("/"));

  const response = await uploadBytes(fileRef, file);
  const downloadUrl = await getDownloadURL(response.ref);

  return downloadUrl;
};

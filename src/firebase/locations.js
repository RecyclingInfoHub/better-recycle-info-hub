import { collection, getFirestore } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import app from "gatsby-plugin-firebase-v9.0";

export const useLocations = () => {
  const locationRef = collection(getFirestore(app), "locations");
  return useCollectionData(locationRef, { idField: "id" });
};

import { collection, getFirestore } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { app } from "./client";

export const useLocations = () => {
  const locationRef = collection(getFirestore(app), "locations");
  return useCollectionData(locationRef, { idField: 'id' });
};

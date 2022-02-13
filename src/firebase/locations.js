import { collection, getFirestore } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import app from "gatsby-plugin-firebase-v9.0";

export const useLocations = () => {
  const locationRef = collection(getFirestore(app), "locations").withConverter({
    toFirestore: data => data,
    fromFirestore: snapshot => ({
      ...snapshot.data(),
      id: snapshot.id,
    }),
  });
  return useCollectionData(locationRef);
};

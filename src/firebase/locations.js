import { collection, getFirestore } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import app from "gatsby-plugin-firebase-v9.0";

const converter = {
  toFirestore: data => data,
  fromFirestore: snapshot => ({
    ...snapshot.data(),
    id: snapshot.id,
  }),
};

export const useLocations = () => {
  const locationRef = collection(getFirestore(app), "locations").withConverter(
    converter
  );
  return useCollectionData(locationRef);
};

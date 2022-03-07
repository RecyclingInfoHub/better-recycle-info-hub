import { collection, doc, getFirestore, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import app from "gatsby-plugin-firebase-v9.0";

const converter = {
  toFirestore: data => data,
  fromFirestore: snapshot => ({
    ...snapshot.data(),
    id: snapshot.id,
  }),
};

export const useLocations = (materialFilters) => {
  const locationRef = collection(getFirestore(app), "locations").withConverter(
    converter
  );

  if (materialFilters && materialFilters.length) {
    const materialRef = collection(getFirestore(app), "materials");
    const materialFilterRefs = materialFilters.map(material => doc(materialRef, material));
    const materialFiltersQuery = query(locationRef, where("accepts", "array-contains-any", materialFilterRefs));

    return useCollectionData(materialFiltersQuery);
  }

  return useCollectionData(locationRef);
};

/* eslint-disable no-unused-vars */
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  writeBatch
} from "firebase/firestore";
import app from "gatsby-plugin-firebase-v9.0";
// Temporary solution to use materials from json
import materials from "../../json/materials.json";
import locations from "../../json/locations.json";

// Get firestore db
const db = getFirestore(app);

/**
 * Get material reference array
 * @async
 * @returns {Object[]} array of material object with its firestore reference 
 */
// Drafted function for future used -27/02/2022 Darky
const getMaterialsRef = async () => {
  const materialRefList = [];
  const materialSnapShot = await getDocs(collection(db, "materials"));
  console.log(materialSnapShot);

  materialSnapShot.forEach(({ id }) => {
    let ref = doc(db, "materials", id);
    let refObject = { id, ref };
    materialRefList.push(refObject);
  });

  console.log(materialRefList);

  return materialRefList;
};

/**
 * Get Firestore material reference
 * @param {String} material - material name
 * @returns {Object} firestore material reference
 */
const getFirestoreMaterialReference = (material) => {
  return doc(db, "materials", material);
}

/**
 * Write "json/location.json" batch to firestore
 * @returns {Promise}
 */
const writeBatchFromJSON = () => {
  // Get a new write batch
  const batch = writeBatch(db);

  // Create new locations at collection "locations"
  locations.map((location) => {
    /**
     * Get document reference with auto generated id
     * @see https://cloud.google.com/firestore/docs/manage-data/add-data#add_a_document
     */
    let newLocationRef = doc(collection(db, 'locations'));
    let acceptsRef = [];
    location.accepts.forEach((material) => {
      acceptsRef.push(getFirestoreMaterialReference(material));
    });

    let updatedLocationWithRef = {
      ...location,
      accepts: acceptsRef
    };

    batch.set(newLocationRef, updatedLocationWithRef);
  });

  // Commit the batch
  return batch.commit();
}

export {
  writeBatchFromJSON,
}

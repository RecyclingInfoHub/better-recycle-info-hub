import { writeBatch, doc, getFirestore } from "firebase/firestore";
import app from "gatsby-plugin-firebase-v9.0";
import meterials from '../../json/materials.json';

// Get firestore db
const db = getFirestore(app);

/**
 * Write "json/materials.json" batch to firestore
 * @returns {Promise}
 */
const writeBatchFromJSON = () => {
  // Get a new write batch
  const batch = writeBatch(db);

  // Set the value of 'materials'
  meterials.map((material) => {
    let ref = doc(db, "materials", material);
    batch.set(ref, {});
  });

  // Commit the batch
  return batch.commit();
}

export {
  writeBatchFromJSON,
}

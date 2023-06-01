import firebase_app from "../config";
import { getFirestore, doc, updateDoc, deleteField, deleteDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)

export default async function deleteData(collection, id) {
    await deleteDoc(doc(db, collection, id));
    }
  
//     if (cityDoc.exists()) {
//         const data = cityDoc.data();
        
//         if (data[field]) {
//             delete data[field];
//             await updateDoc(docRef, data);
//             console.log(`${field} deleted successfully.`);
//         } else {
//             console.log(`${field} does not exist in the document.`);
//         }
//     } else {
//         console.log(`Document with ID ${id} does not exist.`);
//     }
// }
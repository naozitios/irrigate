import firebase_app from "../config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)
export default async function addData(collection, id, data) {
    let result = null;
    let error = null;
//update the data
    try {
        result = await setDoc(doc(db, collection, id), data, {
            merge: true,
        });
    } catch (e) {
        error = e;
        console.log(error)
    }

    return { result, error };
}
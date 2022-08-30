import React, { useState } from "react";
import { db } from "../firebase/config";

export const useFiresotre = (collection, conditon) => {
  const [documents, setDocument] = useState([]);
  React.useEffect(() => {
    let collectionRef = db.collection(collection).orderBy("createAt");

    if (conditon) {
      if (!conditon.compareValue || !conditon.compareValue.length) {
        return;
      }

      collectionRef = collectionRef.where(
        conditon.fieldName,
        conditon.operator,
        conditon.compareValue
      );
    }

    const unsubscribe = collectionRef.onSnapshot((snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setDocument(documents);
    });
    return unsubscribe;
  }, [collection, conditon]);

  return documents;
};
export default useFiresotre;

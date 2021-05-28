import { firebaseDB } from "../Configs/FirebaseConnection";

const response = firebaseDB.collection("FormAnswers");

async function addFormAnswers(data) {
  try {
    const dataDB = await response.add(data);
    return dataDB.id;
  } catch (err) {
    console.log(err);
  }
}

async function getAllFormAnswers() {
  try {
    const data = await response.get();
    const allData = [];
    data.docs.forEach((item) => {
      allData.push({ ...item.data(), id: item.id });
    });
    return allData;
  } catch (err) {
    console.log(err);
  }
}

export { addFormAnswers, getAllFormAnswers };

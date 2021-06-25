import { firebaseDB } from "../Configs/FirebaseConnection";

const response = firebaseDB.collection("Assessment");

async function addResearches(data) {
  try {
    const dataDB = await response.add(data);

    return dataDB.id;
  } catch (err) {
    console.log(err);
  }
}

async function getAllResearches() {
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

async function editResearches(data, id) {
  try {
    const dataDBExists = await response.doc(id).get();
    if (!dataDBExists) {
      return [];
    } else {
      await response.doc(id).update(data);

      return true;
    }
  } catch (err) {
    console.log(err);
  }
}

async function deleteResearches(id) {
  try {
    await response.doc(id).delete();

    return true;
  } catch (err) {
    console.log(err);
  }
}

export { addResearches, getAllResearches, editResearches, deleteResearches };

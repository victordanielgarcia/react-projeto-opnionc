import { firebaseDB, firebaseCreate } from "../Configs/FirebaseConnection";

const response = firebaseDB.collection("usuarios");

async function searchCurrentUser(id) {
  try {
    const data = await response.doc(id).get();
    return { ...data.data(), id: id };
  } catch (err) {
    console.log(err);
  }
}

async function addUser(data) {
  try {
    const responseUserAuth = await firebaseCreate
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);
    delete data.password;
    const id = responseUserAuth.user.uid;
    await response.doc(responseUserAuth.user.uid).set(data);
    firebaseCreate.auth().signOut();
    return id;
  } catch (err) {
    console.log(err);
  }
}

async function getAllUsers(id) {
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

async function editUser(data, id) {
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

export { searchCurrentUser, addUser, getAllUsers, editUser };

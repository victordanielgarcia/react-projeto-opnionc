import firebaseConfig from "../Configs/FirebaseConnection";
import { toast } from "react-toastify";

async function signIn(email, password) {
  try {
    const data = await firebaseConfig
      .auth()
      .signInWithEmailAndPassword(email, password);
    return data;
  } catch (err) {
    console.log(err);
    toast.error("Não foi possível ler os dados.");
  }
}
export { signIn };

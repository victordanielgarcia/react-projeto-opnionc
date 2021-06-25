import { toast } from "react-toastify";
import firebaseConfig from "../Configs/FirebaseConnection";

async function signIn(email, password) {
  try {
    const data = await firebaseConfig
      .auth()
      .signInWithEmailAndPassword(email, password);
    toast.success("Bem vindo ao Sistema OpinionC");
    return data;
  } catch (err) {
    toast.error("Não foi possível ler os dados.");
  }
}
export { signIn };

import { getAuth, onAuthStateChanged } from "./js/login";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(user.uid);
  } else {
    console.log("нет такого пользователя");
  }
});

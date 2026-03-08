import { USERS } from "../../common/consts/api";

export default (firebase, uid, wantsTo) => {
  firebase.database()
    .ref(`${USERS}/${uid}`)
    .update({ wantsTo });
};


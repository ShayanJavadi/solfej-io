import { USERS } from "../../common/consts/api";

export default (firebase, uid, isA) => {
  firebase.database()
    .ref(`${USERS}/${uid}`)
    .update({ isA });
};


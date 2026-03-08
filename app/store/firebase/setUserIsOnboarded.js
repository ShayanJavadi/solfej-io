import { USERS } from "../../common/consts/api";

export default (firebase, uid, isOnboarded) => {
  firebase.database()
    .ref(`${USERS}/${uid}`)
    .update({ isOnboarded });
};


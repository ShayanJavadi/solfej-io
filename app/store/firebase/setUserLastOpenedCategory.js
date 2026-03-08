import { USERS } from "../../common/consts/api";

export default (firebase, uid, lastOpenedCategory) => {
  firebase.database()
    .ref(`${USERS}/${uid}`)
    .update({ lastOpenedCategory: lastOpenedCategory });
};


import { USERS } from "../../common/consts/api";

export default (firebase, uid, slidesDone) => {
  firebase.database()
    .ref(`${USERS}/${uid}`)
    .update({ slidesDone });
};


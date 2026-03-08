import { USERS } from "../../common/consts/api";

export default (firebase, uid, level) => {
  firebase.database()
    .ref(`${USERS}/${uid}`)
    .update({ musicianLevel: level });
};


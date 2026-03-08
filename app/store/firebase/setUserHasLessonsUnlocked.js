import { USERS } from "../../common/consts/api";

export default (firebase, uid, hasLessonsUnlocked) => {
  firebase.database()
    .ref(`${USERS}/${uid}`)
    .update({ hasLessonsUnlocked });
};


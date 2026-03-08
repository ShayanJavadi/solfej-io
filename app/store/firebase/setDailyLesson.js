import { DAILY_LESSON } from "../../common/consts/api";

export default (firebase, uid, dailyLesson) => {
  firebase.database()
    .ref(`${DAILY_LESSON}/${uid}`)
    .set(dailyLesson);
};


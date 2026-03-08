import { SHARES } from "../../common/consts/api";

export default (firebase, uid, shareData = {}) => {
  const analytics = firebase.analytics();

  firebase.database()
    .ref(`${SHARES}/${uid}/`)
    .push({ ...shareData, sharedAt: firebase.database.ServerValue.TIMESTAMP });
};


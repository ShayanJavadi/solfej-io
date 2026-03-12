
import { capitalize, throttle, debounce } from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import Switch from "react-switch";
import Button from "../../common/components/Button/Button";
import Screen from "../../common/components/Screen/Screen";
import SectionHeader from "../../common/components/SectionHeader/SectionHeader";
import { SCREEN_VIEW, logSignOut, logLessonsUnlockToggled } from "../../common/consts/analytics";
import { blueGray, green } from "../../common/consts/colors";
import { PRIVACY_POLICY, TOS } from "../../common/consts/outboundLinks";
import { ACCOUNT_SCREEN } from "../../common/consts/routes";
import useSetNotchColor from "../../common/hooks/useSetNotchColor";
import config from "../../config";
import "./AccountScreen.scss";
import setUserHasLessonsUnlocked from "../../store/firebase/setUserHasLessonsUnlocked";

import { useRef } from "react";
import Container from "../../common/components/Container";

export default function AccountScreen(props) {
  const { user = {} } = props;
  const { hasLessonsUnlocked } = user;
  const { displayName, photoURL, uid } = useSelector(state => state.firebase.auth);
  const firebase = useFirebase();

  const [unlockAllLessonsToggled, setUnlockAllLessonsToggled] = useState(hasLessonsUnlocked);
  const delayedQuery = useRef(debounce(checked => setUserHasLessonsUnlocked(firebase, uid, checked), 500)).current;

  const onSwitchChange = checked => {
    logLessonsUnlockToggled(checked);
    setUnlockAllLessonsToggled(checked);
    delayedQuery(checked);
  };

  useSetNotchColor(blueGray);
  return (
    <Screen className="account-screen" hasGrayBackground >
      <div className="avatar-container">
        <img src={photoURL} alt="" className="avatar" />
      </div>
      <div className="name-container">
        <h3>{capitalize(displayName)}</h3>
      </div>
      <SectionHeader>
        Finish Lessons In Any Order
      </SectionHeader>
      <Container>
        <Switch
          onColor={green}
          className="switch"
          onChange={onSwitchChange}
          checked={unlockAllLessonsToggled}
        />
      </Container>
      <div className="account-buttons-container">
        <Button
          text="Sign out"
          onClick={() => {
            logSignOut();
            firebase.logout();
          }}
        />
      </div>
      <div className="tos-container">
        <div>
          <a href={TOS}>Terms of Use</a>
          <span> and </span>
          <a href={PRIVACY_POLICY}> Privacy Policy</a>
        </div>
        <div>
          <p>Version: {config.version}</p>
        </div>
      </div>
   
    </Screen>
  );
}

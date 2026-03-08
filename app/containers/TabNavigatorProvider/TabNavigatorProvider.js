import classNames from "classnames";
import React from "react";
import { MdFeedback, MdHome, MdPerson } from "react-icons/md";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ACCOUNT_SCREEN, HOME_SCREEN } from "../../common/consts/routes";
import "./TabNavigatorProvider.scss";
import BottomFloatingMenu from "../../common/components/BottomFloatingMenu/BottomFloatingMenu";
export default function TabNavigatorProvider(props) {
  const { pathname } = useSelector(({ router }) => ({
    pathname: router.location.pathname
  }));
  const history = useHistory();
  
  const PATHS_WITH_TAB_NAV = [HOME_SCREEN, ACCOUNT_SCREEN];
  const shouldShowTabNav = PATHS_WITH_TAB_NAV.includes(pathname);
  return (
    shouldShowTabNav ?
      <BottomFloatingMenu className="tab-navigator">
        <div
          onClick={() => history.push(HOME_SCREEN)}
          className={classNames("icon-container", pathname === HOME_SCREEN && "active")}
        >
          <MdHome size={30} className="icon" />
        </div>
        <div
          onClick={() => history.push(HOME_SCREEN)}
          className={classNames("icon-container", "feedback")}
        >
          <a href="https://solfej.canny.io/solfe-exclusive-beta/create">
            <MdFeedback size={30} className="icon" />
            <p>Feedback</p>
          </a>
        </div>
        <div
          onClick={() => history.push(ACCOUNT_SCREEN)}
          className={classNames("icon-container", pathname === ACCOUNT_SCREEN && "active")}
        >
          <MdPerson size={30} className="icon" />
        </div>
      </BottomFloatingMenu> :
      null
  );
}

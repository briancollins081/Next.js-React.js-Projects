import { Fragment, useContext } from "react";
import NotificationContext from "../../store/NotificationContext";
import Notification from "../ui/notification";

import MainHeader from "./main-header";

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
}

export default Layout;

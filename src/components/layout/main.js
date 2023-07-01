import { Fragment, useContext } from "react";
import Header from "./header";
import NotificationContext from "../../store/notification-context";
import Notification from "../ui/notification";

export default function MainLayout(props) {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;
  return (
    <Fragment>
      <Header />
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

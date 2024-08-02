import React from "react";
import { useRecoilValue } from "recoil";
import {
  jobAtom,
  messageAtom,
  networkAtom,
  notificationAtom,
} from "./Store/atoms";

const App = () => {
  const newtworkNotificationsCount = useRecoilValue(networkAtom);
  const finalNetworkNotificationVlaue =
    newtworkNotificationsCount >= 100 ? "99+" : newtworkNotificationsCount;

  const jobNotificationCount = useRecoilValue(jobAtom);
  const finalJobNotifcationValue =
    jobNotificationCount == 0 ? "" : jobNotificationCount;

  const messageNotificationCount = useRecoilValue(messageAtom);
  const finalMessageNotificationValue =
    messageNotificationCount == 0 ? "" : messageNotificationCount;

  const notificationCount = useRecoilValue(notificationAtom);
  const finalNotificationValue =
    notificationCount >= 100 ? "99+" : notificationCount;
  return (
    <div style={{ textAlign: "center" }}>
      <button>Home</button>
      <button>My Networks ({finalNetworkNotificationVlaue})</button>
      <button>Jobs ({finalJobNotifcationValue})</button>
      <button>Messages ({finalMessageNotificationValue})</button>
      <button>Notifications ({finalNotificationValue})</button>
      <button>Me</button>
    </div>
  );
};

export default App;

import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 102,
});

export const jobAtom = atom({
  key: "jobAtom",
  default: 0,
});

export const messageAtom = atom({
  key: "messageAtom",
  default: 0,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 12,
});

export const totalNotificationCount = selector({
  key: "totalNotificationCount",
  get: ({ get }) => {
    const networkNotification = get(networkAtom);
    const jobNotification = get(jobAtom);
    const messageNotification = get(messageAtom);
    const notification = get(notificationAtom);

    return (
      networkNotification + jobNotification + messageNotification + notification
    );
  },
});

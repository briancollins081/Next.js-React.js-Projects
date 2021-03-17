import { createContext, useState } from "react";

const NotificationContext = createContext({
  notification: null, //{title, message, status}
  showNotification: (notificationData) => {},
  hideNotification: () => {},
});

export default NotificationContext;

export const NotificationContextProvider = ({ children }) => {
  const [activeNotification, setActiveNotification] = useState();

  const handleShowNotification = (notificationData) => {
    setActiveNotification(notificationData);
  };
  const handleHideNotification = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    showNotification: handleShowNotification,
    hideNotification: handleHideNotification,
  };
  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
};

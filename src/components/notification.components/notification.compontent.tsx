import { useState } from 'react';
import { NOTIFICATIONS_DATA } from '../../constants/notifications.constants';
import { NotificationBell } from './notification-bell.component';
import { NotificationPopup } from './notification-popup.component';

export const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(NOTIFICATIONS_DATA);

  const handleNotificationClick = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, unread: false } : notification
    ));
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="flex min-h-screen w-full items-center justify-end bg-[#E6EFFA] py-20">
      <div className="relative">
        {isOpen && (
          <NotificationPopup 
            notifications={notifications} 
            onNotificationClick={handleNotificationClick} 
          />
        )}
        <NotificationBell 
          unreadCount={unreadCount} 
          onClick={() => setIsOpen(!isOpen)} 
        />
      </div>
    </div>
  );
};

export interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  unread: boolean;
}

export interface NotificationBellProps {
  unreadCount: number;
  onClick: () => void;
}

export interface NotificationPopupProps {
  notifications: Notification[];
  onNotificationClick: (id: number) => void;
} 
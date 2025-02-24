import { Notification } from '../types/notification.types';

export const NOTIFICATIONS_DATA: Notification[] = [
  {
    id: 1,
    title: 'New Message',
    message: 'You have a new message from Sarah',
    time: '5 minutes ago',
    unread: true
  },
  {
    id: 2,
    title: 'Email Update',
    message: 'Weekly newsletter is here',
    time: '1 hour ago',
    unread: false
  },
  {
    id: 3,
    title: 'System Update',
    message: 'Your account settings were updated',
    time: '2 hours ago',
    unread: true
  }
];

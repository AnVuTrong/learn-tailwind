import { NotificationPopupProps } from '../../types/notification.types';

export const NotificationPopup = ({ notifications, onNotificationClick }: NotificationPopupProps) => {
  return (
    <div className="absolute bottom-full mb-3 right-0 w-80 rounded-lg bg-white shadow-xl">
      <div className="border-b p-4">
        <h2 className="text-lg font-semibold">Notifications</h2>
      </div>
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
        {notifications.map((notification) => (
          <div 
            key={notification.id}
            onClick={() => onNotificationClick(notification.id)}
            className={`flex gap-4 border-b p-4 hover:bg-gray-50 cursor-pointer ${
              notification.unread ? 'bg-blue-50' : ''
            }`}
          >
            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-blue-100 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{notification.title}</h3>
              <p className="text-sm text-gray-600">{notification.message}</p>
              <span className="mt-1 text-xs text-gray-500">{notification.time}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 text-center">
        <button className="text-sm text-blue-600 hover:text-blue-800">
          View all notifications
        </button>
      </div>
    </div>
  );
}; 
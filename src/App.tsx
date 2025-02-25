import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { UserProfile } from './components/user-profile.components/user-profile.component';
import { Navigation } from './navigation/navigation.component';
import { Home } from './components/home.components/home.component';
import { NotFound } from './components/not-found.components/not-found.component';
import { SearchBox } from './components/search-box.components/search-box.component';
import { CollectionList } from './components/collection.components/collection-list.component';
import { ReviewForm } from './components/review-form.components/review-form.component';
import { UserList } from './components/user-list.components/user-list.component';
import { NotificationBell } from './components/notification.components/notification-bell.component';
import { NotificationPopup } from './components/notification.components/notification-popup.component';
import { NOTIFICATIONS_DATA } from './constants/notifications.constants';
import { Subscription } from './components/subscription.components/subscription.component';
import { JobsList } from './components/job-card.components/jobs-list.component';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(NOTIFICATIONS_DATA);

  const handleNotificationClick = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, unread: false } : notification
    ));
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          {/* This is for remote git commit test */}
          <Route index element={<Home />} />
          <Route path='one-user-card' element={<UserProfile />} />
          <Route path='two-search-box' element={<SearchBox />} />
          <Route path='three-collection-list' element={<CollectionList />} />
          <Route path='four-review-form' element={<ReviewForm />} />
          <Route path='five-user-list' element={<UserList />} />
          <Route path='seven-subscription' element={<Subscription />} />
          <Route path='eight-jobs-list' element={<JobsList />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>

      <div className="fixed bottom-8 right-8 z-50">
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
    </>
  );
}

export default App;

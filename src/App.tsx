import { Routes, Route } from 'react-router-dom';
import { UserProfile } from './components/user-profile.components/user-profile.component';
import { Navigation } from './navigation/navigation.component';
import { Home } from './components/home.components/home.component';
import { NotFound } from './components/not-found.components/not-found.component';
import { SearchBox } from './components/search-box.components/search-box.component';
import { CollectionList } from './components/collection.components/collection-list.component';
import { ReviewForm } from './components/review-form.components/review-form.component';
import { UserList } from './components/user-list.components/user-list.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        {/* This is for remote git commit test */}
        <Route index element={<Home />} />
        <Route path='one-user-card' element={<UserProfile />} />
        <Route path='two-search-box' element={<SearchBox />} />
        <Route path='three-collection-list' element={<CollectionList />} />
        <Route path='four-review-form' element={<ReviewForm />} />
        <Route path='five-user-list' element={<UserList />} />
        {/* <Route path='six-notification' element={<Notification />} />
        <Route path='seven-subscription' element={<Subscription />} /> */}

        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import { UserProfile } from './components/user-profile.component';
import { Navigation } from './navigation/navigation.component';
import { Home } from './components/home.component';
import { NotFound } from './components/not-found.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='one-user-card' element={<UserProfile />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

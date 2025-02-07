import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/shared/Header';
import { ROUTES } from './constants/routes';
import SignUp from './pages/SignUp';
import StoryBook from './pages/StoryBook';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<div>Home</div>} />
        <Route path={ROUTES.STORY_BOOK} element={<StoryBook />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

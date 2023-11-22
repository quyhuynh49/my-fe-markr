import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Registration from "./pages/Registration";
import MultiStepProvider from "./pages/Registration/context/MultiStepProvider";
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/home/registration-database/new-registration' element={
            <MultiStepProvider>
              <Registration />
            </MultiStepProvider>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
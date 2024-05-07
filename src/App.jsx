import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import { refreshUser } from "./redux/auth/operations";
import { HomePage } from './pages/HomePage/HomePage';
import { PrivateRoute } from './components/PrivateRoute.jsx';
import RestrictedRoute from './components/RestrictedRoute';
import Layout from './components/Layout';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';


function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Toaster position="top-center" reverseOrder={true} />
        {isRefreshing ? (
          <div>Loading...</div>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute>
                  <RegistrationPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute>
                  <LoginPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        )}
      </Layout>
    </>
  );
}

export default App;
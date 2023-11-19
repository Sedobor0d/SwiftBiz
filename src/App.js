import { Route, Routes } from "react-router-dom";

import HomePage from "./components/pages/home/HomePage";
import FormsPage from "./components/pages/forms/FormsPage";
import { AuthProvider } from "./components/hoc/AuthProvider";
import { RequireAuth } from "./components/hoc/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/*" element={
          <RequireAuth>
            <HomePage path='/' />
          </RequireAuth>
        } />
        <Route path="login" element={<FormsPage />} />
        <Route path="register" element={<FormsPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;

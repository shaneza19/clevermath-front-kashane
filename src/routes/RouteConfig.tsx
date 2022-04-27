import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Test from '../pages/Test'

function RouteConfig() {
  return (
    <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Test />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
    </Routes>
  );
}

export default RouteConfig;

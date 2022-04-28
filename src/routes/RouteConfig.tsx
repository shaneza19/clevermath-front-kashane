import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Student from '../pages/Student'

function RouteConfig() {
  return (
    <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Student />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
    </Routes>
  );
}

export default RouteConfig;

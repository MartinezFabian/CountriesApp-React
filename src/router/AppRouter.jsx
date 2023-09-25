import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../countries/pages/HomePage';
import { Country } from '../countries/pages/Country';
import { NotFoundPage } from '../countries/pages/NotFoundPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>} />
      <Route path="/country/:countryId" element={<Country></Country>} />
      <Route path="/404" element={<NotFoundPage></NotFoundPage>} />
      <Route path="/*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

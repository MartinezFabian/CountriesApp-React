import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../countries/pages/HomePage';
import { CountryPage } from '../countries/pages/CountryPage';
import { NotFoundPage } from '../countries/pages/NotFoundPage';
import { SearchPage } from '../countries/pages/SearchPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>} />
      <Route path="/search" element={<SearchPage></SearchPage>} />
      <Route path="/country/:countryId" element={<CountryPage></CountryPage>} />
      <Route path="/404" element={<NotFoundPage></NotFoundPage>} />
      <Route path="/*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

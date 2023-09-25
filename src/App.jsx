import { AppRouter } from './router/AppRouter';
import { Navbar } from './ui/components/Navbar';

export const App = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <AppRouter></AppRouter>
    </>
  );
};

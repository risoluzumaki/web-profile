import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="grow pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

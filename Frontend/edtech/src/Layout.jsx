import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <h1>Welcome to the EdTech Platform</h1>
      <Outlet /> {/* Renders child routes */}
    </div>
  );
}

export default Layout;

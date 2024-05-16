import { Outlet } from 'react-router-dom';
import DashboardNav from "./DashboardNav/DashboardNav";

const Dashboard = ({ isAuthenticated }) => {
  return (
    <>
      <DashboardNav isAuthenticated={isAuthenticated} />
      <Outlet />
    </>
  );
};

export default Dashboard;

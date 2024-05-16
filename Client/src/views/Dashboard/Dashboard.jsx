import { Outlet } from 'react-router-dom';
import DashboardNav from "./DashboardNav/DashboardNav";

const Dashboard = ({ isAuthenticated }) => {
  console.log(isAuthenticated)
  return (
    <>
      <DashboardNav isAuthenticated={isAuthenticated} />
      <Outlet />
    </>
  );
};

export default Dashboard;

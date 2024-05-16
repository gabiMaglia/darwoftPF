import { Outlet } from 'react-router-dom';
import DashboardNav from "./DashboardNav/DashboardNav";

const Dashboard = ({ isAuthenticated }) => {
  // console.log(isAuthenticated.role)
  return (
    <>
      <DashboardNav isAuthenticated={isAuthenticated.role} />
      <Outlet />
    </>
  );
};

export default Dashboard;

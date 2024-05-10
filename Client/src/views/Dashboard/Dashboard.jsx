import {Outlet} from 'react-router-dom'
import DashboardNav from "./DashboardNav/DashboardNav";


const Dashboard = () => {
  return (
    <>
      <DashboardNav />
      <Outlet />
    </>
  );
};

export default Dashboard;

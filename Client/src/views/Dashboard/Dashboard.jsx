import {Outlet} from 'react-router-dom'
import DashboardNav from "./DashboardNav/DashboardNav";


const Dashboard = ({isAuthenticaded}) => {
  return (
    <>
      <DashboardNav isAuthenticaded={isAuthenticaded} />
      <Outlet />
    </>
  );
};

export default Dashboard;

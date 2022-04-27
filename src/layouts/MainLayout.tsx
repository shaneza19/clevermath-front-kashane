import { Outlet } from 'react-router-dom';
import { useContext } from "react";
import classes from "./MainLayout.module.css";
import Sidebar from './Sidebar';
import { SideBarContext } from '../contexts/SideBarContext';

function MainLayout() {
  const { isExpanded } = useContext(SideBarContext);

  return (
    <>
      <Sidebar />
      <div className={isExpanded ? classes.SideBar : classes.SideBarCollapsed}>
      <Outlet />
      </div>
    </>
  );
}

export default MainLayout;

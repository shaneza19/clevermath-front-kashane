import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Sidebar.module.css";
import {
  RiMenuLine,
  RiLayoutMasonryLine,
  RiUserFill,
  RiFile3Line,
  RiQuestionLine,
  RiDownload2Fill,
} from "react-icons/ri";
import { IoIosBook } from "react-icons/io";
import { GoSignOut } from "react-icons/go";

import { SideBarContext } from '../contexts/SideBarContext';

function Sidebar() {

  const { isExpanded, setIsExpanded } = useContext(SideBarContext);

  const handleToggler = () => {
    if (isExpanded) {
      setIsExpanded(false);
      localStorage.setItem("sidebar-collapsed", true.toString());
      return;
    }
    setIsExpanded(true);
    localStorage.removeItem("sidebar-collapsed");
  };

  return (
    <>
      <div className={isExpanded ? classes.SideBar : classes.SideBarCollapsed}>
        <br />
        <RiMenuLine className={classes.SideBarIcon} onClick={handleToggler} />
        <div className={classes.SideBarContent}>
          <h1>Clever Math</h1>
          <p className={classes.email}>country@gmail.com</p>
          <div className={classes.alignItems}>
            <div className={classes.alignTextItem}>
              <div className={classes.alignContent}>
                <RiLayoutMasonryLine className={classes.SideBarLogo} />
                <div>
                  <p>ภาพรวม</p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className={classes.alignItems}>
            <div className={classes.alignTextItem}>
              <div className={classes.alignContent}>
                <RiUserFill className={classes.SideBarLogo} />
                <div>
                  <p>นักเรียน</p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className={classes.alignItems}>
            <div className={classes.alignTextItem}>
              <div className={classes.alignContent}>
                <IoIosBook className={classes.SideBarLogo} />
                <div>
                  <p>การบ้าน</p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className={classes.alignItems}>
            <div className={classes.alignTextItem}>
              <div className={classes.alignContent}>
                <RiFile3Line className={classes.SideBarLogo} />
                <div>
                  <p>คะแนนรวม</p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr />
          <div className={classes.alignItems}>
            <div className={classes.alignTextItem}>
              <div className={classes.alignContent}>
                <RiQuestionLine className={classes.SideBarLogo} />
                <div>
                  <p>วิธีใช้งาน</p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className={classes.alignItems}>
            <div className={classes.alignTextItem}>
              <div className={classes.alignContent}>
                <RiDownload2Fill className={classes.SideBarLogo} />
                <div>
                  <p>ดาวโหลดเกม</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <br />
          <div className={classes.alignItems}>
            <div className={classes.alignTextItem}>
              <div className={classes.alignContent}>
                <GoSignOut className={classes.SideBarLogo} />
                <div>
                  <p>ออกจากระบบ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Sidebar;

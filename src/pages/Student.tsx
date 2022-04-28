import classes from "./Student.module.css";
import { Row, Col } from "antd";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiEqualizerLine } from "react-icons/ri";

function Test() {
  return (
    <>
      <header className={classes.header}>
        <p>รายชื่อนักเรียน</p>
        <button className={classes.headerButton} type="submit">
          ป.6/6
          <IoMdArrowDropdown className={classes.Icon} />
        </button>
      </header>

      <div className={classes.body}>
        <br />
        <div className={classes.topRowContainer}>
          <h1>คะแนนรวมในภาคการศึกษา</h1>
          <button className={classes.bodyButton} type="submit">
            แก้ไขสัดส่วนคะแนน
            <RiEqualizerLine className={classes.bodyIcon} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Test;

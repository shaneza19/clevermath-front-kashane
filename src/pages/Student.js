import React, { useState } from "react";
import classes from "./Student.module.css";

import { IoMdArrowDropdown } from "react-icons/io";
import { RiEqualizerLine } from "react-icons/ri";

import StudentTable from "../components/tables/StudentTable";

import { Col, Row, Modal } from "antd";

function StudentPage() {
  //AntD's modal ปรับสัดส่วนคะแนน
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //AntD's modal การคิดคะแแนนของบทเรียนที่ #
  const [isModalVisible2, setIsModalVisible2] = useState(false);

  const showModal2 = () => {
    setIsModalVisible2(true);
    setIsModalVisible(false);
  };

  const handleOk2 = () => {
    setIsModalVisible2(false);
    setIsModalVisible(true);
  };

  const handleCancel2 = () => {
    setIsModalVisible2(false);
    setIsModalVisible(true);
  };
  return (
    <>
      <header className={classes.header}>
        <p>รายชื่อนักเรียน</p>
        <button className={classes.headerButton}>
          ป.6/6
          <IoMdArrowDropdown className={classes.Icon} />
        </button>
      </header>

      <div className={classes.body}>
        <br />
        <div className={classes.topRowContainer}>
          <h1>คะแนนรวมในภาคการศึกษา</h1>
          <button className={classes.bodyButton} onClick={showModal}>
            แก้ไขสัดส่วนคะแนน
            <RiEqualizerLine className={classes.bodyIcon} />
          </button>
          <Modal
            className="modalStyle"
            title="ปรับสัดส่วนคะแนน"
            maskStyle={{ backgroundColor: "rgba(200, 200, 200, 0.50)" }}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <span className={classes.modalFooter}>
                กรุณาปรับสัดส่วนให้ครบ 100% (ขาดอีก 10%)
              </span>,
              <button
                onClick={handleCancel}
                className={classes.modalCancelButton}
              >
                ยกเลิก
              </button>,
              <button onClick={handleOk} className={classes.modalSubmitButton}>
                บันทึก
              </button>,
            ]}
          >
            <div className={classes.modalContainer}>
              <Row>
                <Col span={9} offset={3}>
                  <span className={classes.modalHeader}>บทเรียน</span>
                </Col>
                <Col span={12}>
                  <span className={classes.modalHeader}>สัดส่วนโดยรวม</span>
                </Col>
                <Col span={24}>
                  <hr />
                </Col>

                <Col span={9} offset={3}>
                  <p>บทเรียนที่ 1</p>
                </Col>
                <Col span={4} offset={2}>
                  <button className={classes.modalButton}>10%</button>
                </Col>
                <Col span={4} offset={2}>
                  <RiEqualizerLine
                    className={classes.Icon1}
                    onClick={showModal2}
                  />
                </Col>
                <Col span={24}>
                  <hr />
                </Col>

                <Col span={9} offset={3}>
                  <p>บทเรียนที่ 2</p>
                </Col>
                <Col span={4} offset={2}>
                  <button className={classes.modalButton}>20%</button>
                </Col>
                <Col span={4} offset={2}>
                  <RiEqualizerLine
                    className={classes.Icon1}
                    onClick={showModal2}
                  />
                </Col>
                <Col span={24}>
                  <hr />
                </Col>

                <Col span={9} offset={3}>
                  <p>บทเรียนที่ 3</p>
                </Col>
                <Col span={4} offset={2}>
                  <button className={classes.modalButton}>10%</button>
                </Col>
                <Col span={4} offset={2}>
                  <RiEqualizerLine
                    className={classes.Icon1}
                    onClick={showModal2}
                  />
                </Col>
                <Col span={24}>
                  <hr />
                </Col>

                <Col span={9} offset={3}>
                  <p>บทเรียนที่ 4</p>
                </Col>
                <Col span={4} offset={2}>
                  <button className={classes.modalButton}>10%</button>
                </Col>
                <Col span={4} offset={2}>
                  <RiEqualizerLine
                    className={classes.Icon1}
                    onClick={showModal2}
                  />
                </Col>
                <Col span={24}>
                  <hr />
                </Col>

                <Col span={9} offset={3}>
                  <p>บทเรียนที่ 5</p>
                </Col>
                <Col span={4} offset={2}>
                  <button className={classes.modalButton}>10%</button>
                </Col>
                <Col span={4} offset={2}>
                  <RiEqualizerLine
                    className={classes.Icon1}
                    onClick={showModal2}
                  />
                </Col>
                <Col span={24}>
                  <hr />
                </Col>

                <Col span={9} offset={3}>
                  <p>บทเรียนที่ 6</p>
                </Col>
                <Col span={4} offset={2}>
                  <button className={classes.modalButton}>20%</button>
                </Col>
                <Col span={4} offset={2}>
                  <RiEqualizerLine
                    className={classes.Icon1}
                    onClick={showModal2}
                  />
                </Col>
                <Col span={24}>
                  <hr />
                </Col>

                <Col span={9} offset={3}>
                  <p>บทเรียนที่ 7</p>
                </Col>
                <Col span={4} offset={2}>
                  <button className={classes.modalButton}>10%</button>
                </Col>
                <Col span={4} offset={2}>
                  <RiEqualizerLine
                    className={classes.Icon1}
                    onClick={showModal2}
                  />
                </Col>
                <Col span={24}>
                  <hr />
                </Col>

                <Col span={9} offset={3}>
                  <p>บทเรียนที่ 8</p>
                </Col>
                <Col span={4} offset={2}>
                  <button className={classes.modalButton}>0%</button>
                </Col>
                <Col span={4} offset={2}>
                  <RiEqualizerLine
                    className={classes.Icon1}
                    onClick={showModal2}
                  />
                </Col>
              </Row>
            </div>
          </Modal>
          <Modal
            className="modalStyle"
            title=""
            maskStyle={{ backgroundColor: "rgba(200, 200, 200, 0.50)" }}
            visible={isModalVisible2}
            onOk={handleOk2}
            onCancel={handleCancel}
            footer={[
              <button
                onClick={handleCancel2}
                className={classes.modalCancelButton}
              >
                ยกเลิก
              </button>,
              <button onClick={handleOk2} className={classes.modalSubmitButton}>
                บันทึก
              </button>,
            ]}
          >
            <div className={classes.modalContainer}>
              <Row>
                <Col span={8}>
                  <span className={classes.modalHeaderB}>การคิดคะแนนของ</span>
                </Col>
                <Col span={16}>
                  <span className={classes.modalHeader}>บทเรียนที่ 1</span>
                </Col>
                <Col span={24}>
                  <hr />
                </Col>

                <Col span={10} offset={2}>
                  <span className={classes.modalHeader}>คะแนน</span>
                </Col>
                <Col span={8} offset={4}>
                  <span className={classes.modalHeader}>สัดส่วนคะแนน</span>
                </Col>
                <Col span={24}>
                  <hr />
                </Col>

                <Col span={10} offset={2}>
                  <p className={classes.modalHeaderB}>คะแนนสะสม</p>
                </Col>
                <Col span={6} offset={6}>
                  <button className={classes.modalButton}>70%</button>
                </Col>
                <Col span={24}>
                  <hr />
                </Col>

                <Col span={10} offset={2}>
                  <p className={classes.modalHeaderB}>คะแนนจากบอสย่อย</p>
                </Col>
                <Col span={6} offset={6}>
                  <button className={classes.modalButton}>20%</button>
                </Col>
                <Col span={24}>
                  <hr />
                </Col>

                <Col span={10} offset={2}>
                  <p className={classes.modalHeaderB}>คะแนนจากบอสใหญ่</p>
                </Col>
                <Col span={6} offset={6}>
                  <button className={classes.modalButton}>20%</button>
                </Col>
                <Col span={24}>
                  <hr />
                </Col>
              </Row>
            </div>
          </Modal>
        </div>

        <div className={classes.tableContainer}>
          <StudentTable />
        </div>
      </div>
    </>
  );
}

export default StudentPage;

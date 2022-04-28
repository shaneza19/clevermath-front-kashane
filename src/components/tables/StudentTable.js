import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import data from './Data';

class StudentTable extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: '#',
        dataIndex: 'serie',
        key: 'serie',
        width: '%',
        sorter: (a, b) => a.serie - b.serie,
        sortOrder: sortedInfo.columnKey === 'serie' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'รหัสนักเรียน',
        dataIndex: 'studentId',
        key: 'studentId',
        sorter: (a, b) => a.studentId - b.studentId,
        sortOrder: sortedInfo.columnKey === 'studentId' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'ชื่อ-นามสกุล',
        dataIndex: 'fullName',
        key: 'fullName',
        sorter: (a, b) => a.fullName.length - b.fullName.length,
        sortOrder: sortedInfo.columnKey === 'fullName' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'คะแนนรวม',
        dataIndex: 'totalScore',
        key: 'totalScore',
        sorter: (a, b) => a.totalScore - b.totalScore,
        sortOrder: sortedInfo.columnKey === 'totalScore' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'บทเรียนที่ 1',
        dataIndex: 'chapter1',
        key: 'chapter1',
        sorter: (a, b) => a.chapter1 - b.chapter1,
        sortOrder: sortedInfo.columnKey === 'chapter1' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'บทเรียนที่ 2',
        dataIndex: 'chapter2',
        key: 'chapter2',
        sorter: (a, b) => a.chapter2 - b.chapter2,
        sortOrder: sortedInfo.columnKey === 'chapter2' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'บทเรียนที่ 3',
        dataIndex: 'chapter3',
        key: 'chapter3',
        sorter: (a, b) => a.chapter3 - b.chapter3,
        sortOrder: sortedInfo.columnKey === 'chapter3' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'บทเรียนที่ 4',
        dataIndex: 'chapter4',
        key: 'chapter4',
        sorter: (a, b) => a.chapter4 - b.chapter4,
        sortOrder: sortedInfo.columnKey === 'chapter4' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'บทเรียนที่ 5',
        dataIndex: 'chapter5',
        key: 'chapter5',
        sorter: (a, b) => a.chapter5 - b.chapter5,
        sortOrder: sortedInfo.columnKey === 'chapter5' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'บทเรียนที่ 6',
        dataIndex: 'chapter6',
        key: 'chapter6',
        sorter: (a, b) => a.chapter6 - b.chapter6,
        sortOrder: sortedInfo.columnKey === 'chapter6' && sortedInfo.order,
        ellipsis: true,
      },
    ];
    return (
      <>
        <Table 
        columns={columns} 
        dataSource={data} 
        onChange={this.handleChange} 
        pagination={false} 
        />
      </>
    );
  }
}

export default StudentTable;

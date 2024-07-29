import React from 'react';
import dataTableImg from '../../assets/img/data-table-img.png';

const DataTable = () => {
  return (
    <div className="data-table-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="data-table-content">
              <h2>We Like to Start Your Project With Us</h2>
              <a href="#" className="default-btn">Get started <i className='bx bx-plus'></i></a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="data-table-img">
              <img src={dataTableImg} alt="Data Table" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;

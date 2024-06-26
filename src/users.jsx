import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import './Safetypassport.css'; // Make sure you link to the correct CSS file
import downarrow from './Images/select_arrow.png';
import Edit from './Images/edit.png';
import Delete from './Images/delete.png';

const Users = () => {

  const columnHeaders = [
    'Employee Name', 
    'Employee ID', 
    'Designation', 
    'Email ID', 
    'Contact Number'
];
  
const [searchBy, setSearchBy] = useState('');
const [searchText, setSearchText] = useState('');
const [isToggleActive, setIsToggleActive] = useState(true);
const [isSecondToggleActive, setIsSecondToggleActive] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
const [tableData, setTableData] = useState([]);
const [isAllChecked, setIsAllChecked] = useState(false); // Added
const [checkedItems, setCheckedItems] = useState({}); // Added
const recordsPerPage = 11;

const handleSearchByChange = (event) => {
setSearchBy(event.target.value);
};

const handleSearchTextChange = (event) => {
setSearchText(event.target.value);
};

const handleToggleChange = () => {
setIsToggleActive(!isToggleActive);
};
const handleSecondToggleChange = () => {
setIsSecondToggleActive(!isSecondToggleActive);
};
// Added
const handleAllCheckedChange = () => {
  const newCheckedItems = {};
  currentRecords.forEach(record => {
    newCheckedItems[record.Employee_Id] = !isAllChecked;
  });
  setCheckedItems(newCheckedItems);
  setIsAllChecked(!isAllChecked);
};

// Added
const handleCheckboxChange = (id) => {
  setCheckedItems(prevState => ({
    ...prevState,
    [id]: !prevState[id]
  }));
};
const indexOfLastRecord = currentPage * recordsPerPage;
const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
const currentRecords = tableData.slice(indexOfFirstRecord, indexOfLastRecord);
const totalPages = Math.ceil(tableData.length / recordsPerPage);
const goToPreviousPage = () => {
if (currentPage > 1) {
  setCurrentPage(currentPage - 1);
}
};

const goToNextPage = () => {
if (currentPage < totalPages) {
  setCurrentPage(currentPage + 1);
}
};
useEffect(() => {
  fetch('/api/User')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status : ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.success) {
        console.log('Fetched data:', data.data); // Log fetched data
        setTableData(data.data);
        setCurrentPage(1);
      } else {
        throw new Error(data.message);
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error); // Log any errors
    });
}, []);

useEffect(() => {
// Ensure page number is within valid range
if (currentPage < 1) setCurrentPage(1);
if (currentPage > totalPages) setCurrentPage(totalPages);
}, [currentPage, totalPages]);
// Added
useEffect(() => {
const allChecked = currentRecords.every(record => checkedItems[record.Employee_Id]);
setIsAllChecked(allChecked);
}, [checkedItems, currentRecords]);

return (
<div className='Safetypassport-wrapper'>
    <div className='Safetypassport-header'>
      <h1 className='Safetypassport-title'>Users</h1>
      <button className="next-button">ADD USER</button>
      <button className="export-button">EXPORT</button>
    </div> 
    <div className='Safetypassport-search-wrapper'>
          <select 
              value={searchBy} 
              onChange={handleSearchByChange} 
              className="search-by-dropdown"
          >   <option value="" disabled hidden>Search By</option>
              {columnHeaders.map((header, index) => (
              <option key={index} value={header}>
                  {header}
              </option>
              ))}
          </select>
          <input 
              type="text" 
              placeholder="Enter text here" 
              value={searchText} 
              onChange={handleSearchTextChange} 
              className="search-input"
          />
        <span className="toggle-label">Active</span>
        <div className="toggles-wrapper">
          <div className="toggle-container">
            <label className="switch">
              <input type="checkbox" checked={isToggleActive} onChange={handleToggleChange} />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="toggle-container">
            <label className="switch">
              <input type="checkbox" checked={isSecondToggleActive} onChange={handleSecondToggleChange} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
    </div>
    <div className='table-controls'>
            <div className='checkbox-wrapper'>
              <label className='checkbox-container'>
                <input type="checkbox" checked={isAllChecked} onChange={handleAllCheckedChange}/>
                <span className='checkmark'></span>
              </label>
              <img src={downarrow} className='arrow-down'></img>
            </div>
            <div className='pagination'>
              <button onClick={goToPreviousPage} disabled={currentPage === 1}>&lt;</button>
              <span className='current'>{currentPage}</span>
              <button onClick={goToNextPage} disabled={currentPage === totalPages}>&gt;</button>
              <span>of {totalPages}</span>
            </div>
    </div>
    <div className='data-table-container'>
      <table className='data-table'>
          <thead>
            <tr>
            <th></th>
              {columnHeaders.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
            <th></th>
          </thead>
        <tbody>
          {currentRecords.map((data, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even-row':'odd-row'}> 
            <td>
              <label className='checkbox-container'>
              <input 
                  type="checkbox" 
                  checked={!!checkedItems[data.Employee_Id]} // Added
                  onChange={() => handleCheckboxChange(data.Employee_Id)} // Added
                />
                <span className='checkmark'></span>
              </label>
            </td>
              <td>{data.Employee_Name}</td>
              <td>{data.Employee_Id}</td>
              <td>{data.Designation}</td>
              <td>{data.Email_Id}</td>
              <td>{data.Contact_No}</td>
              <td>
                <img src={Edit} alt='Edit Icon'/>
              </td>
              <td>
                <img src={Delete} alt='Delete Icon'/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className='footer-wrapper'>
      <button className="next-button" onClick={goToNextPage}>NEXT</button>
      <div className='pagination'>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>&lt;</button>
        <span className='current'>{currentPage}</span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>&gt;</button>
        <span>of {totalPages}</span>
      </div>
    </div>
</div>
);
};

export default Users;
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import './Safetypassport.css'; // Make sure you link to the correct CSS file
import downarrow from './Images/select_arrow.png';
import Edit from './Images/edit.png';
import Delete from './Images/delete.png';

const SafetyIndexImprovementChecklist = () => {

  const columnHeaders = [
    'SIIC Number', 
    'Shop/Department', 
    'Line', 
    'Date & Time', 
    'Reported By', 
    'Status' 
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
    newCheckedItems[record.SIIC_Number] = !isAllChecked;
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

const formatDate = (datetime) => {
  return format(new Date(datetime), 'MM - dd - yyyy');
};

const formatTime = (datetime) => {
  return format(new Date(datetime), 'hh : mm a');
};

useEffect(() => {
  fetch('/api/safety-index-improvement')
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
const allChecked = currentRecords.every(record => checkedItems[record.SIIC_Number]);
setIsAllChecked(allChecked);
}, [checkedItems, currentRecords]);

return (
<div className='Safetypassport-wrapper'>
    <div className='Safetypassport-header'>
      <h1 className='Safetypassport-title'>Safety Index Improvement Checklist</h1>
      <div className='control-buttons'>
        <button className="control-button">ADD SAFETY IMPROVEMENT</button>
        <button className="export-button">EXPORT</button>
      </div>
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
              <button onClick={goToPreviousPage} disabled={currentPage === 1} className='back'></button>
              <span className='current'>{currentPage}</span>
              <button onClick={goToNextPage} disabled={currentPage === totalPages} className='next'></button>
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
          </thead>
        <tbody>
          {currentRecords.map((data, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even-row':'odd-row'}> 
            <td>
              <label className='checkbox-container'>
              <input 
                  type="checkbox" 
                  checked={!!checkedItems[data.SIIC_Number]} // Added
                  onChange={() => handleCheckboxChange(data.SIIC_Number)} // Added
                />
                <span className='checkmark'></span>
              </label>
            </td>
              <td>{data.SIIC_Number}</td>
              <td>{data.Department}</td>
              <td>{data.Line}</td>
              <td>
              {formatDate(data.datetime)}<br/>
              {formatTime(data.datetime)}
              </td>
              <td>{data.Reported_By}</td>
              <td>{data.Status}</td>
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

export default SafetyIndexImprovementChecklist;
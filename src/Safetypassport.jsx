import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import './Safetypassport.css'; // Make sure you link to the correct CSS file
import downarrow from './Images/select_arrow.png'

const SafetyPassport = () => {

  const columnHeaders = [
        'Employee ID', 
        'Full Name', 
        'Company Name', 
        'Valid From', 
        'Valid Till', 
        'Employee Permit', 
        'Safety Training'
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
        newCheckedItems[record.EmployeeID] = !isAllChecked;
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
    fetch('/api/safety-passport')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP errror! status : ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                setTableData(data.data);
                setCurrentPage(1);
            } else {
                throw new Error(data.message);
            }
        })
}, []);

useEffect(() => {
  // Ensure page number is within valid range
  if (currentPage < 1) setCurrentPage(1);
  if (currentPage > totalPages) setCurrentPage(totalPages);
}, [currentPage, totalPages]);
  // Added
  useEffect(() => {
    const allChecked = currentRecords.every(record => checkedItems[record.EmployeeID]);
    setIsAllChecked(allChecked);
  }, [checkedItems, currentRecords]);

  return (
    <div className='Safetypassport-wrapper'>
        <div className='Safetypassport-header'>
          <h1 className='Safetypassport-title'>Safety Passport</h1>
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
              </thead>
            <tbody>
              {currentRecords.map((data, index) => (
                <tr key={index} className={index % 2 === 0 ? 'even-row':'odd-row'}> 
                <td>
                  <label className='checkbox-container'>
                  <input 
                      type="checkbox" 
                      checked={!!checkedItems[data.EmployeeID]} // Added
                      onChange={() => handleCheckboxChange(data.EmployeeID)} // Added
                    />
                    <span className='checkmark'></span>
                  </label>
                </td>
                  <td>{data.EmployeeID}</td>
                  <td>{data.FullName}</td>
                  <td>{data.CompanyName}</td>
                  <td>
                    {formatDate(data.ValidFrom)}<br />
                    {formatTime(data.ValidFrom)}
                  </td>
                  <td>
                    {formatDate(data.ValidTill)}<br />
                    {formatTime(data.ValidTill)}
                  </td>
                  <td>{data.EmployeePermit}</td>
                  <td>{data.SafetyTraining}</td>
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

export default SafetyPassport;
import 'semantic-ui-css/semantic.min.css';
import { Dropdown, DropdownDivider, DropdownItem, DropdownMenu, Radio, Select } from 'semantic-ui-react';
import "./App.css";
import CustomSelect from './components/Controls/CustomSelect';
import Filter from './components/Controls/Filter';
import FilterBar from './components/FilterBar';
import { useRef, useState } from 'react';

function App() {
  const selectBoxRef = useRef(null);
  const options = [
    {
      value: 1,
      text: 'Option 1'
    },
    {
      value: 2,
      text: 'Option 2'
    },
    {
      value: 3,
      text: 'Option 3'
    },
    {
      value: 8,
      text: 'Option 8'
    },
    {
      value: 4,
      text: 'Option 4'
    },
    {
      value: 5,
      text: 'Option 5Option 5Option 5Option 5Option 5Option 5Option 5Option 5Option 5Option 5Option 5Option 5Option 5Option 5Option 5Option 5Option 5'
    },
    {
      value: 6,
      text: 'Option 6'
    },
    {
      value: 7,
      text: 'Option 3'
    },
  ]

  const handleSearchChange = (search) => {
    console.log('---> search ', search)
  }

  const handleOnChangeFilter = (newData) => {

  }

  const actions = [
    {
      id: 'ID001',
      component: <Filter onChangeFilter={handleOnChangeFilter} />,
      className: ''
    },
    {
      id: 'ID001',
      component: <div className='filter-bar'> <label>Compact view</label> <Radio toggle /></div>,
      className: ''
    },
    {
      id: 'ID001',
      component: <CustomSelect onChangeFilter={handleOnChangeFilter} options={options} />,
      className: ''
    },
    {
      id: 'ID001',
      component: <CustomSelect onChangeFilter={handleOnChangeFilter} options={options} />,
      className: ''
    },
    {
      id: 'ID001',
      component: <CustomSelect onChangeFilter={handleOnChangeFilter} options={options} />,
      className: ''
    }
  ]
  const countryOptions = [
    { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
    { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
    { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
    { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
    { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
  ]
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const handleSelectBoxClick = () => {
    if (selectBoxRef.current) {
      const rect = selectBoxRef.current.getBoundingClientRect?.();
      console.log(rect)
      setPosition({ top: rect.bottom, left: rect.left });
    }
  };

  return (
    <div className="App">
      <FilterBar
        isShowExport
        isShowPagination
        actions={actions}
        fromItem={1}
        toItem={100}
        totalItems={500}
        onSearchChange={handleSearchChange}
      />
      <div style={{ height: 200, overflow: "auto" }}>
        <div ref={selectBoxRef} >
          <Dropdown text='File' onClick={handleSelectBoxClick} >
            <DropdownMenu className='dropdown-list' style={{ top: position.top, left: position.left, position: 'fixed' }}>
              <DropdownItem text='New' />
              <DropdownItem text='Open...' description='ctrl + o' />
              <DropdownItem text='Save as...' description='ctrl + s' />
              <DropdownItem text='Rename' description='ctrl + r' />
              <DropdownItem text='Make a copy' />
              <DropdownItem icon='folder' text='Move to folder' />
              <DropdownItem icon='trash' text='Move to trash' />
              <DropdownDivider />
              <DropdownItem text='Download As...' />
              <DropdownItem text='Download As...' />
              <DropdownItem text='Download As...' />
              <DropdownItem text='Download As...' />
              <DropdownItem text='Download As...' />
              <DropdownItem text='Download As...' />
              <DropdownItem text='Download As...' />
              <DropdownItem text='Publish To Web' />
              <DropdownItem text='E-mail Collaborators' />
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default App;

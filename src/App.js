import 'semantic-ui-css/semantic.min.css';
import { Radio } from 'semantic-ui-react';
import "./App.css";
import CustomSelect from './components/Controls/CustomSelect';
import Filter from './components/Controls/Filter';
import FilterBar from './components/FilterBar';

function App() {

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
    </div>
  );
}

export default App;

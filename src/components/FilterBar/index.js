import { debounce } from 'lodash';
import React, { useCallback } from 'react';
import { Icon, Input } from 'semantic-ui-react';
import './styles.scss';

const FilterBar = ({
  searchKey,
  totalItems,
  fromItem,
  toItem,
  actions = [],
  isShowExport = false,
  isShowPagination = false,
  onSearchChange,
  onNextPage,
  onPrevPage,
  onExport,
}) => {
  const debouncedSearchChange = useCallback(
    debounce((value) => {
      onSearchChange(value);
    }, 400),
    [onSearchChange]
  );

  const handleSearchChange = (e) => {
    debouncedSearchChange(e.target.value);
  };

  return (
    <div className='filter-bar'>
      <Input
        icon="search"
        placeholder="Search..."
        value={searchKey}
        onChange={handleSearchChange}
      />
      {actions.length > 0 &&
        actions.map(({ component, className, ...action }, idx) => (
          <div key={idx} className={`filter-action__item ${className}`} {...action}>
            {component}
          </div>
        ))}
      <div className="blank"></div>
      {isShowExport && (
        <button className='filter-bar__export-btn' onClick={onExport}>
          Export
          <Icon name="download" />
        </button>
      )}
      {isShowPagination && (
        <div className='filter-bar__pagination'>
          <span className='filter-bar__pagination__info'>
            {fromItem} - {toItem} of {totalItems}
          </span>
          <div className='filter-bar__pagination__actions'>
            <Icon name="angle left" onClick={onPrevPage} />
            <Icon name="angle right" onClick={onNextPage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
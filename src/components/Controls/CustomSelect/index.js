import { isFunction } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { Icon } from 'semantic-ui-react';
import './styles.scss';

const CustomSelect = ({ isAllowInput = true, value, options = [], onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(value);
  const [styles, setStyles] = useState({ top: 0, left: 0 });
  const [inputValue, setInputValue] = useState('');
  const selectBoxRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (value) {
      const existingOption = options.find(o => o.value === value)
      setSelected(existingOption)
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectBoxRef.current && !selectBoxRef.current.contains(event.target) &&
        dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setInputValue('')
      }
    };

    const handleScroll = (event) => {
      if (!dropdownRef.current || !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setInputValue('')
      }
    };

    document.addEventListener('mousedown', handleClickOutside, true);
    document.addEventListener('scroll', handleScroll, true);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
      document.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  const handleSelectBoxClick = () => {
    if (selectBoxRef.current) {
      const rect = selectBoxRef.current.getBoundingClientRect();
      setStyles({ top: rect.bottom, left: rect.left, width: rect.width });
    }
    setIsOpen(!isOpen);
  };

  const handleItemClick = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onChange && isFunction(onChange)) {
      onChange(option);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const filteredOptions = options.filter(option =>
    option.text.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="custom-select">
      <div className="custom-select__box" onClick={handleSelectBoxClick} ref={selectBoxRef}>
        <input
          readOnly={!isAllowInput}
          onChange={handleInputChange}
          placeholder={isOpen && selected && selected?.text || 'Select an option'}
          value={inputValue || selected && selected?.text}
        />

        <Icon name='angle down' />
      </div>
      {isOpen && <ul
        className="custom-select__list"
        ref={dropdownRef}
        style={styles}
      >
        {filteredOptions.map((option) => (
          <li
            key={option.value}
            className="custom-select__list__item"
            onClick={() => handleItemClick(option)}
          >
            {option.text}
          </li>
        ))}
      </ul>
      }
    </div>
  );
};

export default CustomSelect;

import { useState } from 'react';
import { Input } from '../../components/shared/Form/Input';
import { Popover } from '../../components/shared/Popover';
import { dataSwap } from '../../data/swap';
import { getPoolIcon } from '../../utils/function';

export const PopoverSearch = ({ onSelect }) => {
  const [keyword, setKeyword] = useState('');
  const [visible, setVisible] = useState(false);
  const [from, setFrom] = useState(null);

  const getFirstSearch = () => {
    const newList = dataSwap.find((item) => item.name.toLowerCase().includes(keyword.toLowerCase()));
    return newList;
  };

  const handleVisibleChange = (status) => {
    setVisible(status)
  }
  const handleSelectSearch = (item) => {
    onSelect({
      from,
      to: item,
    });
  };
  const renderContent = (onClose) => {
    if (keyword === '') {
      return null;
    }
    const firstSearch = getFirstSearch();
    if (!firstSearch) {
      return null;
    }
    setFrom(firstSearch);
    const listAutoComplete = [];
    let total = 0;
    dataSwap.forEach((item) => {
      if (total < 5 && item.id !== firstSearch.id) {
        listAutoComplete.push(item);
        total++;
      }
    });
    return (
      <div className='popover-swap-content'>
        {listAutoComplete.map((item) => (
          <div
            className='swap-autocomplete'
            onClick={() => {
              handleSelectSearch(item);
              onClose();
            }}
            key={item.id}
          >
            <div className='autocomplete-left'>
              <img src={getPoolIcon(firstSearch.name)} />
              <img src={getPoolIcon(item.name)} />
            </div>
            <div className='autocomplete-right'>
              <div className='autocomplete-name'>
                {firstSearch.name} - {item.name}
              </div>
              <div className='autocomplete-desc'>
                {firstSearch.desc} - {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className='swap-search'>
      <Popover
        placement='bottom'
        onVisibleChange={handleVisibleChange}
        visible={visible}
        content={(onClose) => (
          <Popover.Content onClose={onClose} className='popover-swap-search'>
            {renderContent(onClose)}
          </Popover.Content>
        )}
      >
        <Input
          prefixIcon={<i className='bi bi-search'></i>}
          placeholder='Search token'
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          value={keyword}
        />
      </Popover>
    </div>
  );
};

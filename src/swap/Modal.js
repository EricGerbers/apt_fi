import { useState } from 'react';
import { Input } from '../../components/shared/Form/Input';
import { Modal } from '../../components/shared/Modal';
import { dataSwap, dataSwapRecent } from '../../data/swap';
import { getPoolIcon } from '../../utils/function';
export const ModalSelectToken = ({ onClose, onSelect, ...props }) => {
  const [keyword, setKeyword] = useState('');
  const handleSelectToken = (token) => {
    onSelect(token);
    setKeyword('');
    onClose();
  };
  const resultSearch =
    keyword !== '' ? dataSwap.filter((item) => item.name.toLowerCase().includes(keyword.toLowerCase())) : dataSwap;
  return (
    <Modal {...props} className='modal-swap' onClose={onClose}>
      <div>
        <div className='modal-swap__search'>
          <Input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder='Search token'
            suffix={<i className='bi bi-search'></i>}
          />
        </div>
        <div className='modal-swap__recent'>
          {dataSwapRecent.map((item) => (
            <div className='recent-item' onClick={() => handleSelectToken(item)} key={`recent-${item.id}`}>
              <img src={getPoolIcon(item.name)} width={20} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <div className='modal-swap__result'>
          {resultSearch.length > 0 &&
            resultSearch.map((item) => (
              <div className='result-item' onClick={() => handleSelectToken(item)} key={`search-${item.id}`}>
                <img src={getPoolIcon(item.name)} width={40} />
                <div className='result_info'>
                  <span className='result-name'>{item.name}</span>
                  <span className='result-desc'>{item.desc}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Modal>
  );
};

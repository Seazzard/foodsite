import React from 'react';

const SortItem = ({ text, setSort }) => {
  return (
    <div>
      <li className="content__header-sort-item" onClick={() => setSort(text)}>
        {text}
      </li>
    </div>
  );
};

export default SortItem;

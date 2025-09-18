import React from 'react';

const DEFAULT_CATEGORIES = [
  'All',
  'Produk Populer',
  'Games',
  'Voucher',
  'Pulsa',
  'Entertainment',
];

export default function CategoryPills({ items = DEFAULT_CATEGORIES, active = 'All', onChange }) {
  return (
    <div className="category-pills">
      <div className="container">
        <div className="pills-rail">
          {items.map((c) => (
            <button
              key={c}
              className={"pill" + (c === active ? " active" : "")}
              onClick={() => onChange && onChange(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}



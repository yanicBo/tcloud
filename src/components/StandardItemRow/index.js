import React from 'react';
import './index.css';

export default ({ title, children}) => {

  return (
    <div className="standard-item-row">
        {title && (
            <div className="label">
                <span>{title}</span>
            </div>
        )}
        <div className="items">{children}</div>
    </div>
  );
};

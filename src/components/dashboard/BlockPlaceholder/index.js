import React from 'react';
import s from './styles.scss';

const BlockPlaceholder = ({ width }) => (
  <div>
    <div>
      <div className={s.val} style={{ width: width.val }}>
        &nbsp;
      </div>
    </div>

    <div className={s.labelWrap}>
      <div className={s.label} style={{ width: width.label }}>
        &nbsp;
      </div>
    </div>
  </div>
);

export default BlockPlaceholder;

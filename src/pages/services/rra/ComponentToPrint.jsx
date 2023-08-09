import React, { useRef } from 'react';

export const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div>ComponentToPrint</div>
  )
});

import React from 'react';
import { UI_CONSTANTS } from '../../config/constants';

export default function Container({ children, className = '', noPadding = false }) {
  return (
    <div className={`mx-auto px-4 md:px-8 w-full ${UI_CONSTANTS.LAYOUT.MAX_CONTAINER_CLASS} ${!noPadding ? UI_CONSTANTS.LAYOUT.SECTION_PADDING_CLASS : ''} ${className}`}>
      {children}
    </div>
  );
}

// IconComponent.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMobile, faBusinessTime, faDatabase, faPalette, faChartSimple } from '@fortawesome/free-solid-svg-icons';

const icons = {
  laptopCode: faLaptopCode,
  Mobile: faMobile,
  Business: faBusinessTime,
  Database: faDatabase,
  UI: faPalette,
  Graph: faChartSimple,
};
const IconComponent = ({ iconName }) => {
  const icon = icons[iconName];
  if (!icon) {
    console.warn(`Icon "${iconName}" not found`);
    return null;
  }
  return <FontAwesomeIcon icon={icon} />;
};

export default IconComponent;
<FontAwesomeIcon icon={faMobile} />
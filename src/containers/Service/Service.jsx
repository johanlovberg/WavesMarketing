import React from 'react';
import Feature from '../../components/feature/Feature';
import './Service.css';
import { serviceContainerHeaderText, serviceContainerText,serviceHeader } from '../helpers/texthelper';

const Service = () => (
  <div className="service section__margin" id="services">
    <div className="service-heading">
      <h1 className="gradient__text">{serviceHeader.supHeader}</h1>
    </div>
    <div className="service-container">
      <Feature className="flex-item" title={serviceContainerHeaderText.inbound_sales_header} text={serviceContainerText.inbound_sales_text}/>
      <Feature className="flex-item" title={serviceContainerHeaderText.outbound_sales_header} text={serviceContainerText.outbound_sales_text}/>
      <Feature className="flex-item" title={serviceContainerHeaderText.sales_execution_header} text={serviceContainerText.sales_execution_text}/>
      <Feature className="flex-item" title={serviceContainerHeaderText.account_based_marketing_header} text={serviceContainerText.account_based_marketing_text}/>
    </div>
  </div>
);

export default Service;

import React from 'react';

export const Footer = ({companyinfo, year}:
    {companyinfo:string, year :string}) => (
    <div>
       Copyright {companyinfo} {year} 
    </div>
);

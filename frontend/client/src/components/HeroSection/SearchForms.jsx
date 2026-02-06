import React from 'react';
import FlightSearch from './SeachForms/FlightSearch';
import HotelSearch from './SeachForms/HotelSearch';
import CarSearch from './SeachForms/CarSearch';
import CruiseSearch from './SeachForms/CruiseSearch';
import TourSearch from './SeachForms/TourSearch';
import BusSearch from './SeachForms/BusSearch';

const SearchForms = ({ activeTab }) => {
  const forms = {
    flight: <FlightSearch />,
    hotel: <HotelSearch />,
    car: <CarSearch />,
    cruise: <CruiseSearch />,
    tour: <TourSearch />,
    bus: <BusSearch />
  };

  return (
    <div className="card-body">
      <div className="tab-content">
        {Object.keys(forms).map((tabId) => (
          <div
            key={tabId}
            className={`tab-pane fade ${activeTab === tabId ? 'active show' : ''}`}
            id={tabId}
          >
            {forms[tabId]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchForms;
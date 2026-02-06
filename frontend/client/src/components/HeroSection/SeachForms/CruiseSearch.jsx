import React, { useState } from 'react';

const CruiseSearch = () => {
  const [formData, setFormData] = useState({
    destination: 'Newyork',
    startDate: '21-10-2025',
    endDate: '23-10-2025'
  });

  const [passengers, setPassengers] = useState({
    adults: 2,
    children: 0,
    infants: 0
  });

  const [cabinType, setCabinType] = useState('solo');

  const cabinTypes = [
    { id: 'solo', label: 'Solo cabins' },
    { id: 'balcony', label: 'Balcony' },
    { id: 'oceanview', label: 'Oceanview' },
    { id: 'balcony-rooms', label: 'Balcony rooms' }
  ];

  const incrementPassenger = (type) => {
    setPassengers(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

  const decrementPassenger = (type) => {
    if (passengers[type] > 0) {
      setPassengers(prev => ({
        ...prev,
        [type]: prev[type] - 1
      }));
    }
  };

  return (
    <form action="cruise-grid.html">
      <div className="d-flex align-items-center justify-content-between flex-wrap mb-2">
        <h6 className="fw-medium fs-16 mb-2">Search For Cruise</h6>
      </div>

      <div className="d-lg-flex">
        <div className="d-flex form-info">
          {/* Destination */}
          <div className="form-item dropdown">
            <div data-bs-toggle="dropdown">
              <label className="form-label fs-14 text-default mb-1">Destination</label>
              <input
                type="text"
                className="form-control"
                value={formData.destination}
                onChange={(e) => setFormData({...formData, destination: e.target.value})}
              />
              <p className="fs-12 mb-0">USA</p>
            </div>
          </div>

          {/* Start Date */}
          <div className="form-item">
            <label className="form-label fs-14 text-default mb-1">Start Date</label>
            <input
              type="text"
              className="form-control datetimepicker"
              value={formData.startDate}
              onChange={(e) => setFormData({...formData, startDate: e.target.value})}
            />
            <p className="fs-12 mb-0">Monday</p>
          </div>

          {/* End Date */}
          <div className="form-item">
            <label className="form-label fs-14 text-default mb-1">End Date</label>
            <input
              type="text"
              className="form-control datetimepicker"
              value={formData.endDate}
              onChange={(e) => setFormData({...formData, endDate: e.target.value})}
            />
            <p className="fs-12 mb-0">Monday</p>
          </div>

          {/* Passengers & Cabin */}
          <div className="form-item dropdown">
            <div data-bs-toggle="dropdown">
              <label className="form-label fs-14 text-default mb-1">Travellers & Cabin</label>
              <h5>
                {passengers.adults + passengers.children + passengers.infants}{' '}
                <span className="fw-normal fs-14">Persons</span>
              </h5>
              <p className="fs-12 mb-0">
                {passengers.adults} Adult, {cabinType}
              </p>
            </div>

            <div className="dropdown-menu dropdown-menu-end dropdown-xl">
              <h5 className="mb-3">Select Travelers & Cabin</h5>
              
              {/* Passenger Counter */}
              <div className="mb-3 border br-10 info-item pb-1">
                <h6 className="fs-16 fw-medium mb-2">Travellers</h6>
                <div className="row">
                  {[
                    { type: 'adults', label: 'Adults', desc: '(12+ Yrs)' },
                    { type: 'children', label: 'Childrens', desc: '(2-12 Yrs)' },
                    { type: 'infants', label: 'Infants', desc: '(0-2 Yrs)' }
                  ].map((item) => (
                    <div key={item.type} className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label text-gray-9 mb-2">
                          {item.label} <span className="text-default fw-normal">{item.desc}</span>
                        </label>
                        <div className="custom-increment">
                          <div className="input-group">
                            <button
                              type="button"
                              className="quantity-left-minus btn btn-light btn-number"
                              onClick={() => decrementPassenger(item.type)}
                            >
                              <i className="isax isax-minus"></i>
                            </button>
                            <input
                              type="text"
                              className="input-number"
                              value={passengers[item.type]}
                              readOnly
                            />
                            <button
                              type="button"
                              className="quantity-right-plus btn btn-light btn-number"
                              onClick={() => incrementPassenger(item.type)}
                            >
                              <i className="isax isax-add"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cabin Type */}
              <div className="mb-3 border br-10 info-item pb-1">
                <h6 className="fs-16 fw-medium mb-2">Select Cabin</h6>
                <div className="d-flex align-items-center flex-wrap">
                  {cabinTypes.map((cabin) => (
                    <div key={cabin.id} className="form-check me-3 mb-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="cabin"
                        id={cabin.id}
                        checked={cabinType === cabin.id}
                        onChange={() => setCabinType(cabin.id)}
                      />
                      <label className="form-check-label" htmlFor={cabin.id}>
                        {cabin.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-light btn-sm me-2">
                  Cancel
                </button>
                <button type="button" className="btn btn-primary btn-sm">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <button type="submit" className="btn btn-primary search-btn rounded">
          Search
        </button>
      </div>
    </form>
  );
};

export default CruiseSearch;
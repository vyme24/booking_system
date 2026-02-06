import React from "react";

const SearchTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "flight", icon: "fa-plane-departure", label: "Flights" },
    { id: "hotel", icon: "fa-hotel", label: "Hotels" },
    { id: "car", icon: "fa-car", label: "Cars" },
    { id: "cruise", icon: "fa-ship", label: "Cruise" },
    { id: "tour", icon: "fa-camera", label: "Tour" },
    { id: "bus", icon: "fa-bus", label: "Bus" },
  ];

  return (
    <div className="bg-white rounded-full px-3 py-2 shadow-sm">
      <ul className="flex items-center gap-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <li key={tab.id}>
              <button
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-pill text-xs font-semibold transition-all
                  ${
                    isActive
                      ? "bg-red-600 text-white shadow-sm"
                      : "text-gray-800 hover:bg-gray-100"
                  }`}
              >
                <i
                  className={`fa-solid ${tab.icon} text-xs ${
                    isActive ? "text-white" : "text-gray-900"
                  }`}
                /> 
                <span>{tab.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchTabs;

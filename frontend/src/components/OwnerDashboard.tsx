const OwnerDashboard = () => {
  const stats = [
    {
      label: "Total Libraries",
      value: "0",
      icon: "🏢",
      color: "text-blue-600",
    },
    {
      label: "Active Booking",
      value: "0",
      icon: "✅",
      color: "text-green-600",
    },
    {
      label: "Today's Revenue",
      value: "₹0",
      icon: "💰",
      color: "text-orange-600",
    },
  ];

  return (
    <div className="p-4 md:p-8 animate-fadeIn">
      {/*Header Section*/}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800">
            Owner Dashboard
          </h1>
          <p className="text-gray-500">
            Manage Your Libraries and track performance
          </p>
        </div>

        <button>+ Add New Library</button>
      </div>
      {/* Stats Grid: Mobile: 1 col, Tablet: 2 col, Desktop: 3 col */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center jsutify-between ">
              <div>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider ">
                  {stat.label}
                </p>
                <h3 className={`text-3xl font-bold mt-1 ${stat.color}`}>
                  {stat.value}
                </h3>
              </div>
              <div className="text-4xl bg-gray-50 p-3 rounded-xl">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div>📚</div>
        <h2>No Libraries</h2>
        <p>
          You haven 't added any libraries yet. Start by adding your first
          reading room or bookstore
        </p>
        <button className="text-blue-600 font-bold hover:underline">
          Learn how to list your library →{" "}
        </button>
      </div>
    </div>
  );
};

export default OwnerDashboard;

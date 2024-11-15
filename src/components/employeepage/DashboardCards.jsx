const DashboardCards = () => {
  const cardsData = [
    {
      title: "Registration Date",
      content: "21-11-2021 2:13:15 PM",
      icon: "fas fa-calendar-alt",
      gradient: "bg-gradient-to-r from-blue-500 to-purple-500",
    },
    {
      title: "Aadhaar ID Number",
      content: "124421789641",
      icon: "fas fa-id-card",
      gradient: "bg-gradient-to-r from-green-500 to-teal-500",
    },
    {
      title: "Post Category",
      content: "21-11-2021 2:13:15 PM",
      icon: "fas fa-briefcase",
      gradient: "bg-gradient-to-r from-orange-500 to-yellow-500",
    },
    {
      title: "Job Designation",
      content: "Junior Assistant",
      icon: "fas fa-user-tie ",
      gradient: "bg-gradient-to-r from-blue-500 to-indigo-500",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className={`${card.gradient} text-white p-6 rounded-lg shadow-lg flex items-center justify-between h-48`} // Adjusted height for a card-like appearance
        >
          <div>
            <h4 className="text-lg font-bold">{card.title}</h4>
            <p>{card.content}</p>
          </div>
          <i className="text-3xl">
            {/* <card.icon /> Use the specific icon as a component */}
          </i>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;

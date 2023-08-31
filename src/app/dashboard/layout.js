const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <h2 className="w-1/4">SideBar</h2>
      <div className="w-3/4">{children}</div>
    </div>
  );
};

export default DashboardLayout;

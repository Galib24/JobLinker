import Link from "next/link";

const DashboardLayout = ({ children }) => {
  const isAdmin = true;
  const isHr = false;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li><a>Sidebar Item 1</a></li>
          <li><Link href={`/`}>Home</Link></li>
          {
            isAdmin && <>
              <li><Link href={`/dashboard/users`}>Sidebar Item admin item 1</Link></li>
              <li><a>Sidebar Item admin item 2</a></li>
            </>
          }
          {
            isHr && <>
              <li><a>Sidebar Item HR item 1</a></li>
              <li><a>Sidebar Item Hr item 2</a></li>
            </>
          }
        </ul>

      </div>
    </div>
  );
};

export default DashboardLayout;

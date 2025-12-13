import { Outlet } from "react-router";

const MainLayout = () => {
  return ( 
  <>
    <section  className="max-w-6xl mx-auto px-6 my-8">
      {/* We use Outlet to show whatever is on that route */}
      <Outlet />
    </section>
  </> 
);
}
 
export default MainLayout;
import { Outlet } from "react-router";
import Hero from "~/components/Hero";

const HomeLayout = () => {
  return ( 
  <>
    <Hero name="Adham" />
    <section  className="max-w-6xl mx-auto px-6 my-8">
      {/* We use Outlet to show whatever is on that route */}
      <Outlet />
    </section>
  </> 
);
}
 
export default HomeLayout;
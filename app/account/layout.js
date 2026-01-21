import SideNavigation from "@/app/_components/SideNavigation";
import SideNavigationMobile from "../_components/SideNavigationMobile";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigationMobile />
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}

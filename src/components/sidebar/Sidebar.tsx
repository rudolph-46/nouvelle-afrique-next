import TopRead from "./TopRead";
import Newsletter from "./Newsletter";
import AdBanner from "../ads/AdBanner";

const Sidebar = () => {
  return (
    <aside className="space-y-6">
      <AdBanner size="rectangle" />
      <TopRead />
      <Newsletter />
      <AdBanner size="rectangle" />
    </aside>
  );
};

export default Sidebar;

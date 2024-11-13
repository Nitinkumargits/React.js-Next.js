import { Link } from "react-router-dom";
import PageNavigation from "../coponents/PageNavigation";

function HomePage() {
  return (
    <div>
      <PageNavigation />
      <h1>worldwise 🌍</h1>
      <Link to="/app">Go to App</Link>
    </div>
  );
}

export default HomePage;

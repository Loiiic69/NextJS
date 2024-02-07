// pages/index.tsx
import Navbar from "../ui/navbar/navbar";
import Gauche from "@/app/ui/gauche/overall";
import Profit from "@/app/ui/mid/profit";

const HomePage: React.FC = () => {
  return (
      <div>
        <Navbar />
        <div className="mt-4 ml-10 flex justify-between">
            <div>
             <Gauche/>
            </div>
            <div>
                <Profit/>

          </div>
          <div>
            <h1>Profile</h1>
          </div>
        </div>
      </div>
  );
};

export default HomePage;

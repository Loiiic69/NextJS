// pages/index.tsx
import Navbar from "../ui/navbar/navbar";
import Gauche from "@/app/ui/gauche/overall";
import Profit from "@/app/ui/mid/profit";
import Profil from "@/profilhome/profil";
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
          <div className="mr-12">
              <Profil/>
          </div>
        </div>
      </div>
  );
};

export default HomePage;

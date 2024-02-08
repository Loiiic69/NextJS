// pages/index.tsx
import Navbar from "../ui/navbar/navbar";
import Gauche from "@/app/ui/gauche/overall";
import Profit from "@/app/ui/mid/profit";
import Profil from "@/app/ui/profilhome/profil";
const HomePage: React.FC = () => {
  return (
      <div>
        <Navbar />
        <div className="mt-4 ml-10 flex justify-between">
            <div>
             <Gauche/>
            </div>
            <div className="mr-32 p-4">
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

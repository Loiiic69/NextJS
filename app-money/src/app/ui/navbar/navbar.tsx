// components/Navbar.tsx
const Navbar: React.FC = () => {
    return (
      <nav className="flex items-center justify-between bg-white p-4">
        <div className="flex items-center space-x-20"> {/* Ajout de la classe space-x-8 pour espacer les icônes */}
          {/* Insérer vos icônes en tant qu'images */}
          <img src="/logo.png" alt="" className="h-15 w-15" />
          <img src="/icon1.png" alt="Icon 1" className="h-15 w-15" />
          <img src="/icon2.png" alt="Icon 2" className="h-15 w-15" />
          <img src="/icon3.png" alt="Icon 3" className="h-15 w-15" />
          <img src="/icon4.png" alt="Icon 4" className="h-15 w-15" />
        </div>
        {/* Ajouter d'autres éléments de la barre de navigation ici, comme un logo */}
        <img src="/icon5.png" alt="Icon 5" className="h-15" />
      </nav>
    );
  };
  
  export default Navbar;

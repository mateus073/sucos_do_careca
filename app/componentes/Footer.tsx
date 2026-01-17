export const Footer = () => {
  return (
    <div className="p-9 bg-white">
      <footer className="
        bg-[#023373]        ]
        rounded-4xl
        shadow-md
        p-10
        flex flex-col md:flex-row
        items-center justify-between
        gap-8
      ">
        
        {/* Logo e redes sociais */}
        <div className="flex flex-col items-center">
          <img 
            src="/imgs/logo.jpg" 

            alt="Sucos do Careca" 
            className="w-24 h-24 mb-6 border-4 rounded-full object-cover" 
          />

          <div className="flex gap-4 items-center">
            <a href="https://www.facebook.com/sucosdocareca">
              <img src="/imgs/facebook.png" alt="Facebook" className="w-10 h-10 opacity-80 hover:opacity-100 transition" />
            </a>
            <a href="https://www.instagram.com/sucosdocareca">
              <img src="/imgs/instagram.png" alt="Instagram" className="w-10 h-10 opacity-80 hover:opacity-100 transition" />
            </a>
            <a href="https://www.twitter.com/sucosdocareca">
              <img src="/imgs/whatsapp.png" alt="Whatsapp" className="w-10 h-10 opacity-80 hover:opacity-100 transition" />
            </a>
          </div>
        </div>

        {/* Texto de direitos */}
        <div className="text-center md:text-right">
          <p className="text-white text-sm md:text-base">
            &copy; 2024 Sucos do Careca. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

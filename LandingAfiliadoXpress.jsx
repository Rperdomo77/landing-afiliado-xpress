
import { motion } from "framer-motion";

export default function LandingAfiliadoXpress() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 p-6 flex flex-col items-center">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-center max-w-4xl mt-10"
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        ¿Te gustaría ganar dinero por internet con habilidades digitales de alta demanda?
      </motion.h1>

      <p className="text-center text-lg max-w-2xl mt-6">
        Descubre el paso a paso de <strong>AFILIADO XPRESS</strong>, el método que me permitió facturar más de $200,000 USD sin crear mi propio producto ni invertir en inventarios.
      </p>

      <motion.div 
        className="mt-10 w-full max-w-3xl"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.3 }}
      >
        <div className="bg-white rounded-lg shadow-xl p-6 space-y-6">
          <h2 className="text-2xl font-semibold">¿Qué aprenderás en esta clase gratuita?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Cómo funciona la industria del marketing de afiliados</li>
            <li>Habilidades digitales que puedes vender desde casa</li>
            <li>Cómo aplicar copywriting, tráfico digital y UGC</li>
            <li>El sistema exacto que me permitió generar más de $200K</li>
            <li>Cómo empezar sin experiencia y sin ser influencer</li>
          </ul>
          <div className="text-center">
            <button className="bg-blue-600 text-white text-lg px-8 py-4 rounded hover:bg-blue-700 transition">Acceder a la Clase Gratis</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

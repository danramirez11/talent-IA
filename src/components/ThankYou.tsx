import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Bot, CheckCircle, ArrowLeft, Mail, Calendar, Users } from 'lucide-react';

const ThankYou = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userType = searchParams.get('type') || 'company';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Header */}
      <header className="bg-gray-800 shadow-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2" onClick={() => navigate('/')}>
              <Bot className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-white">TalentIA</span>
            </div>
          </div>
        </div>
      </header>

      <button
        onClick={() => navigate('/')}
        className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors mt-4 mb-8 ml-12"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Volver al Inicio</span>
      </button>

      <div className="flex items-center justify-center px-4 py-8">
        <div className="max-w-lg w-full">
          <div className="bg-gray-800 rounded-2xl shadow-xl p-8 text-center border border-gray-700">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>

            {/* Main Message */}
            <h1 className="text-3xl font-bold text-white mb-4">
              ¡Registro Exitoso!
            </h1>
            
            <p className="text-xl text-gray-300 mb-6">
              Gracias por tu interés en TalentIA
            </p>

            {/* Personalized Message */}
            <div className="bg-gray-700 rounded-xl p-6 mb-8 border border-gray-600">
              {userType === 'company' ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2 text-blue-400 mb-3">
                    <Users className="h-5 w-5" />
                    <span className="font-semibold">Empresa / Departamento RRHH</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Hemos registrado tu empresa exitosamente. Nuestro equipo se pondrá en contacto contigo 
                    para programar una <strong className="text-white">demo personalizada</strong> y discutir 
                    cómo TalentIA puede transformar tu proceso de reclutamiento.
                  </p>
                  <div className="flex items-start space-x-3 mt-4">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-400 text-xs">
                      Recibirás información sobre integración ATS y casos de éxito
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2 text-indigo-400 mb-3">
                    <Bot className="h-5 w-5" />
                    <span className="font-semibold">Profesional Individual</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Te hemos registrado exitosamente. Te notificaremos por email tan pronto como 
                    la plataforma esté disponible para <strong className="text-white">optimizar tu CV</strong> 
                    y automatizar tus postulaciones.
                  </p>
                  <div className="flex items-start space-x-3 mt-4">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-400 text-xs">
                      Acceso anticipado a herramientas de optimización de CV
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Next Steps */}
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold text-white">Próximos Pasos:</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm text-left">
                    Revisa tu email para confirmar el registro
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm text-left">
                    Te contactaremos en las próximas 48 horas
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Bot className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm text-left">
                    {userType === 'company' 
                      ? 'Prepararemos una demo personalizada para tu empresa'
                      : 'Te daremos acceso prioritario cuando lancemos'
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => navigate('/')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Volver al Inicio
              </button>
              
              <p className="text-xs text-gray-500">
                ¿Tienes preguntas? Contáctanos en info@talentia.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
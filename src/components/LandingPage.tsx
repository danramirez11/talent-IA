import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, 
  Users, 
  Building2, 
  Zap, 
  Target, 
  FileCheck, 
  Search,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  BarChart3,
  Filter,
  Database,
  Workflow
} from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/coming-soon?type=company');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 shadow-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-white">Tu Match</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#beneficios" className="text-gray-300 hover:text-blue-400 transition-colors">Beneficios</a>
              <a href="#caracteristicas" className="text-gray-300 hover:text-blue-400 transition-colors">Características</a>
              <a href="#como-funciona" className="text-gray-300 hover:text-blue-400 transition-colors">Cómo Funciona</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Plataforma de Reclutamiento Inteligente 
              <span className="block text-blue-600">para PYMEs Colombianas</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Automatiza el filtrado de hojas de vida, prioriza candidatos y reduce hasta el 70% tiempos de selección
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={handleCTAClick}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <Building2 className="h-5 w-5" />
                <span>Solicitar Demo Gratuito</span>
              </button>
              <button 
                onClick={handleCTAClick}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <Zap className="h-5 w-5" />
                <span>Prueba Gratuita 30 Días</span>
              </button>
            </div>

            <p className="text-sm text-gray-400 mt-4">
              💡 Sin compromiso • Integración en 24 horas • Soporte especializado
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transforma tu departamento de RRHH
            </h2>
            <p className="text-xl text-gray-300">
              Automatiza procesos, mejora la calidad de candidatos y reduce costos operativos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-700 rounded-2xl p-8 shadow-xl border border-gray-600">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-bold text-white">Ahorro de Tiempo</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Reduce el tiempo de revisión inicial de CVs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Clasificación automática de candidatos por relevancia</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Eliminación de tareas manuales repetitivas</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-2xl p-8 shadow-xl border border-gray-600">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-8 w-8 text-indigo-600" />
                <h3 className="text-xl font-bold text-white">Mayor Precisión</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">IA que identifica candidatos con mejor fit cultural</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Análisis profundo de habilidades y experiencia</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Reducción de sesgos en el proceso de selección</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-2xl p-8 shadow-xl border border-gray-600">
              <div className="flex items-center space-x-3 mb-6">
                <Database className="h-8 w-8 text-green-600" />
                <h3 className="text-xl font-bold text-white">Integración Total</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Compatible con tu ATS actual sin cambios</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">CVs estandarizados en formato uniforme</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Sincronización automática de datos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={handleCTAClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all"
            >
              Ver Demo en Vivo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Características Avanzadas de la Plataforma
            </h2>
            <p className="text-xl text-gray-300">
              Tecnología de vanguardia diseñada específicamente para departamentos de RRHH
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 border border-blue-500/20">
              <FileCheck className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Estandarización de CVs</h3>
              <p className="text-gray-300">Convierte todos los CVs a un formato uniforme, claro y compatible con tus sistemas internos</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-green-500/20">
              <Filter className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Clasificación Inteligente</h3>
              <p className="text-gray-300">IA que prioriza candidatos según criterios específicos y compatibilidad con el puesto</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-purple-500/20">
              <Workflow className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Integración ATS</h3>
              <p className="text-gray-300">Conecta directamente con tu sistema actual sin interrumpir procesos existentes</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-orange-500/20">
              <BarChart3 className="h-10 w-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Analytics Detallados</h3>
              <p className="text-gray-300">Métricas de rendimiento, tiempo de contratación y calidad de candidatos</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-indigo-500/20">
              <Shield className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Seguridad Empresarial</h3>
              <p className="text-gray-300">Encriptación end-to-end, cumplimiento GDPR y auditorías de seguridad</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-red-500/20">
              <TrendingUp className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Mejora Continua</h3>
              <p className="text-gray-300">Algoritmos que aprenden de tus decisiones para optimizar futuras recomendaciones</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Implementación Simple en 4 Pasos
            </h2>
            <p className="text-xl text-gray-300">
              Proceso de integración rápido y sin interrupciones en tu flujo actual
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-white mb-2">Configuración Inicial</h3>
              <p className="text-gray-300">Define criterios de selección, requisitos específicos y preferencias de tu empresa</p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 text-indigo-600 rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-white mb-2">Integración ATS</h3>
              <p className="text-gray-300">Conectamos la plataforma con tu sistema actual en menos de 24 horas</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 text-green-600 rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-white mb-2">Procesamiento IA</h3>
              <p className="text-gray-300">La IA estandariza CVs entrantes y los clasifica según tus criterios</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 text-purple-600 rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-white mb-2">Resultados Optimizados</h3>
              <p className="text-gray-300">Recibe candidatos priorizados y listos para entrevista en tu dashboard</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={handleCTAClick}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all"
            >
              Comenzar Integración
            </button>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Retorno de Inversión
            </h2>
            <p className="text-xl text-gray-300">
              Construimos una solución que busca alcanzar las siguientes estadísticas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="text-4xl font-bold text-blue-600 mb-2">70%</div>
              <div className="text-lg font-semibold text-white mb-2">Reducción de Tiempo</div>
              <p className="text-gray-300">En revisión manual de candidatos</p>
            </div>

            <div className="text-center bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="text-4xl font-bold text-indigo-600 mb-2">3x</div>
              <div className="text-lg font-semibold text-white mb-2">Mayor Precisión</div>
              <p className="text-gray-300">En identificación de candidatos ideales</p>
            </div>

            <div className="text-center bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="text-4xl font-bold text-green-600 mb-2">45%</div>
              <div className="text-lg font-semibold text-white mb-2">Reducción de Costos</div>
              <p className="text-gray-300">En procesos de reclutamiento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Únete a la revolución del reclutamiento inteligente
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Prueba gratuita por 30 días, sin compromiso.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleCTAClick}
              className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <Building2 className="h-5 w-5" />
              <span>Solicitar Demo Personalizado</span>
            </button>
            <button 
              onClick={handleCTAClick}
              className="bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 border border-blue-500 hover:bg-blue-600"
            >
              <Zap className="h-5 w-5" />
              <span>Comenzar Prueba Gratuita</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Bot className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold">Tu Match</span>
            </div>
            <p className="text-gray-400 mb-4">
              La plataforma de IA que transforma el reclutamiento empresarial
            </p>
            <p className="text-sm text-gray-600">
              © 2025 Tu Match. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Bot, Mail, User, Calendar, Users } from 'lucide-react';

const ComingSoon = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userTypeParam = searchParams.get('type');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    userType: userTypeParam === 'company' ? 'company' : 'student'
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El formato del email no es válido';
    }
    
    if (!formData.firstName) {
      newErrors.firstName = 'El nombre es requerido';
    }
    
    if (!formData.lastName) {
      newErrors.lastName = 'El apellido es requerido';
    }
    
    if (!formData.age) {
      newErrors.age = 'La edad es requerida';
    } else if (isNaN(Number(formData.age)) || Number(formData.age) < 16 || Number(formData.age) > 100) {
      newErrors.age = 'Ingresa una edad válida (16-100)';
    }
    
    if (!formData.gender) {
      newErrors.gender = 'El género es requerido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would normally send the data to your backend
      console.log('Form submitted:', formData);
      setIsSubmitted(true);

      await fetch("https://script.google.com/macros/s/AKfycbxtkbnfBzfwOzcOgemvn2__k5sd_VTL5pehjvYr2tI-94CRsULjzZJRCc7FF-_GXN6k/exec", {
    method: "POST",
    mode: "no-cors", // if you don’t care about response
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

      
      // Reset form after 3 seconds
      /*setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          email: '',
          firstName: '',
          lastName: '',
          age: '',
          gender: '',
          userType: userTypeParam === 'company' ? 'company' : 'student'
        });
      }, 3000);*/
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-gray-800 rounded-2xl shadow-xl p-8 text-center border border-gray-700">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bot className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">¡Registro Exitoso!</h2>
            <p className="text-gray-300 mb-4">
              Te hemos registrado exitosamente. Te notificaremos por email tan pronto como la plataforma esté disponible.
            </p>
            <button
              onClick={() => navigate('/')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Volver al Inicio
            </button>
          </div>
        </div>
      </div>
    );
  }

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
              <span>Volver</span>
            </button>

      <div className="flex items-center justify-center px-4 py-8">
        <div className="max-w-md w-full">
          <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bot className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">
                ¡Ya Casi Estamos Listos!
              </h1>
              <p className="text-gray-300">
                TalentIA está en desarrollo y estará disponible muy pronto. 
                Regístrate para ser el primero en acceder cuando lancemos la plataforma.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* User Type Selector */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tipo de Organización
                </label>
                <select
                  name="userType"
                  value={formData.userType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-gray-700 text-white"
                >
                  <option value="student">Profesional Individual</option>
                  <option value="company">Empresa / Departamento RRHH</option>
                </select>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-gray-700 text-white ${
                      errors.firstName ? 'border-red-500' : 'border-gray-600'
                    }`}
                    placeholder="Tu nombre"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Apellido *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-gray-700 text-white ${
                      errors.lastName ? 'border-red-500' : 'border-gray-600'
                    }`}
                    placeholder="Tu apellido"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Corporativo *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-gray-700 text-white ${
                      errors.email ? 'border-red-500' : 'border-gray-600'
                    }`}
                    placeholder="tu@empresa.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Age and Gender */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Edad *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      min="16"
                      max="100"
                      className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-gray-700 text-white ${
                        errors.age ? 'border-red-500' : 'border-gray-600'
                      }`}
                      placeholder="25"
                    />
                  </div>
                  {errors.age && (
                    <p className="text-red-500 text-xs mt-1">{errors.age}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Género *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-gray-700 text-white ${
                        errors.gender ? 'border-red-500' : 'border-gray-600'
                      }`}
                    >
                      <option value="">Seleccionar</option>
                      <option value="masculino">Masculino</option>
                      <option value="femenino">Femenino</option>
                      <option value="no-binario">No binario</option>
                      <option value="prefiero-no-decir">Prefiero no decir</option>
                    </select>
                  </div>
                  {errors.gender && (
                    <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Users className="h-5 w-5" />
                <span>Solicitar Acceso Anticipado</span>
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Al registrarte, aceptas recibir información sobre el lanzamiento de TalentIA y demos exclusivos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
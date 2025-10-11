import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavHome from '../../components/common/NavHome';
import FooterHome from '../../components/common/FooterHome';
import { useAuthStore } from '../../store/useAuthStore';
import { useToast } from '../../hooks/useToast';
import ToastContainer from '../../components/common/ToastContainer';
import Loading from '../../components/common/Loading';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../config/firebase.config';

const RegisterPage = () => {
	const navigate = useNavigate();
	const { addToast, toasts, removeToast } = useToast();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const [errors, setErrors] = useState({});

	const { register, loginWithGoogle, isLoading, error, clearError } = useAuthStore();
	useEffect(() => {
		if (error) {
			addToast(error, 'error');
			clearError();
		}
	}, [error, addToast, clearError]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
		
		// Limpiar error del campo cuando el usuario empiece a escribir
		if (errors[name]) {
			setErrors({
				...errors,
				[name]: ''
			});
		}
	};

	const validateForm = () => {
		const newErrors = {};

		// Validar nombre
		if (!formData.name.trim()) {
			newErrors.name = 'El nombre es requerido';
		} else if (formData.name.trim().length < 2) {
			newErrors.name = 'El nombre debe tener al menos 2 caracteres';
		}

		// Validar email
		if (!formData.email.trim()) {
			newErrors.email = 'El email es requerido';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'El email no es válido';
		}

		// Validar contraseña
		if (!formData.password) {
			newErrors.password = 'La contraseña es requerida';
		} else if (formData.password.length < 6) {
			newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
		}

		// Validar confirmación de contraseña
		if (!formData.confirmPassword) {
			newErrors.confirmPassword = 'Confirma tu contraseña';
		} else if (formData.password !== formData.confirmPassword) {
			newErrors.confirmPassword = 'Las contraseñas no coinciden';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		if (validateForm()) {
			try {
				await register(formData.name, formData.email, formData.password, formData.confirmPassword);
				addToast('¡Registro exitoso! Bienvenido a TodoApp', 'success');
				setFormData({
					name: '',
					email: '',
					password: '',
					confirmPassword: ''
				});
				setErrors({});
				navigate('/login');
			} catch (error) {
				addToast('Error al registrar:', error, 'error');
			}
		}
	};

	const handleGoogleLogin = async () => {
		try {
			const provider = new GoogleAuthProvider();
			const result = await signInWithPopup(auth, provider);
			const idToken = await result.user.getIdToken();
			await loginWithGoogle(idToken);
			navigate('/dashboard');
		} catch (error) {
			console.error('Error en registro con Google:', error);
		}
	};

	return (
		<>
			<NavHome />
				<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl w-full">
					<div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
						<div className="grid lg:grid-cols-2 min-h-[600px]">
							{/* Columna Izquierda - Bienvenida */}
							<div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 lg:p-12 flex flex-col justify-center text-white">
								<div className="text-center lg:text-left">
									<h1 className="text-4xl lg:text-5xl font-bold mb-6">
										¡Únete a TodoApp!
									</h1>
									<p className="text-xl lg:text-2xl text-indigo-100 mb-8 leading-relaxed">
										Crea tu cuenta y comienza a organizar tus tareas de manera eficiente. 
										Forma parte de nuestra comunidad de usuarios productivos.
									</p>
									
									<div className="space-y-4">
										<div className="flex items-center space-x-3">
											<div className="w-8 h-8 bg-black bg-opacity-20 rounded-full flex items-center justify-center">
												<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
												</svg>
											</div>
											<span className="text-indigo-100">Registro completamente gratuito</span>
										</div>
										
										<div className="flex items-center space-x-3">
											<div className="w-8 h-8 bg-black bg-opacity-20 rounded-full flex items-center justify-center">
												<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
												</svg>
											</div>
											<span className="text-indigo-100">Acceso inmediato a todas las funciones</span>
										</div>
										
										<div className="flex items-center space-x-3">
											<div className="w-8 h-8 bg-black bg-opacity-20 rounded-full flex items-center justify-center">
												<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
												</svg>
											</div>
											<span className="text-indigo-100">Soporte técnico incluido</span>
										</div>
									</div>

									<div className="mt-8 pt-8 border-t border-white border-opacity-20">
									<p className="text-indigo-100 mb-4">
										¿Quieres conocer más de TodoApp?
									</p>
									<Link
										to="/"
										className="inline-block bg-black bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 border border-white border-opacity-30"
									>
										Ver más
									</Link>
								</div>
								</div>
							</div>

							{/* Columna Derecha - Formulario */}
							{isLoading && <Loading />}
							{!isLoading && (
							<div className="p-8 lg:p-12 flex flex-col justify-center">
								<div className="w-full max-w-md mx-auto">
									<div className="text-center mb-8">
										<h2 className="text-3xl font-bold text-gray-900 mb-2">
											Crear Cuenta
										</h2>
										<p className="text-gray-600">
											Completa el formulario para registrarte
										</p>
									</div>

									<form onSubmit={handleSubmit} className="space-y-6">
										<div>
											<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
												Nombre Completo
											</label>
											<input
												type="text"
												id="name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												required
												className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 ${
													errors.name ? 'border-red-500' : 'border-gray-300'
												}`}
												placeholder="Tu nombre completo"
											/>
											{errors.name && (
												<p className="mt-1 text-sm text-red-600">{errors.name}</p>
											)}
										</div>

										<div>
											<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
												Correo Electrónico
											</label>
											<input
												type="email"
												id="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												required
												className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 ${
													errors.email ? 'border-red-500' : 'border-gray-300'
												}`}
												placeholder="tu@email.com"
											/>
											{errors.email && (
												<p className="mt-1 text-sm text-red-600">{errors.email}</p>
											)}
										</div>

										<div>
											<label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
												Contraseña
											</label>
											<input
												type="password"
												id="password"
												name="password"
												value={formData.password}
												onChange={handleChange}
												required
												className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 ${
													errors.password ? 'border-red-500' : 'border-gray-300'
												}`}
												placeholder="••••••••"
											/>
											{errors.password && (
												<p className="mt-1 text-sm text-red-600">{errors.password}</p>
											)}
										</div>

										<div>
											<label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
												Confirmar Contraseña
											</label>
											<input
												type="password"
												id="confirmPassword"
												name="confirmPassword"
												value={formData.confirmPassword}
												onChange={handleChange}
												required
												className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 ${
													errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
												}`}
												placeholder="••••••••"
											/>
											{errors.confirmPassword && (
												<p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
											)}
										</div>

										<div className="flex items-center">
											<input
												id="terms"
												name="terms"
												type="checkbox"
												required
												className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
											/>
											<label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
												Acepto los{' '}
												<Link to="/terms" className="text-indigo-600 hover:text-indigo-500">
													términos y condiciones
												</Link>{' '}
												y la{' '}
												<Link to="/privacy" className="text-indigo-600 hover:text-indigo-500">
													política de privacidad
												</Link>
											</label>
										</div>

										<button
											type="submit"
											className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
										>
											Crear Cuenta
										</button>
									</form>

									<div className="mt-8 text-center">
										<p className="text-sm text-gray-600">
											¿Ya tienes cuenta?{' '}
											<Link
												to="/login"
												className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
											>
												Inicia sesión aquí
											</Link>
										</p>
									</div>

									<div className="mt-6">
										<div className="relative">
											<div className="absolute inset-0 flex items-center">
												<div className="w-full border-t border-gray-300" />
											</div>
											<div className="relative flex justify-center text-sm">
												<span className="px-2 bg-white text-gray-500">O regístrate con</span>
											</div>
										</div>

										<div className="mt-6 grid grid-cols-2 gap-3">
											<button
												type="button"
												onClick={handleGoogleLogin}
												className="w-full inline-flex justify-center items-center py-3 px-4 border-2 border-indigo-200 rounded-lg shadow-md bg-white text-sm font-semibold text-gray-700 hover:bg-indigo-50 hover:border-indigo-400 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
											>
												<svg className="w-5 h-5" viewBox="0 0 24 24">
													<path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
													<path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
													<path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
													<path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
												</svg>
												<span className="ml-2">Google</span>
											</button>

											<button
												type="button"
												className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200"
											>
												<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
													<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
												</svg>
												<span className="ml-2">Facebook</span>
											</button>
										</div>
									</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			

			<ToastContainer toasts={toasts} onRemove={removeToast} />
			<FooterHome />
		</>
	);
};

export default RegisterPage;
import React from 'react';
import { useAuthStore } from '../../store/useAuthStore';

const ProfilePage = () => {
	const { user, logout } = useAuthStore();

	const handleLogout = () => {
		logout();
	};

	return (
		<div className="min-h-screen bg-gray-50 py-12">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="bg-white rounded-lg shadow-lg p-8">
					<div className="text-center mb-8">
						<div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
						</div>
						<h1 className="text-3xl font-bold text-gray-900">Mi Perfil</h1>
						<p className="text-gray-600 mt-2">Gestiona tu información personal</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{/* Información del Usuario */}
						<div className="space-y-6">
							<div>
								<h2 className="text-xl font-semibold text-gray-900 mb-4">Información Personal</h2>
								<div className="space-y-4">
									<div>
										<label className="block text-sm font-medium text-gray-700">Nombre</label>
										<p className="mt-1 text-sm text-gray-900">{user?.name || 'No especificado'}</p>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700">Email</label>
										<p className="mt-1 text-sm text-gray-900">{user?.email || 'No especificado'}</p>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700">Fecha de Registro</label>
										<p className="mt-1 text-sm text-gray-900">
											{user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'No disponible'}
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Acciones */}
						<div className="space-y-6">
							<div>
								<h2 className="text-xl font-semibold text-gray-900 mb-4">Acciones</h2>
								<div className="space-y-4">
									<button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
										Editar Perfil
									</button>
									<button className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
										Cambiar Contraseña
									</button>
									<button 
										onClick={handleLogout}
										className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
									>
										Cerrar Sesión
									</button>
								</div>
							</div>

							<div>
								<h2 className="text-xl font-semibold text-gray-900 mb-4">Estadísticas</h2>
								<div className="grid grid-cols-2 gap-4">
									<div className="bg-gray-50 p-4 rounded-lg text-center">
										<div className="text-2xl font-bold text-indigo-600">0</div>
										<div className="text-sm text-gray-600">Tareas Completadas</div>
									</div>
									<div className="bg-gray-50 p-4 rounded-lg text-center">
										<div className="text-2xl font-bold text-green-600">0</div>
										<div className="text-sm text-gray-600">Tareas Pendientes</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
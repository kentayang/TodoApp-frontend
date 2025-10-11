import React from 'react';
import { useAuthStore } from '../../store/useAuthStore';
import DashboardLayout from '../../components/layout/DashboardLayout';

const ProfilePage = () => {
	const { user } = useAuthStore();

	return (
		<DashboardLayout>
			<div className="max-w-4xl mx-auto">
				<div className="bg-white rounded-xl shadow-md border border-gray-100 p-8">
					<div className="text-center mb-8">
						<div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
							<span className="text-white font-bold text-3xl">
								{user?.name?.charAt(0).toUpperCase() || 'U'}
							</span>
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
								</div>
							</div>

						
						</div>
					</div>
				</div>
			</div>
		</DashboardLayout>
	);
};

export default ProfilePage;
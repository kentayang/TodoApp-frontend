import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore'

const DashboardPage = () => {
	const { user, logout } = useAuthStore();

	const handleLogout = () => {
		logout();
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<header className="bg-white shadow-sm border-b border-gray-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						<div className="flex items-center">
							<h1 className="text-2xl font-bold text-gray-900">TodoApp</h1>
						</div>
						<div className="flex items-center space-x-4">
							<Link
								to="/profile"
								className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
							>
								Mi Perfil
							</Link>
							<button
								onClick={handleLogout}
								className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
							>
								Cerrar Sesión
							</button>
						</div>
					</div>
				</div>
			</header>

			{/* Contenido Principal */}
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="mb-8">
					<h2 className="text-3xl font-bold text-gray-900 mb-2">
						¡Bienvenido, {user?.name || 'Usuario'}!
					</h2>
					<p className="text-gray-600">
						Gestiona tus tareas de manera eficiente desde tu panel de control.
					</p>
				</div>

				{/* Estadísticas */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
					<div className="bg-white rounded-lg shadow p-6">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								<div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
									<svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<p className="text-sm font-medium text-gray-500">Total de Tareas</p>
								<p className="text-2xl font-semibold text-gray-900">0</p>
							</div>
						</div>
					</div>

					<div className="bg-white rounded-lg shadow p-6">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								<div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
									<svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<p className="text-sm font-medium text-gray-500">Completadas</p>
								<p className="text-2xl font-semibold text-gray-900">0</p>
							</div>
						</div>
					</div>

					<div className="bg-white rounded-lg shadow p-6">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								<div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
									<svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<p className="text-sm font-medium text-gray-500">Pendientes</p>
								<p className="text-2xl font-semibold text-gray-900">0</p>
							</div>
						</div>
					</div>
				</div>

				{/* Acciones Rápidas */}
				<div className="bg-white rounded-lg shadow p-6">
					<h3 className="text-lg font-semibold text-gray-900 mb-4">Acciones Rápidas</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						<button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200">
							+ Nueva Tarea
						</button>
						<button className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200">
							Ver Todas las Tareas
						</button>
						<button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200">
							Configuración
						</button>
						<Link
							to="/profile"
							className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 text-center"
						>
							Mi Perfil
						</Link>
					</div>
				</div>

				{/* Lista de Tareas Recientes */}
				<div className="mt-8 bg-white rounded-lg shadow">
					<div className="px-6 py-4 border-b border-gray-200">
						<h3 className="text-lg font-semibold text-gray-900">Tareas Recientes</h3>
					</div>
					<div className="p-6">
						<div className="text-center text-gray-500 py-8">
							<svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
							</svg>
							<p className="text-lg font-medium">No hay tareas aún</p>
							<p className="text-sm">Crea tu primera tarea para comenzar a organizarte</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default DashboardPage;
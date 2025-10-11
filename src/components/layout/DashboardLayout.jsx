import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => {
	const navigate = useNavigate();
	const { user, logout } = useAuthStore();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const handleLogout = async () => {
		await logout();
		navigate('/');
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
			{/* Sidebar */}
			<Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

			{/* Main Content Area */}
			<div className="flex-1 flex flex-col min-h-screen lg:ml-0">
				{/* Header */}
				<header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
					<div className="px-4 sm:px-6 lg:px-8">
						<div className="flex justify-between items-center h-16">
							{/* Botón menú hamburguesa (móvil) */}
							<button
								onClick={() => setIsSidebarOpen(true)}
								className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
							>
								<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</button>

							{/* Título de página o breadcrumbs (opcional) */}
							<div className="flex-1 lg:ml-6">
								<h2 className="text-lg font-semibold text-gray-800 hidden sm:block">
									Panel de Control
								</h2>
							</div>

							{/* User Info y Logout */}
							<div className="flex items-center space-x-3">
								<div className="hidden md:flex items-center space-x-3 px-3 py-2 bg-gray-50 rounded-lg">
									<div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
										<span className="text-white font-semibold text-sm">
											{user?.name?.charAt(0).toUpperCase() || 'U'}
										</span>
									</div>
									<div className="text-sm">
										<p className="font-medium text-gray-900">{user?.name || 'Usuario'}</p>
										<p className="text-gray-500 text-xs">{user?.email || ''}</p>
									</div>
								</div>
								
								<button
									onClick={handleLogout}
									className="flex items-center space-x-2 bg-red-50 hover:bg-red-100 text-red-600 px-3 py-2 rounded-lg font-medium transition-all duration-200 border border-red-200"
									title="Cerrar Sesión"
								>
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
									</svg>
									<span className="hidden sm:inline">Salir</span>
								</button>
							</div>
						</div>
					</div>
				</header>

				{/* Main Content */}
				<main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 overflow-y-auto">
					<div className="max-w-7xl mx-auto">
						{children}
					</div>
				</main>

				{/* Footer */}
				<footer className="bg-white border-t border-gray-200 mt-auto">
					<div className="px-4 sm:px-6 lg:px-8 py-4">
						<div className="text-center text-gray-500 text-xs">
							<p>© 2025 TodoApp. Todos los derechos reservados.</p>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default DashboardLayout;


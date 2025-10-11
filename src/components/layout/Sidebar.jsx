import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
	const location = useLocation();

	const navigation = [
		{ 
			name: 'Dashboard', 
			href: '/dashboard', 
			icon: (
				<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
				</svg>
			)
		},
		{ 
			name: 'Mi Perfil', 
			href: '/profile', 
			icon: (
				<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
				</svg>
			)
		},
	];

	const isActive = (path) => location.pathname === path;

	return (
		<>
			{/* Overlay para móvil */}
			{isOpen && (
				<div 
					className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
					onClick={onClose}
				/>
			)}

			{/* Sidebar */}
			<aside 
				className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} w-64 flex flex-col shadow-lg lg:shadow-none`}
			>
				{/* Logo Section */}
				<div className="h-16 flex items-center justify-between px-6 border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50">
					<Link to="/dashboard" className="flex items-center space-x-2">
						<div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
							<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
							</svg>
						</div>
						<span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
							TodoApp
						</span>
					</Link>
					
					{/* Botón cerrar para móvil */}
					<button 
						onClick={onClose}
						className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
					>
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				{/* Navigation */}
				<nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
					<div className="mb-4">
						<p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
							Menú Principal
						</p>
					</div>
					
					{navigation.map((item) => (
						<Link
							key={item.name}
							to={item.href}
							onClick={() => onClose()}
							className={`flex items-center space-x-3 px-3 py-3 rounded-lg font-medium transition-all duration-200 ${
								isActive(item.href)
									? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
									: 'text-gray-700 hover:bg-gray-100'
							}`}
						>
							<span className={isActive(item.href) ? 'text-white' : 'text-gray-500'}>
								{item.icon}
							</span>
							<span>{item.name}</span>
						</Link>
					))}

					{/* Sección futura para más opciones */}
					<div className="mt-8 pt-4 border-t border-gray-200">
						<p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
							Configuración
						</p>
						
						<button
							className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-all duration-200"
						>
							<svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
							<span>Configuración</span>
						</button>
					</div>
				</nav>

				{/* Footer del Sidebar */}
				<div className="p-4 border-t border-gray-200 bg-gray-50">
					<div className="text-center text-xs text-gray-500">
						<p>© 2025 TodoApp</p>
					</div>
				</div>
			</aside>
		</>
	);
};

export default Sidebar;


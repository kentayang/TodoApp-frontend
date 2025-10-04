import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

const ProtectedRoute = ({ children }) => {
	const { isLoggedIn, isLoading } = useAuthStore();
	const location = useLocation();

	// Mostrar loading mientras se verifica la autenticación
	if (isLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-gray-50">
				<div className="text-center">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
					<p className="mt-4 text-gray-600">Verificando autenticación...</p>
				</div>
			</div>
		);
	}

	// Si no está autenticado, redirigir al login con la ubicación actual
	if (!isLoggedIn) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	// Si está autenticado, mostrar el componente hijo
	return children;
};

export default ProtectedRoute;

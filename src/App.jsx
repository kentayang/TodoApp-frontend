
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/main/HomePage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage'
import DashboardPage from './pages/dashboard/DashboardPage'
import ProfilePage from './pages/dashboard/ProfilePage'
import ProtectedRoute from './components/common/ProtectedRoute'

function App() {
	return (
		<Routes>
			{/* Rutas públicas */}
			<Route path="/" element={<HomePage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/forgot-password" element={<ForgotPasswordPage />} />
			
			{/* Rutas protegidas */}
			<Route 
				path="/dashboard" 
				element={
					<ProtectedRoute>
						<DashboardPage />
					</ProtectedRoute>
				} 
			/>
			<Route 
				path="/profile" 
				element={
					<ProtectedRoute>
						<ProfilePage />
					</ProtectedRoute>
				} 
			/>
		</Routes>
	)
}

export default App

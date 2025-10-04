import React from 'react'
import { Link } from 'react-router-dom'

const NavHome = () => {
  return (
    <>
    <nav className="bg-white shadow-sm border-b border-gray-200 w-full">
				<div className="w-full px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						<div className="flex items-center">
							<Link to="/">
								
							<h1 className="text-2xl font-bold text-gray-900">TodoApp</h1>
							</Link>
						</div>
						<div className="flex items-center space-x-4">
							<Link
								to="/login"
								className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
							>
								Iniciar Sesión
							</Link>
						</div>
					</div>
				</div>
			</nav>
    </>
  )
}

export default NavHome
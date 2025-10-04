import React from 'react'
import { Link } from 'react-router-dom'

const CallToActionHome = () => {
  return (
    <>
    <div className="text-center my-16">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						¿Listo para ser más productivo?
					</h2>
					<p className="text-lg text-gray-600 mb-8">
						Únete a miles de usuarios que ya están organizando sus tareas con TodoApp
					</p>
					<Link
						to="/login"
						className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 inline-block"
					>
						Crear Cuenta Gratis
					</Link>
				</div>
    </>
  )
}

export default CallToActionHome
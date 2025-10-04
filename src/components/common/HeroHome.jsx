import React from 'react'
import { Link } from 'react-router-dom'

const HeroHome = () => {
  return (
        <>
        <div className="text-center my-16">
					<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
						Organiza tus tareas de manera
						<span className="text-indigo-600"> inteligente</span>
					</h1>
					<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
						TodoApp te ayuda a gestionar tus tareas diarias de forma eficiente. 
						Crea, edita y completa tus tareas con una interfaz simple y profesional.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							to="/login"
							className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
						>
							Comenzar Ahora
						</Link>
						<button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200">
							Ver Demo
						</button>
					</div>
				</div>
        </>
  )
}

export default HeroHome
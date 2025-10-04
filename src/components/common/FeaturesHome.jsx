import React from 'react'

const FeaturesHome = () => {
  return (
    <>
    <div className="grid md:grid-cols-3 gap-8 my-16">
					<div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
						<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
							<svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
							</svg>
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-4">Crear Tareas</h3>
						<p className="text-gray-600">
							Registra nuevas tareas de forma rápida y sencilla. 
							Organiza tu trabajo con descripciones claras y fechas límite.
						</p>
					</div>

					<div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
						<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
							<svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
							</svg>
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-4">Editar Tareas</h3>
						<p className="text-gray-600">
							Modifica tus tareas existentes en cualquier momento. 
							Actualiza descripciones, fechas y prioridades según tus necesidades.
						</p>
					</div>

					<div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
						<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
							<svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-4">Completar Tareas</h3>
						<p className="text-gray-600">
							Marca tus tareas como completadas y mantén un registro de tu progreso. 
							Visualiza tu productividad de manera clara.
						</p>
					</div>
				</div>
    </>
  )
}

export default FeaturesHome
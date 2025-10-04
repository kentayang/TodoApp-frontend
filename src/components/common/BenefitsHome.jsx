import React from 'react'

const BenefitsHome = () => {
  return (
    <>
    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
					<div className="text-center my-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							¿Por qué elegir TodoApp?
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Una solución completa para la gestión de tareas que se adapta a tu estilo de trabajo
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 my-16">
						<div className="space-y-6">
							<div className="flex items-start space-x-4">
								<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
									<svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
								</div>
								<div>
									<h4 className="font-semibold text-gray-900">Interfaz Intuitiva</h4>
									<p className="text-gray-600">Diseño limpio y fácil de usar que no requiere aprendizaje</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
									<svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
								</div>
								<div>
									<h4 className="font-semibold text-gray-900">Acceso Personalizado</h4>
									<p className="text-gray-600">Cada usuario tiene su propio espacio de trabajo seguro</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
									<svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
								</div>
								<div>
									<h4 className="font-semibold text-gray-900">Sincronización en Tiempo Real</h4>
									<p className="text-gray-600">Tus cambios se guardan automáticamente</p>
								</div>
							</div>
						</div>

						<div className="space-y-6">
							<div className="flex items-start space-x-4">
								<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
									<svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
								</div>
								<div>
									<h4 className="font-semibold text-gray-900">Organización Eficiente</h4>
									<p className="text-gray-600">Mantén todas tus tareas organizadas en un solo lugar</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
									<svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
								</div>
								<div>
									<h4 className="font-semibold text-gray-900">Seguimiento de Progreso</h4>
									<p className="text-gray-600">Visualiza tu avance y mantén la motivación</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
									<svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
								</div>
								<div>
									<h4 className="font-semibold text-gray-900">Acceso Multiplataforma</h4>
									<p className="text-gray-600">Funciona en cualquier dispositivo con conexión a internet</p>
								</div>
							</div>
						</div>
					</div>
				</div>
    </>
  )
}

export default BenefitsHome
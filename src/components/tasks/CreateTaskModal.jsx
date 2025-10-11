import React, { useState } from 'react';

const CreateTaskModal = ({ isOpen, onClose, onCreateTask }) => {
	const [formData, setFormData] = useState({
		title: '',
		description: ''
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		if (!formData.title.trim()) {
			alert('El título es requerido');
			return;
		}

		setIsSubmitting(true);
		try {
			await onCreateTask(formData);
			// Limpiar formulario y cerrar modal
			setFormData({ title: '', description: '' });
			onClose();
		} catch (error) {
			console.error('Error creating task:', error);
			alert('Error al crear la tarea');
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleClose = () => {
		setFormData({ title: '', description: '' });
		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 overflow-y-auto">
			{/* Overlay */}
			<div 
				className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
				onClick={handleClose}
			/>
			
			{/* Modal */}
			<div className="flex min-h-full items-center justify-center p-4">
				<div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full p-6 transform transition-all">
					{/* Header */}
					<div className="flex items-center justify-between mb-6">
						<h2 className="text-2xl font-bold text-gray-900">Nueva Tarea</h2>
						<button
							onClick={handleClose}
							className="text-gray-400 hover:text-gray-600 transition-colors"
						>
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>

					{/* Form */}
					<form onSubmit={handleSubmit} className="space-y-4">
						{/* Title */}
						<div>
							<label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
								Título <span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								id="title"
								name="title"
								value={formData.title}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
								placeholder="Ej: Completar proyecto"
								disabled={isSubmitting}
							/>
						</div>

						{/* Description */}
						<div>
							<label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
								Descripción
							</label>
							<textarea
								id="description"
								name="description"
								value={formData.description}
								onChange={handleChange}
								rows={4}
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 resize-none"
								placeholder="Describe los detalles de la tarea..."
								disabled={isSubmitting}
							/>
						</div>

						{/* Buttons */}
						<div className="flex space-x-3 pt-4">
							<button
								type="button"
								onClick={handleClose}
								className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
								disabled={isSubmitting}
							>
								Cancelar
							</button>
							<button
								type="submit"
								disabled={isSubmitting}
								className="flex-1 px-4 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{isSubmitting ? 'Creando...' : 'Crear Tarea'}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CreateTaskModal;


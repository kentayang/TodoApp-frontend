import React from 'react';
import { useTaskStore } from '../../store/useTaskStore';
import { useAuthStore } from '../../store/useAuthStore';

const TaskTable = () => {
	const { tasks, isLoading, updateTask, deleteTask } = useTaskStore();
	const { user } = useAuthStore();
	
	// Obtener userId del objeto user
	const userId = user?.userId;

	const handleToggleComplete = async (task) => {
		await updateTask(userId, task.id, !task.completed);
	};

	const handleDelete = async (task) => {
		if (window.confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
			await deleteTask(userId, task.id);
		}
	};

	const formatDate = (dateObj) => {
		if (!dateObj) return 'N/A';
		
		// Si es un objeto de Firebase Timestamp con _seconds
		if (dateObj._seconds) {
			const date = new Date(dateObj._seconds * 1000);
			return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
		}
		
		// Si es un string ISO normal
		const date = new Date(dateObj);
		return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
	};

	if (isLoading) {
		return (
			<div className="flex justify-center items-center py-12">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
			</div>
		);
	}

	if (!tasks || tasks.length === 0) {
		return (
			<div className="text-center text-gray-500 py-12">
				<div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
					<svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
					</svg>
				</div>
				<p className="text-lg font-semibold text-gray-900 mb-1">No hay tareas aún</p>
				<p className="text-sm text-gray-500">Crea tu primera tarea para comenzar a organizarte</p>
			</div>
		);
	}

	return (
		<div className="overflow-x-auto">
			<table className="min-w-full divide-y divide-gray-200">
				<thead className="bg-gradient-to-r from-gray-50 to-white">
					<tr>
						<th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
							Título
						</th>
						<th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden md:table-cell">
							Descripción
						</th>
						<th scope="col" className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
							Estado
						</th>
						<th scope="col" className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider hidden sm:table-cell">
							Fecha
						</th>
						<th scope="col" className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
							Acciones
						</th>
					</tr>
				</thead>
				<tbody className="bg-white divide-y divide-gray-200">
					{tasks.map((task) => (
						<tr key={task.id} className="hover:bg-gray-50 transition-colors duration-150">
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="flex items-center">
									<div className={`text-sm font-medium ${task.completed ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
										{task.title}
									</div>
								</div>
							</td>
							<td className="px-6 py-4 hidden md:table-cell">
								<div className={`text-sm ${task.completed ? 'text-gray-400' : 'text-gray-600'} max-w-xs truncate`}>
									{task.description || 'Sin descripción'}
								</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-center">
								{task.completed ? (
									<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
										<svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
										</svg>
										Completada
									</span>
								) : (
									<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
										<svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
										</svg>
										Pendiente
									</span>
								)}
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center hidden sm:table-cell">
								{formatDate(task.creationDate)}
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-center">
								<div className="flex items-center justify-center space-x-2">
									<button
										onClick={() => handleToggleComplete(task)}
										className={`p-2 rounded-lg transition-all duration-200 ${
											task.completed
												? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
												: 'bg-green-100 text-green-600 hover:bg-green-200'
										}`}
										title={task.completed ? 'Marcar como pendiente' : 'Marcar como completada'}
									>
										<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
										</svg>
									</button>
									<button
										onClick={() => handleDelete(task)}
										className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-all duration-200"
										title="Eliminar tarea"
									>
										<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
										</svg>
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TaskTable;


import React, { useEffect, useState } from 'react';
import { useAuthStore } from '../../store/useAuthStore';
import { useTaskStore } from '../../store/useTaskStore';
import DashboardLayout from '../../components/layout/DashboardLayout';
import TaskTable from '../../components/tasks/TaskTable';
import CreateTaskModal from '../../components/tasks/CreateTaskModal';

const DashboardPage = () => {
	const { user } = useAuthStore();
	const { tasks, getTasks, createTask } = useTaskStore();
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		if (user?.userId) {
			getTasks(user.userId);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	// Calcular estadísticas
	const totalTasks = tasks?.length || 0;
	const completedTasks = tasks?.filter(task => task.completed)?.length || 0;
	const pendingTasks = totalTasks - completedTasks;

	const handleCreateTask = async (taskData) => {
		await createTask(user.userId, taskData);
	};

	const handleRefreshTasks = () => {
		if (user?.userId) {
			getTasks(user.userId);
		}
	};

	return (
		<DashboardLayout>
				<div className="mb-8">
					<h2 className="text-3xl font-bold text-gray-900 mb-2">
						¡Bienvenido, {user?.name || 'Usuario'}!
					</h2>
					<p className="text-gray-600">
						Gestiona tus tareas de manera eficiente desde tu panel de control.
					</p>
				</div>

				{/* Estadísticas */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
					<div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-200">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
									<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
									</svg>
								</div>
							</div>
						<div className="ml-4">
							<p className="text-sm font-medium text-gray-500">Total de Tareas</p>
							<p className="text-3xl font-bold text-gray-900">{totalTasks}</p>
						</div>
						</div>
					</div>

					<div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-200">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								<div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
									<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
							</div>
						<div className="ml-4">
							<p className="text-sm font-medium text-gray-500">Completadas</p>
							<p className="text-3xl font-bold text-gray-900">{completedTasks}</p>
						</div>
						</div>
					</div>

					<div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-200">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								<div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
									<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
							</div>
						<div className="ml-4">
							<p className="text-sm font-medium text-gray-500">Pendientes</p>
							<p className="text-3xl font-bold text-gray-900">{pendingTasks}</p>
						</div>
						</div>
					</div>
				</div>

				{/* Acciones Rápidas */}
				<div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
					<h3 className="text-lg font-semibold text-gray-900 mb-4">Acciones Rápidas</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<button 
							onClick={() => setIsModalOpen(true)}
							className="flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-6 py-4 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
						>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
							</svg>
							<span>Nueva Tarea</span>
						</button>
						<button 
							onClick={handleRefreshTasks}
							className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-4 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
						>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
							</svg>
							<span>Actualizar Tareas</span>
						</button>
					</div>
				</div>

				{/* Lista de Tareas */}
				<div className="mt-8 bg-white rounded-xl shadow-md border border-gray-100">
					<div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white rounded-t-xl">
						<h3 className="text-lg font-semibold text-gray-900">Mis Tareas</h3>
					</div>
					<div className="p-6">
						<TaskTable />
					</div>
				</div>

			{/* Modal de Crear Tarea */}
			<CreateTaskModal 
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onCreateTask={handleCreateTask}
			/>
		</DashboardLayout>
	);
};

export default DashboardPage;
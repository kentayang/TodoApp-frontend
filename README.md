# 📝 TodoApp - Frontend

> Aplicación web moderna de gestión de tareas construida con React, Vite y Firebase. Proyecto educativo para estudiantes de desarrollo web.

![React](https://img.shields.io/badge/React-19.1.1-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.7-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.14-cyan)
![Firebase](https://img.shields.io/badge/Firebase-Latest-orange)

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Funcionalidades Detalladas](#-funcionalidades-detalladas)
- [API Backend](#-api-backend)

## ✨ Características

### Autenticación
- 🔐 **Login con Email/Password**: Sistema tradicional de autenticación
- 🌐 **Login con Google**: Autenticación OAuth usando Firebase
- 📝 **Registro de usuarios**: Crear cuenta nueva con validación
- 🍪 **Sesión persistente**: JWT almacenado en cookies HTTP-only

### Gestión de Tareas
- ➕ **Crear tareas**: Modal intuitivo con título y descripción
- ✅ **Marcar como completada**: Toggle rápido con un clic
- 🗑️ **Eliminar tareas**: Con confirmación de seguridad
- 📊 **Estadísticas en tiempo real**: Total, Completadas y Pendientes
- 🔄 **Actualización manual**: Botón para refrescar la lista

### Interfaz de Usuario
- 🎨 **Diseño moderno**: UI profesional con Tailwind CSS
- 📱 **Responsive**: Adaptado para móvil, tablet y desktop
- 🌙 **Sidebar lateral**: Navegación fácil e intuitiva
- 📈 **Dashboard informativo**: Vista completa del estado de tareas

## 🛠️ Tecnologías

### Core
- **React 19.1.1**: Biblioteca de interfaz de usuario
- **Vite 7.1.7**: Build tool y dev server ultrarrápido
- **React Router 7.9.3**: Navegación entre páginas

### Estilos
- **Tailwind CSS 4.1.14**: Framework CSS utility-first
- **@tailwindcss/vite**: Plugin de Tailwind para Vite

### Estado y Datos
- **Zustand 5.0.8**: Gestión de estado global simple
- **Firebase SDK**: Autenticación con Google

### Desarrollo
- **ESLint**: Linter para mantener código limpio
- **Vite SWC**: Compilador rápido para React

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** o **yarn**
- **Git**
- Cuenta de **Firebase** (para autenticación con Google)
- **Backend de TodoApp** corriendo (ver repositorio del backend)

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/TodoApp-frontend.git
cd TodoApp-frontend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
# URL del Backend API
VITE_API_URL=http://localhost:3000/api

# Configuración de Firebase (obtener de Firebase Console)
VITE_FIREBASE_API_KEY=tu-api-key-aqui
VITE_FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu-proyecto-id
```

### 4. Iniciar el servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## ⚙️ Configuración

### Configuración de Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. En **Authentication**, habilita el proveedor de **Google**
4. Ve a **Project Settings** → **General** → **Your apps**
5. Registra una aplicación web si no existe
6. Copia las credenciales y pégalas en tu archivo `.env`

### Configuración del Backend

Asegúrate de que tu backend esté corriendo y tenga configurado:

```javascript
// Configuración CORS necesaria en el backend
cors({
  origin: 'http://localhost:5173',
  credentials: true
})
```

## 💻 Uso

### 1. Registro de Usuario

1. Abre `http://localhost:5173`
2. Haz clic en "Regístrate aquí"
3. Completa el formulario:
   - Nombre completo
   - Email
   - Contraseña (mínimo 6 caracteres)
   - Confirmar contraseña
4. Acepta términos y condiciones
5. Haz clic en "Crear Cuenta"

**Alternativa**: Usa "Google" para registro rápido con tu cuenta de Google

### 2. Iniciar Sesión

1. Ingresa tu email y contraseña
2. (Opcional) Marca "Recordarme"
3. Haz clic en "Iniciar Sesión"

**O**: Usa el botón "Google" para login con Google

### 3. Dashboard

Una vez autenticado, verás:

- **Estadísticas**: 3 tarjetas con Total, Completadas y Pendientes
- **Acciones Rápidas**: 
  - Nueva Tarea (abre modal)
  - Actualizar Tareas (recarga la lista)
- **Tabla de Tareas**: Lista completa con todas tus tareas

### 4. Crear Tarea

1. Haz clic en "Nueva Tarea"
2. Completa el formulario:
   - **Título** (requerido)
   - **Descripción** (opcional)
3. Haz clic en "Crear Tarea"
4. La tarea aparecerá instantáneamente en la tabla

### 5. Gestionar Tareas

En cada fila de la tabla puedes:

- **Ver detalles**: Título, descripción, estado y fecha de creación
- **Completar/Descompletar**: 
  - Botón verde ✓ para marcar como completada
  - Botón gris para volver a pendiente
- **Eliminar**: Botón rojo 🗑️ (solicita confirmación)

### 6. Navegación

Usa el **sidebar lateral** (escritorio) o **menú hamburguesa** (móvil) para:

- Ir al Dashboard
- Ver tu Perfil
- Cerrar Sesión

## 📁 Estructura del Proyecto

```
TodoApp-frontend/
├── src/
│   ├── components/           # Componentes reutilizables
│   │   ├── common/          # Componentes comunes
│   │   │   ├── Loading.jsx
│   │   │   ├── Toast.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── layout/          # Componentes de layout
│   │   │   ├── DashboardLayout.jsx
│   │   │   └── Sidebar.jsx
│   │   └── tasks/           # Componentes de tareas
│   │       ├── TaskTable.jsx
│   │       └── CreateTaskModal.jsx
│   │
│   ├── pages/               # Páginas de la aplicación
│   │   ├── auth/           # Páginas de autenticación
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   └── ForgotPasswordPage.jsx
│   │   ├── dashboard/      # Páginas del dashboard
│   │   │   ├── DashboardPage.jsx
│   │   │   └── ProfilePage.jsx
│   │   └── main/
│   │       └── HomePage.jsx
│   │
│   ├── services/            # Servicios API
│   │   ├── auth.service.js
│   │   └── tasks.service.js
│   │
│   ├── store/               # Estado global (Zustand)
│   │   ├── useAuthStore.js
│   │   └── useTaskStore.js
│   │
│   ├── hooks/               # Custom hooks
│   │   └── useToast.js
│   │
│   ├── config/              # Configuraciones
│   │   └── firebase.config.js
│   │
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Punto de entrada
│   └── index.css           # Estilos globales
│
├── public/                  # Archivos estáticos
├── .env                     # Variables de entorno
├── vite.config.js          # Configuración de Vite
├── package.json            # Dependencias
└── README.md               # Este archivo
```

## 🎯 Funcionalidades Detalladas

### Sistema de Autenticación

#### Login Tradicional
```javascript
// Flujo de autenticación con email/password
1. Usuario ingresa credenciales
2. POST /auth/login con credentials: "include"
3. Backend valida y devuelve JWT en cookie HTTP-only
4. Frontend guarda datos del usuario en Zustand + localStorage
5. Redirección automática al dashboard
```

#### Login con Google (Firebase)
```javascript
// Flujo de autenticación con Google
1. Click en botón "Google"
2. Firebase abre popup de autenticación
3. Usuario selecciona cuenta de Google
4. Firebase devuelve idToken
5. POST /auth/google con {idToken}
6. Backend valida token y devuelve JWT en cookie
7. Redirección al dashboard
```

### Gestión de Estado

#### Auth Store (Zustand)
```javascript
// Estado de autenticación
{
  user: { userId, name, email },
  isLoggedIn: boolean,
  isLoading: boolean,
  error: string | null
}
```

#### Task Store (Zustand)
```javascript
// Estado de tareas
{
  tasks: Array<Task>,
  isLoading: boolean,
  error: string | null
}
```

### Componentes Principales

#### DashboardLayout
- Sidebar con navegación
- Header con info de usuario
- Botón de cerrar sesión
- Footer con copyright
- Responsive con menú hamburguesa

#### TaskTable
- Tabla HTML con Tailwind CSS
- Formato de fechas Firebase Timestamp
- Badges de estado (Completada/Pendiente)
- Botones de acción con iconos SVG
- Estado de carga con spinner

#### CreateTaskModal
- Modal con overlay
- Formulario validado
- Loading state
- Cierre automático al crear
- Limpieza de formulario

## 🌐 API Backend

### Endpoints de Autenticación

```http
POST /auth/register
Content-Type: application/json

{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```

```http
POST /auth/login
Content-Type: application/json

{
  "email": "juan@example.com",
  "password": "password123"
}
```

```http
POST /auth/google
Content-Type: application/json

{
  "idToken": "firebase-id-token"
}
```

### Endpoints de Tareas

```http
GET /tasks/:userId
Cookie: jwt=...
```

```http
POST /tasks/:userId
Cookie: jwt=...
Content-Type: application/json

{
  "title": "Nueva tarea",
  "description": "Descripción opcional"
}
```

```http
PUT /tasks/:userId/:taskId
Cookie: jwt=...
Content-Type: application/json

{
  "completed": true
}
```

```http
DELETE /tasks/:userId/:taskId
Cookie: jwt=...
```

## 🔒 Seguridad

- **JWT en cookies HTTP-only**: Protección contra XSS
- **Credentials include**: Cookies enviadas en cada petición
- **CORS configurado**: Solo origins permitidos
- **Validación de formularios**: Frontend y backend
- **Confirmación de eliminación**: Previene borrados accidentales
- **Protected Routes**: Redirección si no está autenticado

## 🎨 Estilos y Diseño

- **Tailwind CSS**: Utility-first CSS framework
- **Gradientes**: Diseño moderno con degradados
- **Sombras**: Profundidad y elevación
- **Transiciones**: Animaciones suaves
- **Hover effects**: Feedback visual
- **Responsive breakpoints**: 
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px

## 📚 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Compila para producción
npm run preview      # Vista previa de build

# Linting
npm run lint         # Ejecuta ESLint
```

## 🤝 Contribución

Este es un proyecto educativo. Si encuentras bugs o tienes sugerencias:

1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Commit tus cambios: `git commit -m 'Agrega nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

## 📝 Notas para Estudiantes

### Conceptos Importantes

1. **Estado Global con Zustand**: Más simple que Redux, ideal para aprender
2. **React Hooks**: useState, useEffect, custom hooks
3. **Async/Await**: Manejo de peticiones asíncronas
4. **Componentes Funcionales**: Sintaxis moderna de React
5. **Props y Children**: Comunicación entre componentes
6. **Conditional Rendering**: Mostrar/ocultar según estado
7. **Event Handlers**: onClick, onChange, onSubmit

### Mejoras Sugeridas (Para Practicar)

- [ ] Editar tareas existentes
- [ ] Filtros (Todas/Completadas/Pendientes)
- [ ] Búsqueda de tareas
- [ ] Ordenar por fecha/título
- [ ] Paginación de tareas
- [ ] Temas (claro/oscuro)
- [ ] Notificaciones push
- [ ] Categorías de tareas
- [ ] Fechas de vencimiento
- [ ] Prioridades

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👥 Autores

Proyecto creado por Ing. Giancarlo Aguilar con fines educativos para estudiantes de desarrollo web.

---

**¿Tienes preguntas?** Abre un issue en GitHub o contacta al instructor.

**¡Feliz coding!** 🚀

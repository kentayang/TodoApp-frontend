import React from 'react';
import { Link } from 'react-router-dom';
import NavHome from '../../components/common/NavHome';
import FooterHome from '../../components/common/FooterHome';
import HeroHome from '../../components/common/HeroHome';
import FeaturesHome from '../../components/common/FeaturesHome';
import BenefitsHome from '../../components/common/BenefitsHome';
import CallToActionHome from '../../components/common/CallToActionHome';

const HomePage = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
			{/* Menú Superior */}
			<NavHome />

			{/* Contenido Principal */}
			<main className="w-full px-4 sm:px-6 lg:px-8 py-12">
				{/* Hero Section */}
				<HeroHome />

				{/* Características */}
				<FeaturesHome />

				{/* Sección de Beneficios */}
				<BenefitsHome />

				{/* Call to Action Final */}
				<CallToActionHome />
			</main>

			{/* Footer */}
			<FooterHome />
		</div>
	);
};

export default HomePage;

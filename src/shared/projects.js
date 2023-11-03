import wheather from '../assets/image-project/weather.png'
import cookkie from '../assets/image-project/cookie.png'
import ecommerce from '../assets/image-project/ecommer.png'
import rick_and_morty from '../assets/image-project/rick-morty.png'
import pokemon from '../assets/image-project/pokemon.png'
import crud from '../assets/image-project/crud.png'

import html from '../assets/svgIcons/html-5.svg'
import css from '../assets/svgIcons/css.svg'
import js from '../assets/svgIcons/js.svg'
import react from '../assets/svgIcons/react.svg'


const project = [
	{
		id: 1,
		name: "Weather App",
		description:
			"Aplicación que muestra datos del clima según la ubicación del usuario o tambien mediante la busqueda de una ciudad en especifico.",
		link: "https://weather-app-campos.netlify.app/",
		image: wheather,
		tech: [
			{
				id: 1,
				icon: html,
			},
			{
				id: 2,
				icon: css,
			},
			{
				id: 3,
				icon: js,
			},
			{
				id: 4,
				icon: react,
			},
		]
	},

	{
		id: 2,
		name: "Ecommerce",
		description:
			"Simulación de comercio electronico de camisetas, donde el usuario agrega articulos al carrito de compras.",
		link: "https://e-commerce-academlo-aldo-campos.netlify.app/",
		image: ecommerce,
		tech: [
			{
				id: 1,
				icon: html,
			},
			{
				id: 2,
				icon: css,
			},
			{
				id: 3,
				icon: js,
			}
		]
	},

	{
		id: 5,
		name: "Cookie Fortune",
		description:
		"Pagina web en la cual podemos obtener un mensaje aleatorio de la galleta de la fortuna al precionar click en el botón.",
		link: "https://acampos-crud-app.netlify.app/",
		image: cookkie,
		tech: [
			{
				id: 1,
				icon: html,
			},
			{
				id: 2,
				icon: css,
			},
			{
				id: 3,
				icon: js,
			},
			{
				id: 4,
				icon: react,
			},
		]
	},	

	{
		id: 6,
		name: "Crud App",
		description:
		"Aplicación web para ver, crear, actualizar y borrar (CRUD) información de un usuario alojado en un base de datos. ",
		link: "https://acampos-crud-app.netlify.app/",
		image: crud,
		tech: [
			{
				id: 1,
				icon: html,
			},
			{
				id: 2,
				icon: css,
			},
			{
				id: 3,
				icon: js,
			},
			{
				id: 4,
				icon: react,
			},
		]
	},

	{
		id: 3,
		name: "Rick and Morty",
		description:
			"Aplicación donde podemos obtener todo los personajes de rick and morty según la dimensión a la que pertenecen, para esto se realizo una llamada a la API mediante Axios.",
		link: "https://acampos-rick-and-morty.netlify.app/",
		image: rick_and_morty,
		tech: [
			{
				id: 1,
				icon: html,
			},
			{
				id: 2,
				icon: css,
			},
			{
				id: 3,
				icon: js,
			},
			{
				id: 4,
				icon: react,
			},
		]
	},

	{
		id: 4,
		name: "Pokemon App",
		description:
		"Aplicación en la cual se realizo una peticion a la API de pokemones, que nos muestras todo los pokemones según su clasificacion asi como tambien una card con sus estadisticas. ",
		link: "https://pokedex-web-acampos.netlify.app/",
		image: pokemon,
		tech: [
			{
				id: 1,
				icon: html,
			},
			{
				id: 2,
				icon: css,
			},
			{
				id: 3,
				icon: js,
			},
			{
				id: 4,
				icon: react,
			},
		]
	}
];


export default project;
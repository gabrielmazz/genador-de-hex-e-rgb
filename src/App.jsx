import { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import './App.css'

// Chama as funções para o programa funcionar
import { createHexColor } from './utils/hex_color'
import { createRgbColor } from './utils/rgb_color'
import { hexOrRgb } from './utils/hex_or_rgb'

// Importa a imagem da logo
import logo from './assets/logo.png'

function App() {
  
	// Seta o estado do input de cor, começando com a cor branca
	const [color, setColor] = useState('#ffffff')

	// Estado para mostrar o valor do input de cor na tela, ele controla a visibilidade do input
	const [showColor, setShowColor] = useState(false)

	// Estado para mostrar se é HEX ou RGB
	const [isHex, setIsHex] = useState(false)
	const [isRgb, setIsRgb] = useState(false)


	// Hook para animação de transição do react-spring para o fundo da pagina
	const springProps = useSpring({
		backgroundColor: color,
		config: { duration: 1000 }, // Duração da animação em milissegundos
	})

	// Função para gerar uma cor HEX aleatória
	function generateRandomHexColor() {

		// Gera uma cor aleatória
		const randomColor = createHexColor()

		// Atualiza a cor no estado
		setColor(randomColor)

		// Atualiza o estado para mostrar o input de cor
		setShowColor(true)

		// Atualiza o estado para mostrar se é HEX
		setIsHex(true)
		setIsRgb(false)

	}

	// Função para gerar uma cor RGB aleatória
	function generateRandomRgbColor() {

		// Gera uma cor aleatória
		const randomColor = createRgbColor()

		// Atualiza a cor no estado
		setColor(randomColor)

		// Atualiza o estado para mostrar o input de cor
		setShowColor(true)

		// Atualiza o estado para mostrar se é RGB
		setIsRgb(true)
		setIsHex(false)

	}

	// Função para gerar uma cor aleatória
	function generateRandomColor() {

		const color = hexOrRgb()

		// Verifica se é HEX ou RGB, utilizando a sua string como base
		// no caso no HEX ele possui o caractere '#' e no RGB ele possui a string 'rgb'
		if (color.includes('#')) {
			generateRandomHexColor()
		} else if (color.includes('rgb')) {
			generateRandomRgbColor()
		}
	}	

	return (

		// Quando algum dos botões for clicado, substitue o valor e assim o fundo da página
		// trocara de cor
		<animated.div className="h-screen" style={springProps}>

			<h1 class="font-sans font-medium uppercase text-center pt-10 text-6xl font-body">Gerador de cores RGB e HEX</h1>


			{/* Botoes para determinar as novas cores */}
			<div class="flex item-center columns-3 place-content-center pt-10">

				<button
					class="middle none center mr-3 rounded-lg bg-gradient-to-tr 
					from-white-600 to-white-400 py-3 px-6 font-sans text-xs 
					font-bold uppercase text-black shadow-md shadow-gray-500/20 
					transition-all hover:shadow-lg hover:shadow-gray-400/40 
					active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 
					disabled:shadow-none font-body"
					data-ripple-light="true"
					onClick={generateRandomHexColor}
				>
					Criar uma HEX color
				</button>

				<button
					class="middle none center mr-3 rounded-lg bg-gradient-to-tr 
					from-white-600 to-white-400 py-3 px-6 font-sans text-xs 
					font-bold uppercase text-black shadow-md shadow-gray-500/20 
					transition-all hover:shadow-lg hover:shadow-gray-500/40 
					active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 
					disabled:shadow-none font-body"
					data-ripple-light="true"
					onClick={generateRandomRgbColor}
				>
					Criar uma RGB Color
				</button>

				<button
					class="middle none center mr-3 rounded-lg bg-gradient-to-tr 
					from-white-600 to-white-400 py-3 px-6 font-sans text-xs 
					font-bold uppercase text-black shadow-md shadow-gray-500/20 
					transition-all hover:shadow-lg hover:shadow-gray-500/40 
					active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 
					disabled:shadow-none font-body"
					data-ripple-light="true"
					onClick={generateRandomColor}
				>
					Gera uma cor aleatória
				</button>

			</div>

			{/* Mostra os inputs de cor */}
			<div className="flex flex-col items-center justify-center h-screen">
				
				<div className="relative flex w-96 h-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md text-white font-uppercase
				shadow-md shadow-gray-500/20">
					
					<div className="p-5">
						
						<div className="border-2 border-black-500 rounded-lg p-5 flex flex-col items-center text-black font-body">
							{isHex && <span className="text-9xl">HEX</span>}
							{isRgb && <span className="text-9xl">RGB</span>}
							{showColor && <span className="pt-14 text-2xl">{color}</span>}
						</div>

					</div>

				</div>

				{/* Adiciona a logo abaixo do input de cor */}
				<div className="flex flex-col items-center justify-center font-body">

					<img src={logo} alt="Logo" className="w-40 h-40" />

					<p className="pt-5 text-sm uppercase text-black">
					Desenvolvido por <a className="underline underline-offset-1" href="https://www.linkedin.com/in/gabriel-alves-mazzuco/">Gabriel Mazzuco</a>
					</p>

				</div>
				
				<div className="flex flex-col items-center justify-center pt-10">
                    <p className="text-sm uppercase text-black">
                    Versão 1.0.0
                    </p>
                </div>
				
			</div>			
						
		</animated.div>
	)
}

export default App

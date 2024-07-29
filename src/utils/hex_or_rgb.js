// Importa as funções de geração de cor dos outros dois arquivos
import { createHexColor } from './hex_color'
import { createRgbColor } from './rgb_color'

// Sorteia entre HEX e RGB e retorna a cor
export function hexOrRgb() {
    // Sorteia um número de 0 a 1
    const random = Math.floor(Math.random() * 2)

    // Se for 0, retorna uma cor HEX
    if (random === 0) {
        return createHexColor()
    } else {
        // Se for 1, retorna uma cor RGB
        return createRgbColor()
    }
}
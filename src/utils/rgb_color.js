// Função para gerar uma cor aleatória RGB
export function createRgbColor() {
    
    // Gera um número aleatório de 0 a 255
    const randomRed = Math.floor(Math.random() * 256)
    const randomGreen = Math.floor(Math.random() * 256)
    const randomBlue = Math.floor(Math.random() * 256)

    // Retorna a cor gerada
    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
}
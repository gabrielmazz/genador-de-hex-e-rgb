// Função para gerar um HEX color aleatório
export function createHexColor() {

    // Gera um número aleatório de 0 a 16777215
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)

    // Retorna a cor gerada
    return `#${randomColor}`
}
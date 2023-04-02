const fotos = [];

for(let i = 1; i <= 10; i++){
    fotos.push({
        id: `foto-${i}`,
        url: `./src/assets/imagens/galeria/foto-${i}.png`, 
        alt: 'foto de...', 
        nome: `Foto ${i}`, 
        fonte: 'Fonte/fotográfo/Satélite'});
}

export {
    fotos,
}

import foto1 from '../files/imagens/galeria/foto-1.png';
import foto2 from '../files/imagens/galeria/foto-2.png';
import foto3 from '../files/imagens/galeria/foto-3.png';
import foto4 from '../files/imagens/galeria/foto-4.png';
import foto5 from '../files/imagens/galeria/foto-5.png';
import foto6 from '../files/imagens/galeria/foto-6.png';
import foto7 from '../files/imagens/galeria/foto-7.png';
import foto8 from '../files/imagens/galeria/foto-8.png';
import foto9 from '../files/imagens/galeria/foto-9.png';
import foto10 from '../files/imagens/galeria/foto-10.png';


const foto = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10];
const fotos = [];

for(let i = 0; i < foto.length; i++){
    fotos.push({
        id: `foto-${i + 1}`,
        url: foto[i], 
        alt: 'foto de...', 
        nome: `Foto ${i + 1}`, 
        fonte: 'Fonte/fotográfo/Satélite'});
}

export {
    fotos,
}

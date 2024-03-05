/* Entradas*/

import batataFritaImg from './assets/entradas/batata-frita.jpg'
import bolinhoFeijoadaImg from './assets/entradas/bolinho-feijoada.jpg';
import camaraoEmpanadoImg from './assets/entradas/camarao-empanado.jpg';
import coxinhaImg from './assets/entradas/coxinha.jpg';
import dadinhoTapiocaImg from './assets/entradas/dadinho-tapioca.jpg';
import pastelImg from "./assets/entradas/pastel.jpg";

/*Pratos Principais*/

import bifeAnchoImg from './assets/pratos/bife-ancho.jpg';
import iscaPeixeImg from './assets/pratos/isca-peixe.jpg';
import moquecaImg from './assets/pratos/moqueca.jpg';
import picanhaImg from './assets/pratos/picanha.jpg';
import risotoCamaraoImg from './assets/pratos/risoto-camarao.jpg';
import salmaoGrelhadoImg from './assets/pratos/salmao-grelhado.jpg';

/*Sobremesas*/

import acaiImg from './assets/sobremesas/acai.jpg';
import brownieImg from './assets/sobremesas/brownie.jpeg';
import petitGateauImg from './assets/sobremesas/petit-gateau.jpeg';
import tiramisuImg from './assets/sobremesas/tiramisu.jpg';

/*Bebidas*/

import aguaSemGasImg from './assets/bebidas/agua-sem-gas.jpeg';
import aguaComGasImg from './assets/bebidas/agua-com-gas.jpeg';
import aguaTonicaImg from './assets/bebidas/agua-tonica.jpeg';
import cocaColaImg from './assets/bebidas/coca-cola.jpeg';
import coronaImg from './assets/bebidas/corona.jpeg'
import pepsiImg from './assets/bebidas/pepsi.jpeg';
import h2ohImg from './assets/bebidas/h2oh.jpeg';
import heinekenImg from './assets/bebidas/heineken.jpeg';
import redbullImg from './assets/bebidas/redbull.jpeg';
import skolBeatsImg from './assets/bebidas/skol-beats.jpeg';

/*Drinks*/

import aperolImg from './assets/drinks/aperol.jpg';
import bloodMaryImg from './assets/drinks/blood-mary.jpg'
import caipirinhaImg from './assets/drinks/caiprinha.jpg';
import cubaLibreImg from './assets/drinks/cuba-libre.jpg';
import margaritaImg from './assets/drinks/margarita.jpg';
import mojitoImg from './assets/drinks/mojito.jpg';
import pinaColadaImg from './assets/drinks/pina-colada.jpg';
import sexOnTheBeachImg from './assets/drinks/sex-on-the-beach.jpg';


/*Entradas*/

const batataFrita = {
  nome: 'Batata Frita',
  preco: 'R$ 39,90',
  imagem: batataFritaImg,
  descricao: 'Um clássico petisco crocante, perfeito para acompanhar qualquer refeição ou simplesmente ser saboreado por si só.',
};

const bolinhoFeijoada = {
  nome: 'Bolinho de Feijoada',
  preco: 'R$ 29,90',
  imagem: bolinhoFeijoadaImg,
  descricao: 'Com sua casquinha crocante por fora e recheio suculento por dentro, o bolinho de feijoada oferece uma explosão de sabores autênticos em cada mordida.',
};

const camaraoEmpanado = {
  nome: 'Camarão Empanado',
  preco: 'R$ 49,90',
  imagem: camaraoEmpanadoImg,
  descricao: 'Um petisco irresistível que combina a suculência do camarão com a crocância da massa empanada. Uma opção deliciosa para quem aprecia frutos do mar e uma textura crocante.',
};

const coxinha = {
  nome: 'Coxinha de Frango e Catupiry',
  preco: 'R$ 12,00',
  imagem: coxinhaImg,
  descricao: 'Uma combinação irresistível de crocância e cremosidade. Sua casquinha crocante envolve um recheio suculento de frango desfiado e catupiry, proporcionando uma explosão de sabor a cada mordida.',
};

const dadinho = {
  nome: 'Dadinho de Tapioca',
  preco: 'R$ 34,90',
  imagem: dadinhoTapiocaImg,
  descricao: 'Com suas raízes na culinária nordestina do Brasil, Cada mordida revela uma combinação única de sabores, onde o sabor suave da tapioca se mistura com o queijo levemente salgado, resultando em uma experiência gastronômica inesquecível.',
};

const pastel = {
  nome: 'Pastel',
  preco: 'R$ 15,00',
  imagem: pastelImg,
  descricao: 'Um clássico petisco brasileiro, apreciado por sua crocância única e recheios variados. Com sua massa fina e dourada, oferecendo uma explosão de sabor em cada mordida. Sabores: Carne, Frango e Queijo',
};

/*Pratos Principais*/

const bifeAncho = {
  nome: 'Bife Ancho',
  preco: 'R$ 189,90',
  imagem: bifeAnchoImg,
  descricao: 'Nosso suculento bife ancho, grelhado à perfeição para manter sua suculência e sabor intensos, é acompanhado por batatas fritas douradas e crocantes.',
};
const iscaPeixe = {
  nome: 'Isca de Peixe',
  preco: 'R$ 154,90',
  imagem: iscaPeixeImg,
  descricao:
    'Uma combinação deliciosa que une a leveza e o sabor do peixe empanado em tiras crocantes, acompanhado de batatas fritas douradas e uma refrescante salada de vegetais frescos.',
};
const moqueca = {
  nome: 'Moqueca Cabixaba',
  preco: 'R$ 219,90',
  imagem: moquecaImg,
  descricao:
    'A moqueca é uma deliciosa combinação de peixe fresco, camarão e outros frutos do mar, cozidos lentamente em um molho de tomate, cebola, pimentão, coentro e azeite de dendê. É servida em uma panela de barro, mantendo os sabores autênticos e o aroma irresistível.',
};
const picanha = {
  nome: 'Picanha',
  preco: 'R$ 199,90',
  imagem: picanhaImg,
  descricao:
    'A suculenta picanha grelhada é servida com um irresistível molho de alho, que realça seu sabor característico. Acompanhada de batatas fritas crocantes, esta combinação é uma verdadeira celebração dos sabores e texturas.',
};

const risotoCamarao = {
  nome: 'Risoto de Camarão',
  preco: 'R$ 169,90',
  imagem: risotoCamaraoImg,
  descricao:
    'Uma harmoniosa fusão de sabores e texturas, onde a suculência dos camarões se une à cremosidade do queijo Brie em um delicado risoto. Acompanhado de uma farofa crocante de bacon, este prato oferece uma experiência gastronômica única, repleta de contrastes e aromas irresistíveis.',
};

const salmaoGrelhado = {
  nome: 'Salmão Grelhado',
  preco: 'R$ 209,90',
  imagem: salmaoGrelhadoImg,
  descricao:
    'Uma explosão de frescor e sabor! Nosso suculento salmão grelhado, com sua textura macia e sabor inconfundível, é harmonizado com uma variedade de legumes crocantes, criando uma experiência culinária vibrante e deliciosa. Uma opção irresistível para os amantes de frutos do mar.',
};

/*Sobremesas*/

const acai = {
  nome: 'Açai na Tigela',
  preco: 'R$ 24,90',
  imagem: acaiImg,
  descricao:
    'Açaí: Um superalimento tropical e delicioso, perfeito para revigorar e satisfazer. Servido em uma tigela com granola, frutas frescas e mel, é uma explosão de sabor e energia em cada colherada.',
};

const brownie = {
  nome: 'Brownie',
  preco: 'R$ 32,90',
  imagem: brownieImg,
  descricao:
    'Uma explosão de chocolate em cada mordida! Nosso brownie é uma obra-prima da confeitaria, com seu centro macio e rico em chocolate, contrastando com uma crosta delicadamente crocante.',
};

const petitGateau = {
  nome: 'Petit Gateau',
  preco: 'R$ 34,90',
  imagem: petitGateauImg,
  descricao:
    'Uma tentação irresistível para os amantes de chocolate! Este clássico da confeitaria é uma combinação perfeita de bolo quente e cremoso por dentro, contrastando com uma casquinha crocante por fora. Servido com uma bola de sorvete de baunilha, é uma indulgência que derrete na boca.',
};

const tiramisu = {
  nome: 'Tiramisù',
  preco: 'R$ 36,90',
  imagem: tiramisuImg,
  descricao:
    'Combina camadas de biscoitos de champagne embebidos em café, creme de queijo mascarpone e cacau em pó, criando uma harmonia perfeita de sabores e texturas.',
};

/*Bebidas*/

const aguaSemGas = {
  nome: 'Água sem gás',
  preco: 'R$ 6,90',
  imagem: aguaSemGasImg,
  descricao: '500ml',
};

const aguaComGas = {
  nome: 'Água com gás',
  preco: 'R$ 7,90',
  imagem: aguaComGasImg,
  descricao: '500ml',
};

const aguaTonica = {
  nome: 'Água Tônica',
  preco: 'R$ 7,90',
  imagem: aguaTonicaImg,
  descricao: '350ml',
};

const cocaCola = {
  nome: 'Coca-Cola',
  preco: 'R$ 7,90',
  imagem: cocaColaImg,
  descricao: '350ml',
};

const corona = {
  nome: 'Corona',
  preco: 'R$ 16,90',
  imagem: coronaImg,
  descricao: '330ml',
};

const pepsi = {
  nome: 'Pepsi',
  preco: 'R$ 7,90',
  imagem: pepsiImg,
  descricao: '350ml',
};

const h2oh = {
  nome: 'H2OH Limoneto',
  preco: 'R$ 9,90',
  imagem: h2ohImg,
  descricao: '500ml',
};

const heineken = {
  nome: 'Heineken',
  preco: 'R$ 15,90',
  imagem: heinekenImg,
  descricao: '355ml',
};

const redbull = {
  nome: 'Red Bull',
  preco: 'R$ 18,90',
  imagem: redbullImg,
  descricao: '250ml',
};

const skolBeats = {
  nome: 'Skol Beats',
  preco: 'R$ 15,90',
  imagem: skolBeatsImg,
  descricao: '269ml',
};

/* Drinks */

const aperol = {
  nome: 'Aperol Spritz',
  preco: 'R$ 38,90',
  imagem: aperolImg,
  descricao: 'O Aperol Spritz é um coquetel leve e refrescante feito com Aperol, prosecco e água com gás. Servido em uma taça de vinho com gelo e uma rodela de laranja.',
};

const bloodMary = {
  nome: 'Blood Mary',
  preco: 'R$ 38,90',
  imagem: bloodMaryImg,
  descricao: 'Um coquetel clássico feito com vodka, suco de tomate, suco de limão, molho inglês, molho de pimenta, sal e pimenta preta. Servido com gelo em um copo alto, o Bloody Mary é conhecido por seu sabor único e picante.',
};

const caipirinha = {
  nome: 'Caipirinha',
  preco: 'R$ 28,90',
  imagem: caipirinhaImg,
  descricao: 'Coquetel brasileiro com cachaça, limão, açúcar e gelo. Refrescante e tropical.',
};

const cubaLibre = {
  nome: 'Cuba Libre',
  preco: 'R$ 35,90',
  imagem: cubaLibreImg,
  descricao: 'O Cuba Libre é um coquetel que combina rum, cola, limão e gelo, criando uma bebida refrescante e deliciosa.',
};

const margarita = {
  nome: 'Margarita',
  preco: 'R$ 35,90',
  imagem: margaritaImg,
  descricao: 'Um clássico coquetel mexicano feito com tequila, licor de laranja, suco de limão, servido com gelo e uma borda de sal em um copo de margarita. A Margarita é conhecida por sua combinação de sabores cítricos e agave.',
};

const mojito = {
  nome: 'Mojito',
  preco: 'R$ 37,90',
  imagem: mojitoImg,
  descricao: 'Um coquetel cubano refrescante e revitalizante, feito com rum branco, hortelã, suco de limão, açúcar, água com gás e gelo. O Mojito é conhecido por sua combinação única de sabores de rum, hortelã e cítricos.',
};

const pinaColada = {
  nome: 'Piña Colada',
  preco: 'R$ 33,90',
  imagem: pinaColadaImg,
  descricao: 'A Piña Colada é um coquetel tropical feito com rum branco, suco de abacaxi e creme de coco. Servido batido com gelo e decorado com uma fatia de abacaxi, é uma opção refrescante e exótica, perfeita para desfrutar em qualquer clima.',
};

const sexOnTheBeach = {
  nome: 'Sex On The Beach',
  preco: 'R$ 39.90',
  imagem: sexOnTheBeachImg,
  descricao: 'Um coquetel tropical e colorido, feito com vodka, licor de pêssego, suco de cranberry e suco de laranja. Servido em um copo alto com gelo, o Sex on the Beach é conhecido por sua doçura equilibrada e sabores frutados. '
}

/*Abas*/

export const entradas = [batataFrita, bolinhoFeijoada, camaraoEmpanado, coxinha, dadinho, pastel]

export const pratosPrincipais = [bifeAncho, iscaPeixe, moqueca, risotoCamarao, picanha,salmaoGrelhado];

export const sobremesas = [acai, brownie, petitGateau, tiramisu];

export const bebidas = [aguaSemGas, aguaComGas, aguaTonica, h2oh, cocaCola, pepsi, heineken, corona, redbull, skolBeats];

export const drinks = [aperol, bloodMary, caipirinha, cubaLibre, margarita, mojito, pinaColada, sexOnTheBeach];

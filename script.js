// Documento JavaScript

function colorir(estado){
	x = document.getElementById(estado);
	x.style.fill = "#0071BC";
}

function descolorir(estado){
	x = document.getElementById(estado);
	x.style.fill = "#9A9D9E";
}

function estado(nome){
	this.nome = nome;
	this.hospedagem = [];
    this.alimentacao = [];
	this.lazer = [];
}

bahia = new estado("Bahia");
bahia.hospedagem.push({nome: "Paradise Houses", cidade: "Arraial D'Ajuda", endereco: "Rua Perimetral, 2358", telefone:"(73) 3315-4258"});
bahia.hospedagem.push({nome: "Veleiro Praia Hotel", cidade: "Valença", endereco: "Avenida Taquary, 7", telefone:"(75) 3245-1515"});
bahia.hospedagem.push({nome: "Populi Casa Hotel", cidade: "Porto Seguro", endereco: "Rua São Braz, 163", telefone:"(73) 4002-2028"});
bahia.hospedagem.push({nome: "Ice Club Hostel", cidade: "Morro São Paulo", endereco: "Segunda Praia, s/n", telefone:"(73) 3545-1010"});
bahia.hospedagem.push({nome: "Che Lagarto Hostel", cidade: "Morro São Paulo", endereco: "Rua da Fonte Grande, 11", telefone:"(73) 3270-0015"});
bahia.alimentacao.push({nome: "Pizzaria La Napoletana", cidade: "Nazaré", endereco: "Rua da Mouraria, 26", telefone:"(71) 3266-0387"});
bahia.alimentacao.push({nome: "Restaurante Maria Mata Mouro", cidade: "Salvador", endereco: "Rua da Ordem Terceira, 8", telefone:"(71) 3321-3929"});
bahia.alimentacao.push({nome: "Restaurante Caminho de Casa", cidade: "Salvador", endereco: "Rua Anísio Teixeira, 161 LJ 34", telefone:"(71) 3353-7022"});
bahia.alimentacao.push({nome: "Le Filet", cidade: "Salvador", endereco: "Avenida Beira Mar, 113", telefone:"(71) 3312-0116"});
bahia.alimentacao.push({nome: "Cancha do Gaucho", cidade: "Itabuna", endereco: "Rua Para, 110", telefone:"(73) 3212-6851"});
bahia.lazer.push({nome: "Shopping Capemi", cidade: "Salvador", endereco: "Rua Alfazema, 752", telefone:"(71) 3358-6019"});
bahia.lazer.push({nome: "Boulevard Shopping", cidade: "Feira de Santana", endereco: "Avenida Gov João Durval Carneiro, 3665", telefone:"(71) 3321-3929"});
bahia.lazer.push({nome: "Shopping Armazém da Vila", cidade: "Praia do Forte", endereco: "Avenida Farol, 25", telefone:"(71) 3353-7022"});
bahia.lazer.push({nome: "Shopping Barra", cidade: "Salvador", endereco: "Avenida Centenário, 2992", telefone:"(71) 3312-0116"});
bahia.lazer.push({nome: "Shopping Del Matos", cidade: "Ibicaraí", endereco: "Rua 2 Julho, 204", telefone:"(73) 3212-6851"});

amazonas = new estado("Amazonas");
amazonas.hospedagem.push({nome: "Tropical Manaus Ecoresort", cidade: "Manaus", endereco: "Avenida Coronel Teixeira, 1320", telefone:"(92) 3315-4258"});
amazonas.hospedagem.push({nome: "Maruaga Hotel", cidade: "Presidente Figueiredo", endereco: "Rua Uatumã, 205", telefone:"(97) 3245-1515"});
amazonas.hospedagem.push({nome: "Continental Park Hotel", cidade: "Parque 10 de Novembro", endereco: "Estrada Japoneses, 238", telefone:"(92) 4002-2028"});
amazonas.hospedagem.push({nome: "Local Hostel Manaus", cidade: "Manaus", endereco: "Rua Marçal, 72", telefone:"(92) 3545-1010"});
amazonas.hospedagem.push({nome: "Hostel For Us II", cidade: "Manaus", endereco: "Rua Ferreira A Pena, 179", telefone:"(97) 3270-0015"});
amazonas.alimentacao.push({nome: "Banzeiro", cidade: "Manaus", endereco: "Rua Libertador, 102, Nossa Senhora das Graças", telefone:"(92) 3234-1621"});
amazonas.alimentacao.push({nome: "Abare Sup and Food", cidade: "Manaus", endereco: "Rio Tarumã, acesso pela praia dourada", telefone: "(92) 9624-6940"});
amazonas.alimentacao.push({nome: "Mc Daves", cidade: "Parintins", endereco: "Av. Amazonas, 1943", telefone: "(92) 3533-6000"});
amazonas.alimentacao.push({nome: "Tambaqui no Ponto", cidade: "Itacoatiara", endereco: "Rua Acácio Leite, S/N, Esquina com a Av. Mário Andreazza", telefone: "(92) 9248-0167"});
amazonas.alimentacao.push({nome: "Restaurante Panorama", cidade: "Itacoatiara", endereco: "Rua Min Waldemar Pedrosa, 880, Centro", telefone: "(92) 9624-6940"});
amazonas.lazer.push({nome: "Amazon Aqua Park", cidade: "Manaus", endereco: "Br-174, Km 101, Presidente Figueiredo", telefone: "(92) 3324-1104"});
amazonas.lazer.push({nome: "Colônia de Pescadores Z9", cidade: "Manacapuru", endereco: "Av. Cristo Rei, 81, Centro", telefone: "(92) 3361-4461"});
amazonas.lazer.push({nome: "Manauara Shopping", cidade: "Manaus", endereco: "Av. Mario Ypiranga, 1300, Adrianópolis", telefone: "(92) 4003-7760"});
amazonas.lazer.push({nome: "Amazonas Shopping", cidade: "Manaus", endereco: "Av. Djalma Batista, 482, Parque 10 de Novembro", telefone: "(92) 3303-9039"});
amazonas.lazer.push({nome: "Oficina Tiro Certo", cidade: "Manaus", endereco: "Rua dos Andradas, 170, Centro", telefone: "(92) 9232-4787"});

parana = new estado("Paraná");
parana.hospedagem.push({nome: "Hotel Deville Business Maringá", cidade: "Maringá", endereco: "Av. Herval, 26", telefone: "(44) 3221-6700"});
parana.hospedagem.push({nome: "Hotel Lumini", cidade: "Curitiba", endereco: "Rua Gen. Carneiro, 1094", telefone: "(41) 3264-5244"});
parana.hospedagem.push({nome: "Harbor Hotel Batel", cidade: "Curitiba", endereco: "Av. Batel, 1162", telefone: "(41) 3523-5800"});
parana.hospedagem.push({nome: "Camboa Hotel Paranaguá", cidade: "Paranaguá", endereco: "Rua João Estevão, S/N, Centro Histórico", telefone: "(41) 3420-5200"});
parana.hospedagem.push({nome: "Hotel Ibis Curitiba", cidade: "Curitiba", endereco: "Rua brigadeiro franco, 2154, Centro", telefone: "(41) 3595-2450"});
parana.alimentacao.push({nome: "Zaki Sabor Árabe", cidade: "Londrina", endereco: "Av. Aminthas de Barros, 399, sl 01", telefone: "(43) 3324-3399"});
parana.alimentacao.push({nome: "Madalosso", cidade: "Curitiba", endereco: "Av. Manoel Ribas, 5875, Santa Felicidade", telefone: "(41) 3372-2121"});
parana.alimentacao.push({nome: "Poco Tapas", cidade: "Curitiba", endereco: "Av. Vicente Machado, 2786, Batel", telefone: "(41) 9682-8758"});
parana.alimentacao.push({nome: "Habanero Grill", cidade: "Maringá", endereco:"Av. Mauá, 2694, Esquina com Av. Pedro Taques", telefone: "(44) 8840-9765"});
parana.alimentacao.push({nome: "La Mafia", cidade: "Foz do Iguaçu", endereco: "Rua Watslaf Nieradka, 195", telefone: "(45) 3572-1015"});
parana.lazer.push({nome: "Recanto Monteiro Parque Aquatico", cidade: "Ponta Grossa", endereco: "Rua Siriri, 66, Vila Borato", telefone: "(42) 3239-8080"});
parana.lazer.push({nome: "Parque Nacional do Iguaçu", cidade: "Foz do Iguaçu", endereco: "Br-469, Km 22.5", telefone: "(45) 3521-4400"});
parana.lazer.push({nome: "Jardim Botanico de Curitiba", cidade: "Curitiba", endereco: "Rua Eng Ostoja Roguski", telefone: "(41) 3264-6994"});
parana.lazer.push({nome: "Museu Oscar Niemeyer", cidade: "Curitiba", endereco: "Rua Marechal Hermes, 999, Centro Civico", telefone: "(41) 3350-4400"});
parana.lazer.push({nome: "Paque Barigui", cidade: "Curitiba", endereco: "Av Manoel Ribas", telefone: "(41) 3350-9891"});

acre = new estado("Acre");
acre.hospedagem.push({nome: "Holiday Inn Express Rio Branco", cidade: "Rio Branco", endereco: "Rua Rio Grande do Sul, 332", telefone: "(800) 772-2353"});
acre.hospedagem.push({nome: "Plínio Hotel", cidade: "Cruzeiro do Sul", endereco: "Rua Boulevard Thaumaturgo, 155", telefone: "(68) 3322-3121"});
acre.hospedagem.push({nome: "Ibis Rio Branco", cidade: "Rio Branco", endereco: "Estrada Dias Martins, 4600", telefone: "(68)3321-2900"});
acre.hospedagem.push({nome: "Amazonia Palace Hotel", cidade: "Rio Branco", endereco: "Rua Isaura Parente, 259, Bairro Bosque", telefone: "(68) 3223-4525" });
acre.hospedagem.push({nome: "Hotel Abada", cidade: "Brasiléia", endereco: "3 Av. Comerico, Lote 1550A", telefone: "(61) 3386-2055"});
acre.alimentacao.push({nome: "Jarude", cidade: "Rio Branco", endereco: "Rua Martiniano Prado, 88", telefone: "(68) 3224-0266"});
acre.alimentacao.push({nome: "Restaurante Japonês Kampay", cidade: "Cruzeiro do Sul", endereco: "Rua 25 de Agosto, 833, VI Sta Dorotheia", telefone: "(68) 9991-6394"});
acre.alimentacao.push({nome: "Peixaria Casa Verde", cidade: "Brasiléia", endereco: "Rua Major Salinas, 284", telefone: "(68) 9211-8156"});
acre.alimentacao.push({nome: "A Palhoça", cidade: "Brasiléia", endereco: "Rua Odilon Pratagi, Centro", telefone: "(68) 3546-3793"});
acre.alimentacao.push({nome: "Cuzco", cidade: "Rio Branco", endereco: "Rua Mato North, 245, 6 de agosto", telefone: "(68) 9954-3704"});
acre.lazer.push({nome: "Biblioteca da Floresta", cidade: "Rio Branco", endereco: "CNL/Parque da Maternidade, S/n", telefone: "(68) 3223-9939"});
acre.lazer.push({nome: "Palacio Rio Branco", cidade: "Rio Branco", endereco: "Rua Benjamin Constant, S/n, 1 Distrito", telefone: "(68) 3223-9240"});
acre.lazer.push({nome: "Paque Nacional da Serra do Divisor", cidade: "Cruzeiro do Sul", endereco: "Rua Jaminauas, 1556", telefone: "(68) 3322-7851"});
acre.lazer.push({nome: "Catedral Nossa Senhora da Gloria", cidade: "Cruzeiro do Sul", endereco: "Rua Rui Barbosa, S/n", telefone: "(68) 3322-2249"});
acre.lazer.push({nome: "Museu Seringal Captão Ciriaco", cidade: "Rio Branco", endereco: "Av. Doutor Pereira Passos, 225", telefone: "(68) 3224-0899"});

ceara = new estado("Ceará");
ceara.hospedagem.push({nome: "Essenza Hotel", cidade: "Jericoacoara", endereco: "Beira Mar, Jericoacoara, Jijoca de Jericoacoara", telefone: "(88) 99989-0040"});
ceara.hospedagem.push({nome: "Holiday Inn Fortaleza", cidade: "Fortaleza", endereco: "Av. Historiador Raimundo Girao, 800, praia de iracema", telefone: "(800) 722-2353"});
ceara.hospedagem.push({nome: "Vila Galé Cumbuco", cidade: "Caucaia", endereco: "Rua Lagoa das Rosas, Praia do Cumbuco", telefone: "(85) 3368-2100"});
ceara.hospedagem.push({nome: "Gran Marquise Hotel", cidade: "Fortaleza", endereco: "Av. Beira Mar, 3980", telefone: "(85) 4006-5000"});
ceara.hospedagem.push({nome: "Hotel Hurricane Jeri", cidade: "Jericoacoara", endereco: "Rua da Matriz, Jijoca de Jericoacoara", telefone: "(88) 9766-5968"});
ceara.alimentacao.push({nome: "Cabaña del Primo", cidade: "Fortaleza", endereco: "Rua Dona Maria Tomásia, 503, Aldeota", telefone: "(85) 3244-3691"});
ceara.alimentacao.push({nome: "Restaurante Secret Spot", cidade: "Cumbuco", endereco: "Rua Almirante Pedro de Frontin, 146", telefone: "(85) 9608-6586"});
ceara.alimentacao.push({nome: "Alessio Sanduiches", cidade: "Maracanaú", endereco: "Rua Miguel Alvez, 100, Centro", telefone: "(85) 3371-8768"});
ceara.alimentacao.push({nome: "K-BAB", cidade: "Fortaleza", endereco: "Av. Des. Moreira, 90, loja 88", telefone: "(85) 3085-1760"});
ceara.alimentacao.push({nome: "Tarifa Cumbuco", cidade: "Cumbuco", endereco: "Rua Alm. Pedro de Frontim", telefone: "(85) 9951-0473"});
ceara.lazer.push({nome: "Beach Park", cidade: "Aquiraz", endereco: "Rua Porto das Dunas, 2734 ", telefone: "(85) 4012-3000"});
ceara.lazer.push({nome: "Arena Castelão", cidade: "Fortaleza", endereco: "Av. Alberto Craveiro, 2901", telefone: "(85) 3304-4501"});
ceara.lazer.push({nome: "Teatro José de Alencar", cidade: "Fortaleza", endereco: "Praça José de Alencar", telefone: "(85) 3252-2324"});
ceara.lazer.push({nome: "Mercado Central de Fortaleza", cidade: "Fortaleza", endereco: "Av. Presidente Castelo Branco", telefone: "(85) 3454-8586"});
ceara.lazer.push({nome: "Teatro Violeta Arrães", cidade: "Nova Olinda", endereco: "Av. Jeremias Pereira, 444", telefone: "(88) 3546-1333"});

pernambuco = new estado("Pernambuco");
pernambuco.hospedagem.push({nome: "Grand Mercure Summerville Resort", cidade: "Porto de Galinhas", endereco: "Praia de Muro Alto, S/n, Gleba 6A, Lote C", telefone: "(81) 3302-5555"});
pernambuco.hospedagem.push({nome: "Pousada Teju Açu", cidade: "Fernando de Noronha", endereco: "Estr. de Alamoa, S/n", telefone: "(81) 3619-1277"});
pernambuco.hospedagem.push({nome: "Transamérica Prestige", cidade: "Recife", endereco: "Av. Boa Viagem, 420", telefone: "(81) 3039-9000"});
pernambuco.hospedagem.push({nome: "Beach Class Suítes", cidade: "Recife", endereco: "Av. Boa Viagem, 1906", telefone: "(81) 2121-2626"});
pernambuco.hospedagem.push({nome: "Pousada Praia dos Carneiros", cidade: "Tamandaré", endereco: "Sitio Arikinda dos Carneiros, Via Litoranea dos Carneiros, S/n, Praia dos Carneiros", telefone: "(81) 3676-1342"});
pernambuco.alimentacao.push({nome: "Nez Bistrô", cidade: "Recife", endereco: "Rua Praça de Casa forte, 314, Casa forte", telefone: "(81) 3244-3691"});
pernambuco.alimentacao.push({nome: "La Vera Pizzeria", cidade: "Caruaru", endereco: "Av. Jangadeiro Juvencio, 196", telefone: "(81) 3721-7329"});
pernambuco.alimentacao.push({nome: "Barcelona Tapas", cidade: "Caruaru", endereco: "Rua Silvino Macedo, 160", telefone: "(81) 3045-5049"});
pernambuco.alimentacao.push({nome: "Oficina do Sabor", cidade: "Olinda", endereco: "Rua do Amparo, 355", telefone: "(81) 3429-3331"});
pernambuco.alimentacao.push({nome: "Camarada Camarão", cidade: "Recife", endereco: "Rua Baltazar Pereira, 130", telefone: "(81) 3325-1786"});
pernambuco.lazer.push({nome: "Instituto Ricardo Brennand", cidade: "Recife", endereco: "Alameda Antônio Brennand, Várzea", telefone: "(81) 2121-0352"});
pernambuco.lazer.push({nome: "Baía do Sancho", cidade: "Fernando de Noronha", endereco: "Fernando de Noronha", telefone: "(81) 3619-1380"});
pernambuco.lazer.push({nome: "Museu Cais do Sertão", cidade: "Recife", endereco: "Av. Alfredo Lisboa, Armazém 10 do Porto de Recife", telefone: "(81) 3089-2974"});
pernambuco.lazer.push({nome: "Oficina Ceramica Francisco Brennand", cidade: "Recife", endereco: "Propriedade Santos Cosme e Damião, S/n, Várzea", telefone: "(81) 3271-2466"});
pernambuco.lazer.push({nome: "Riomar Recife", cidade: "Recife", endereco: "Av. República do Líbano, 251, Pina", telefone: "(81) 3878-0000"});

minasGerais = new estado("Minas Gerais");
minasGerais.hospedagem.push({nome: "Thermas Resort Walter World", cidade: "Poços de Caldas", endereco: "Av. Vereador Edmundo Cardillo, 3131, Letra A", telefone: "(35) 3042-0420"});
minasGerais.hospedagem.push({nome: "Obba Coema Village Hotel", cidade: "Capitólio", endereco: "Rodovia MG 50, KM 302, Condomínio Brisas do Lago", telefone: "(35) 3527-4040"});
minasGerais.hospedagem.push({nome: "Holiday Inn Belo Horizonte Savassi", cidade: "Belo Horizonte", endereco: "Rua Professor Moraes, 600", telefone: "(800) 772-2353"});
minasGerais.hospedagem.push({nome: "Hotel Central Parque", cidade: "São Lourenço", endereco: "Rua Melo Viana, 28, Centro", telefone: "(35) 3332-1512"});
minasGerais.hospedagem.push({nome: "Alfa Hotel", cidade: "Viçosa", endereco: "Praça Dr. Cristovão Lopes de Carvalho, 109, Centro", telefone: "(31) 3899-8800"});
minasGerais.alimentacao.push({nome: "Anella", cidade: "Belo Horizonte", endereco: "Rua Min. Guilhermino de Oliveira, 325", telefone: "(31) 3441-8748"});
minasGerais.alimentacao.push({nome: "Tropeiro Churrascaria", cidade: "Uberlândia", endereco: "Av. João Naves de Ávila, 1374", telefone: "(34) 3236-3602"});
minasGerais.alimentacao.push({nome: "Berttu's", cidade: "Juíz de Fora", endereco: "Rua Stº Antônio, 572", telefone: "(32) 3215-5026"});
minasGerais.alimentacao.push({nome: "Casa Gusto", cidade: "Contagem", endereco: "Rua Santa Terezinha, 250, Nossa Senhora do Carmo", telefone: "(31) 3032-3612"});
minasGerais.alimentacao.push({nome: "Tradição da Roça", cidade: "Contagem", endereco: "Av. Francisco Firmo de Matos", telefone: "(31) 3396-1870"});
minasGerais.lazer.push({nome: "Inhotim", cidade: "Brumadinho", endereco: "Rua B 20", telefone: "(31) 3571-9700"});
minasGerais.lazer.push({nome: "Centro Histórico de Ouro Preto", cidade: "Ouro Preto", endereco: "Cidade de Ouro Preto", telefone: "(31) 3551-2655"});
minasGerais.lazer.push({nome: "Praça da Liberdade", cidade: "Belo Horizonte", endereco: "Praça da Liberdade, Centro", telefone: "(31) 3217-9538"});
minasGerais.lazer.push({nome: "Memorial Minas Gerais Vale", cidade: "Belo Horizonte", endereco: "Praça da Liberdade, Centro", telefone: "(31) 3308-4000"});
minasGerais.lazer.push({nome: "Palácio das Artes", cidade: "Belo Horizonte", endereco: "Av. Afonso Pena, 1537, Centro", telefone: "(31) 3237-7399"});

matoGrossoDoSul = new estado("Mato Grosso do Sul");
matoGrossoDoSul.hospedagem.push({nome: "Pousada Surucuá", cidade: "Bonito", endereco: "Rua Bongiovani, 860", telefone: "(67) 3255-2337"});
matoGrossoDoSul.hospedagem.push({nome: "Ibis budget campo grande", cidade: "Campo Grande", endereco: "Av. Mato Grosso, 5617", telefone: "(67) 3303-8888"});
matoGrossoDoSul.hospedagem.push({nome: "Holtel Deville Prime Campo Grande", cidade: "Campo Grande", endereco: "Av. Mato Grosso, 4250, Caranda Bosque", telefone: "(61) 4042-5140"});
matoGrossoDoSul.hospedagem.push({nome: "Gales Park Hotel", cidade: "Dourados", endereco: "Rua Quintino Bocaiuva, 1760", telefone: "(67) 3410-3900"});
matoGrossoDoSul.hospedagem.push({nome: "Hotel Mohave", cidade: "Campo Grande", endereco: "Av. Afonso Pena, 602", telefone: "(67) 3306-7743"});
matoGrossoDoSul.alimentacao.push({nome: "Pietro i Maria", cidade: "Campo Grande", endereco: "Rua Euclides da Cunha, 88", telefone: "(67) 3222-6700"});
matoGrossoDoSul.alimentacao.push({nome: "Grilo's Restaurante", cidade: "Uberlândia", endereco: "Av. Weimar G Torres, 1010", telefone: "(67) 3422-6747"});
matoGrossoDoSul.alimentacao.push({nome: "Casa do João", cidade: "Bonito", endereco: "Rua Nelson Felício dos Santos, 664-A", telefone: "(67) 3255-1212"});
matoGrossoDoSul.alimentacao.push({nome: "Churrascaria Portal da Querencia", cidade: "Ponta Porã", endereco: "Av. Brasil, 305", telefone: "(67) 3431-5005"});
matoGrossoDoSul.alimentacao.push({nome: "Cantina Romana", cidade: "Campo Grande", endereco: "Rua da Paz, 237, Esquina com a Rua Bahia", telefone: "(67) 3324-9777"});
matoGrossoDoSul.lazer.push({nome: "Recanto Ecológico Rio da Prata", cidade: "Bonito", endereco: "Rodovia BR 267, KM 518, Zona Rural", telefone: "(67) 8403-5204"});
matoGrossoDoSul.lazer.push({nome: "Parque das Nações", cidade: "Campo Grande", endereco: "Av. Afonso Pena, 7000", telefone: "(67) 3326-2254"});
matoGrossoDoSul.lazer.push({nome: "Museu Dom Bosco", cidade: "Campo Grande", endereco: "Av Afonso Pena, 7000", telefone: "(67) 3326-9788"});
matoGrossoDoSul.lazer.push({nome: "Balneário Municipal", cidade: "Bonito", endereco: "Estrada para Jardim, KM 7", telefone: "(67) 3255-2160"});
matoGrossoDoSul.lazer.push({nome: "Igreja São Francisco", cidade: "Campo Grande", endereco: "Rua 14 de Julho, 4267, São Francisco", telefone: "(67) 3317-7950"});

goias = new estado("Goiás");
goias.hospedagem.push({nome: "Best Western Suites Le Jardin", cidade: "Caldas Novas", endereco: "Rua Machado de Assis, 555", telefone: "(64) 3454-8300"});
goias.hospedagem.push({nome: "IMG Hotel Águas da Serra", cidade: "Rio Quente", endereco: "Av. Goiás, esquina com Av. Brasil", telefone: "(64) 3452-1414"});
goias.hospedagem.push({nome: "Comfort Hotel", cidade: "Goiânia", endereco: "Av. Ismerino Soares de Carvalho, 52", telefone: "(62) 3878-1500"});
goias.hospedagem.push({nome: "Pousada do Ipê", cidade: "Caldas Novas", endereco: "Av. Dr. João de Araújo Castro, Qd. Total, Lt.01", telefone: "(64) 3454-7100"});
goias.hospedagem.push({nome: "Veredas do Rio Quente", cidade: "Rio Quente", endereco: "Rua Rio de Janeiro, esq. Rua Maranhão, Esplanada", telefone: "(64) 3452-1617"});
goias.alimentacao.push({nome: "Empório Confrades", cidade: "Goiânia", endereco: "Av. Engenheiro Eurico Viana, Qd. 04, Lote 03, sala 02 e 03, Alto da Glória", telefone: "(62) 3931-0885"});
goias.alimentacao.push({nome: "Fulo do Cerrado", cidade: "Anápolis", endereco: "Rua Luiz França, 21, Jundiai", telefone: "(62) 3317-4336"});
goias.alimentacao.push({nome: "Los Pampas Churrascaria", cidade: "Anápolis", endereco: "Av. Brasil Sul, 5909", telefone: "(62) 3313-1583"});
goias.alimentacao.push({nome: "Empadão Goiano", cidade: "Caldas Novas", endereco: "Rua Antonio Coelho de Godoy, 58", telefone: "(64) 3453-7895"});
goias.alimentacao.push({nome: "Pizzaria Pitigliano", cidade: "Goiânia", endereco: "Av. Portugal, 539, Setor Oeste", telefone: "(62) 3215-5959"});
goias.lazer.push({nome: "Santuário Vagafogo", cidade: "Pirenópolis", endereco: "Acesso Pela rua do Carmo, KM 6", telefone: "(62) 3335-8515"});
goias.lazer.push({nome: "Hot Park", cidade: "Rio Quente", endereco: "Fazenda Água Quente, Zona Rural", telefone: "(11) 3512-4830"});
goias.lazer.push({nome: "DiRoma Acqua Park", cidade: "Caldas Novas", endereco: "Rua São Cristovão, 805, Solar de Caldas", telefone: "(64) 3453-1586"});
goias.lazer.push({nome: "Museu Memorial do Cerrado", cidade: "Goiânia", endereco: "Av. Bela Vista, KM 2, Jardim Olimpico", telefone: "(62) 3946-1711"});
goias.lazer.push({nome: "Jardim Japonês", cidade: "Caldas Novas", endereco: "Rua São Cristovão, 805, Thermas diRoma, Solar de Caldas", telefone: "(64) 3453-1586"});

rioDeJaneiro = new estado("Rio de Janeiro");

rioDeJaneiro.hospedagem.push({nome: "Orla Copacabana Hotel", cidade: "Rio de Janeiro", endereco: "Av. Atlantica, 4122", telefone: "(21) 2525-2424"});
rioDeJaneiro.hospedagem.push({nome: "Ramada Riocentro", cidade: "Rio de Janeiro", endereco: "Av. Salvador Allende, 500, Jacarepaguá ", telefone: "(21) 3443-9999"});
rioDeJaneiro.hospedagem.push({nome: "La Chimere Buzios Essence", cidade: "Búzios", endereco: "Praça Eugenio Honold, 36, Armação dos Búzios", telefone: "(21) 4042-2560"});
rioDeJaneiro.hospedagem.push({nome: "Quinta da Paz Resort", cidade: "Petrópolis", endereco: "Estrada Ministro Salgado Filho, 4004, Vale do Cuiabá, Itaipava", telefone: "(21) 4042-1149"});
rioDeJaneiro.hospedagem.push({nome: "Grande Hotel Petrópolis", cidade: "Petrópolis", endereco: "Rua do Imperador, 545, Estrada do Rio de Janeiro", telefone: "(24) 2244-6500"});

rioDeJaneiro.alimentacao.push({nome: "Cocotte Bistrô", cidade: "Petrópolis", endereco: "Estrada da Divisa, 807", telefone: "(24) 2222-3334"});
rioDeJaneiro.alimentacao.push({nome: "Imperiale Pizzeria", cidade: "Petrópolis", endereco: "Rua Madre Francisca Pia, 189", telefone: "(24) 98844-2730"});
rioDeJaneiro.alimentacao.push({nome: "Kurt", cidade: "Rio de Janeiro", endereco: "Rua General Urquiza, 117, Loja B", telefone: "(21) 2294-0599"});
rioDeJaneiro.alimentacao.push({nome: "Estrelas da Babilonia", cidade: "Rio de Janeiro", endereco: "Ladeira Ari Barroso, Mirante, Morro da Babilônia, Leme", telefone: "(21) 99812-1716"});
rioDeJaneiro.alimentacao.push({nome: "Baroque Culinária Européia Slow Food", cidade: "Búzios", endereco: "Av. Ribeiro Dantas, 4545, Maguinhos", telefone: "(22) 2623-2605"});

rioDeJaneiro.lazer.push({nome: "Museu Imperial", cidade: "Petrópolis", endereco: "Rua da Imperatriz, 220, Centro", telefone: "(24) 2245-5550"});
rioDeJaneiro.lazer.push({nome: "Igreja de Sant'Ana", cidade: "Búzios", endereco: "Ladeira da Praia dos Ossos", telefone: "(24) 2245-5550"});
rioDeJaneiro.lazer.push({nome: "Pão de Açúcar", cidade: "Rio de Janeiro", endereco: "Av. Pasteur, 520, Urca", telefone: "(21) 8400-8195"});
rioDeJaneiro.lazer.push({nome: "Corcovado", cidade: "Rio de Janeiro", endereco: "Parque Nacional da Tijuca", telefone: "(21) 2558-1329"});
rioDeJaneiro.lazer.push({nome: "Theatro Municipal do Rio de Janeiro", cidade: "Rio de Janeiro", endereco: "Praça Marechal Floriano", telefone: "(21) 2331-9191"});

saoPaulo = new estado("São Paulo");

saoPaulo.hospedagem.push({nome: "Luz Plaza", cidade: "São Paulo", endereco: "Rua Prates, 145, Bom Retiro", telefone: "(11) 3230-4730"});
saoPaulo.hospedagem.push({nome: "Mercure São Paulo Jardins Hotel", cidade: "São Paulo", endereco: "Alameda Itu, 1151, Jardins", telefone: "(11) 3089-7555"});
saoPaulo.hospedagem.push({nome: "Twin Towers Flat", cidade: "São Bernardo do Campo", endereco: "Rua Santa Filomena, 999", telefone: "(11) 2155-7700"});
saoPaulo.hospedagem.push({nome: "Blue Tree Premium Alphaville", cidade: "Barueri", endereco: "Alameda Madeira, 328, Alphaville", telefone: "(11) 3376-2000"});
saoPaulo.hospedagem.push({nome: "Best Western", cidade: "Osasco", endereco: "Av. Dionysia Alves Barreto, 500, Jardim Bela Vista", telefone: "(11) 2109-4000"});

saoPaulo.alimentacao.push({nome: "Alekão", cidade: "Osasco", endereco: "Av. Leão Machado, 100", telefone: "(11) 3714-4981"});
saoPaulo.alimentacao.push({nome: "Tamagochi Sushi Garden", cidade: "São Bernardo do Campo", endereco: "Rua Flávio Fongaro, 585", telefone: "(11) 2534-8262"});
saoPaulo.alimentacao.push({nome: "Cantina Alemã", cidade: "Campinas", endereco: "Rua Luzitana, 981", telefone: "(19) 3233-0907"});
saoPaulo.alimentacao.push({nome: "Sirena", cidade: "Guarulhos", endereco: "Av. Doutor Timoteo Penteado, 3522", telefone: "(11) 4307-0325"});
saoPaulo.alimentacao.push({nome: "Vila das Rosas", cidade: "São Paulo", endereco: "Rua Jorge Rizzo, 146", telefone: "(11) 3814-2920"});

saoPaulo.lazer.push({nome: "Parque do Ibirapuera", cidade: "São Paulo", endereco: "Av. Pedro Álvares Cabral", telefone: "(11) 5574-5045"});
saoPaulo.lazer.push({nome: "Museu do Futebol", cidade: "São Paulo", endereco: "Praça Charles Miller, S/n", telefone: "(11) 3664-3848"});
saoPaulo.lazer.push({nome: "Museu de Arte de São Paulo", cidade: "São Paulo", endereco: "Av. Paulista, 1578, Cerqueira César", telefone: "(11) 3251-5644"});
saoPaulo.lazer.push({nome: "Vila Antiga", cidade: "Campinas", endereco: "Rua Arançandiva, 401", telefone: "(19) 3262-0477"});
saoPaulo.lazer.push({nome: "Internacional Shopping Guarulhos", cidade: "Guarulhos", endereco: "Rod. Presidente Dutra, Saida 255, Itapegica", telefone: "(11) 2414-5000"});

alagoas = new estado("Alagoas");

alagoas.hospedagem.push({nome: "Salinas do Maragogi All Inclusive Resort", cidade: "Maragogi", endereco: "Rodovia AI, 101, Norte, KM 124", telefone: "(82) 4020-3296"});
alagoas.hospedagem.push({nome: "Hotel Ritz Suites", cidade: "Maceió", endereco: "Av. Brigadeiro Eduardo Gomes, Praia Lagoa da Anta", telefone: "(85) 4042-1754"});
alagoas.hospedagem.push({nome: "Radisson Hotel Maceió", cidade: "Maceió", endereco: "Av. Dr. Antônio Gouveia, 925, Pajucara", telefone: "(82) 3202-4900"});
alagoas.hospedagem.push({nome: "Kenoa", cidade: "Barra de São Miguel", endereco: "Rua Escritor Jorge de Lima, 68, Barramar", telefone: "(82) 3272-1285"});
alagoas.hospedagem.push({nome: "Hotel Ponta Verde", cidade: "Praia do Francês" ,endereco: "Rua da Algas, 300", telefone: "(82) 2121-0040"});

alagoas.alimentacao.push({nome: "Sabatelli Pizza & Arte", cidade: "Maceió", endereco: "Rua Desportista Humberto Guimarães, 882", telefone: "(82) 3317-1325"});
alagoas.alimentacao.push({nome: "Divina Gula", cidade: "Maceió", endereco: "Rua Eng Paulo B Nogueira, 85, Jatiúca", telefone: "(82) 3235-1016"});
alagoas.alimentacao.push({nome: "Churrascaria Familia Gaucha", cidade: "Marechal Deodoro", endereco: "Av. Caravelas, 177, Stº Antônio", telefone: "(82) 3934-4377"});
alagoas.alimentacao.push({nome: "Restaurante Maragaço", cidade: "Maragogi", endereco: "Av. Senador Rui Palmeira, 1001", telefone: "(82) 3296-2041"});
alagoas.alimentacao.push({nome: "Tuyn", cidade: "Maragogi", endereco: "Pousada Rodovia. AL-101 Norte, Km 124", telefone: "(82) 3296-1206"});

alagoas.lazer.push({nome: "Feira de Artesanato de Pajuçara", cidade: "Maceió", endereco: "Av. Doutor Antonio Gouveia, 1447", telefone: "(82) 3231-3901"});
alagoas.lazer.push({nome: "Parque Shopping Maceió", cidade: "Maceió", endereco: "Av. Comendador Gustavo Paiva, 5945", telefone: "(82) 3021-7575"});
alagoas.lazer.push({nome: "Arapiraca Garden Shopping", cidade: "Arapiraca", endereco: "Rua Vicente Nunes de Albuquerque", telefone: "(82) 3482-0505"});
alagoas.lazer.push({nome: "Igreja Santa Maria Madalena", cidade: "Marechal Deodoro", endereco: "Rua São Francisco", telefone: "(82) 3221-2651"});
alagoas.lazer.push({nome: "Parque Municipal de Maceió", cidade: "Maceió", endereco: "Rua Marquês de Abrantes, s/n, Bebedouro", telefone: "(82) 3358-6232"});

matoGrosso = new estado("Mato Grosso");

matoGrosso.hospedagem.push({nome: "Grand Odara Hotel", cidade: "Cuiabá", endereco: "Av. Miguel Sutil, 8344", telefone: "(61) 4042-5074"});
matoGrosso.hospedagem.push({nome: "Pantanal Mato Grosso Hotel", cidade: "Poconé", endereco: "Estrada transpantaneira, 65", telefone: "(65) 3614-7500"});
matoGrosso.hospedagem.push({nome: "Odara Araguaia Hotel", cidade: "Barra do Garças", endereco: "Av. Dep. Antonio Joaquim, 365, Qd 17", telefone: "(66) 3402-1500"});
matoGrosso.hospedagem.push({nome: "Hotel Mato Grosso Águas Quentes", cidade: "Cuiabá", endereco: "BR 364, Km 77, 9km, Serra de São Vicente", telefone: "(65) 3614-7500"});
matoGrosso.hospedagem.push({nome: "Hotel Fazenda Mato Grosso", cidade: "Cuiabá" ,endereco: "Av. Antônio Dorileo, 1100, Coophema", telefone: "(65) 3315-1200"});

matoGrosso.alimentacao.push({nome: "Mahalo", cidade: "Cuiabá", endereco: "Rua Presidente Castelo Branco, 359, Quilombo", telefone: "(65) 3028-7700"});
matoGrosso.alimentacao.push({nome: "Lelis Peixaria", cidade: "Cuiabá", endereco: "Rua Marechal Mascarenhas Moraes, 36", telefone: "(65) 3322-9195"});
matoGrosso.alimentacao.push({nome: "Cupim na telha", cidade: "Rondonópolis", endereco: "Rua José Barriga, 420",telefone: "(66) 3423-1247"});
matoGrosso.alimentacao.push({nome: "Kenkou Sushi House", cidade: "Rondonópolis", endereco: "Av. Lions Internacional, 107", telefone: "(66) 3422-6332"});
matoGrosso.alimentacao.push({nome: "Speakeasy", cidade: "Sinop", endereco: "Rua Magnolias, 416, Maringá", telefone: "(66) 9635-5544"});

matoGrosso.lazer.push({nome: "Arena Pantanal", cidade: "Cuiabá", endereco: "Av. Agrícola Paes de Barros, Verdão", telefone: "(65) 3637-7642"});
matoGrosso.lazer.push({nome: "Museu do Morro da Caixa d'agua velha", cidade: "Cuiabá", endereco: "Rua Comandante Costa, S/n, centro", telefone: "(65) 3023-7829"});
matoGrosso.lazer.push({nome: "Parque Nacional da Chapada dos Guimarães", cidade: "Chapada dos Guimarães", endereco: "Rod. Deputado Emanuel Pinheiro, MT 251, KM 55", telefone: "(65) 3301-1133"});
matoGrosso.lazer.push({nome: "Teatro SESC- Arsenal", cidade: "Cuiabá", endereco: "Rua 13 de junho, 399", telefone: "(65) 3616-6900"});
matoGrosso.lazer.push({nome: "Salto das Nuvens", cidade: "Tangará da Serra", endereco: "MT-358 em direção a campo novo parecis, 25km", telefone: "(65) 3326-2999"});

santaCatarina = new estado("Santa Catarina");

santaCatarina.hospedagem.push({nome: "Costão do Santinho Resort Golf & Spa", cidade: "Florianópolis", endereco: "Estrada Vereador Onildo Lemos, 2505, Praia do Santinho", telefone: "08006450915"});
santaCatarina.hospedagem.push({nome: "Infinity Blue Resort & Spa", cidade: "Balneário Camboriú", endereco: "Av. Rui Barbosa, 1000, Estrada da Rainha", telefone: "(47) 3261-0300"});
santaCatarina.hospedagem.push({nome: "Pousada Pedra da Ilha", cidade: "Penha", endereco: "Rua Abraão João Francisco, 46", telefone: "(47) 3345-0542"});
santaCatarina.hospedagem.push({nome: "D'Sintra Hotel", cidade: "Balneário Camboriú", endereco: "Av. Atlantica", telefone: "(47) 2104-4080"});
santaCatarina.hospedagem.push({nome: "Thermas Piratuba Park Hotel", cidade: "Piratuba" ,endereco: "Rua Florianópolis, 88", telefone: "(49) 3553-0000"});

santaCatarina.alimentacao.push({nome: "Sorveteria Italiana Monte Pelmo", cidade: "Florianópolis", endereco: "Rua Brisamar, 360", telefone: "(48) 3369-3040"});
santaCatarina.alimentacao.push({nome: "Le Chef's Hamburgueria Gourmet", cidade: "Balneário Camboriú", endereco: "Av. Martin Luther, 52, Bairro Nações", telefone: "(47) 3081-4877"});
santaCatarina.alimentacao.push({nome: "Bistrô Palatare", cidade: "Balneário Camboriú", endereco: "Rua 2550, 699", telefone: "(47) 3366-3699"});
santaCatarina.alimentacao.push({nome: "Clover Pub", cidade: "Joinville", endereco: "Rua Otto Boehm, 356", telefone: "(47) 3804-5222"});
santaCatarina.alimentacao.push({nome: "Restaurante Sabor Imperial", cidade: "Blumenau", endereco: "Rua Ângelo Dias, 251, Centro", telefone: "(47) 3326-0011"});

santaCatarina.lazer.push({nome: "Shopping Center Iguatemi", cidade: "Florianópolis", endereco: "Av. Madre Benvenuta, 687", telefone: "(48) 3239-8700"});
santaCatarina.lazer.push({nome: "Beto Carrero World", cidade: "Penha", endereco: "Rua Inacio Francisco Souza, 1597", telefone: "(47) 3261-2222"});
santaCatarina.lazer.push({nome: "Parque Unipraias Camboriú", cidade: "Balneário Camboriú", endereco: "Av. Atlântica, 6006", telefone: "(47) 3404-7600"});
santaCatarina.lazer.push({nome: "Parque Vila Germânica", cidade: "Blumenau", endereco: "Rua Alberto Stein, 199, Velha", telefone: "(47) 3326-6901"});
santaCatarina.lazer.push({nome: "Serra do Rio do Rastro", cidade: "Blumenau", endereco: "Bom Jardim da Serra", telefone: "(49) 9112-0074"});

rioGrandeDoSul = new estado("Rio Grande do Sul");

rioGrandeDoSul.hospedagem.push({nome: "Bavária Sport Hotel", cidade: "Gramado", endereco: "Rua da Bavária, 543, Bairro bavária", telefone: "(54) 3286-1362"});
rioGrandeDoSul.hospedagem.push({nome: "Hotel Galo Vermelho", cidade: "Gramado", endereco: "Av. das Hotensias, 4357", telefone: "(54) 3286-1535"});
rioGrandeDoSul.hospedagem.push({nome: "Hotel & Spa do Vinho Autograph Collection", cidade: "Bento Gonçalves", endereco: "Rodovia RS, 444, Km 21, Vale dos Vinhedos", telefone: "(54) 2102-7200"});
rioGrandeDoSul.hospedagem.push({nome: "Hotel Laghetto Viverone Bento Gonçalves", cidade: "Bento Gonçalves", endereco: "Rua Carlos Flores, 301", telefone: "(54) 3449-1919"});
rioGrandeDoSul.hospedagem.push({nome: "Hotel Blue Tree Millenium", cidade: "Porto Alegre" ,endereco: "Av. Borges de Medeiros, 3120", telefone: "(51) 3026-2200"});

rioGrandeDoSul.alimentacao.push({nome: "Koh Pee Pee", cidade: "Porto Alegre", endereco: "Rua Schiller 83", telefone: "(51) 3333-5150"});
rioGrandeDoSul.alimentacao.push({nome: "Bistrô da Vó Mercedes", cidade: "Porto Alegre", endereco: "Duqye de Caxias, 550, Historic District", telefone: "(51) 3013-3269"});
rioGrandeDoSul.alimentacao.push({nome: "Puerto del Toro", cidade: "Caixas do Sul", endereco: "Shopping Iguatemi", telefone: "(54) 3214-9029"});
rioGrandeDoSul.alimentacao.push({nome: "Rodapizza Giordani", cidade: "Caxias do Sul", endereco: "Abramo Randon, 975, Bairro Saint-Etienne", telefone: "(54) 3028-2726"});
rioGrandeDoSul.alimentacao.push({nome: "Jean Restaurante", cidade: "Alvorada", endereco: "Rua Portugal, 22", telefone: "(55) 3411-1412"});

rioGrandeDoSul.lazer.push({nome: "Museu de Ciências e Tecnologia da PUCRS", cidade: "Porto Alegre", endereco: "Av. Ipiranga, 6681", telefone: "(51) 3320-3521"});
rioGrandeDoSul.lazer.push({nome: "Mini Mundo", cidade: "Gramado", endereco: "Rua Horácio Cardoso, 291", telefone: "(54) 3286-4055"});
rioGrandeDoSul.lazer.push({nome: "Catedral da Pedra", cidade: "Canela", endereco: "Praça da Matriz, 535", telefone: "(54) 3282-1132"});
rioGrandeDoSul.lazer.push({nome: "Arena do Grêmio", cidade: "Porto Alegre", endereco: "Av. Padre Leopoldo Brentano, 110", telefone: "(51) 3092-9605"});
rioGrandeDoSul.lazer.push({nome: "Espetáculo Korvatunturi", cidade: "Gramado", endereco: "Rua São Pedro, 663, Espaço Cultural FAURGS", telefone: "(54) 3295-7563"});

maranhao = new estado("Maranhão");

maranhao.hospedagem.push({nome: "Hotel Luzeiros", cidade: "São Luís", endereco: "Rua João Pereira Damasceno, 2", telefone: "(85) 4006-8585"});
maranhao.hospedagem.push({nome: "Gran Solare Lençóis Resort", cidade: "Barreirinhas", endereco: "Estrada São Domingos, S/n, povoado Boa Vista", telefone: "(98) 3349-6000"});
maranhao.hospedagem.push({nome: "Brisamar Hotel", cidade: "São Luís", endereco: "Av. São Marcos, 12, Ponta d'areia", telefone: "(98) 2106-0606"});
maranhao.hospedagem.push({nome: "Ibis", cidade: "Bacabal", endereco: "Rua Barão de Capanema, 185, Centro", telefone: "(99) 3301-3400"});
maranhao.hospedagem.push({nome: "Posseidon Hotel", cidade: "Imperatriz" ,endereco: "Rua Paraíba, 740, Centro", telefone: "(99) 3529-8500"});

maranhao.alimentacao.push({nome: "Cabana do Sol", cidade: "São Luís", endereco: "Av. Litoranea, 10, Praia do Calhau", telefone: "(98) 3227-7761"});
maranhao.alimentacao.push({nome: "Coco Bambu", cidade: "São Luís", endereco: "Av. Colares Moreira, 1, Bairro Calhau", telefone: "(98) 3268-7400"});
maranhao.alimentacao.push({nome: "Cabana do Sol", cidade: "Imperatriz", endereco: "Rua João Lisboa, 119, Entroncamento", telefone: "(99) 3524-0592"});
maranhao.alimentacao.push({nome: "San Pietro Cantina", cidade: "Imperatriz", endereco: "Rua Cel Manoel Bandeira, 1735", telefone: "(99) 3524-7143"});
maranhao.alimentacao.push({nome: "D' cantus churrascos & pizzas", cidade: "Caixas", endereco: "Av. Senador Alexandre Costa", telefone: "(99) 3421-2113"});

maranhao.lazer.push({nome: "Parque Nacional dos Lençois Maranhenses", cidade: "Barreirinhas", endereco: "Barreirinhas", telefone: "(98) 2004-1444"});
maranhao.lazer.push({nome: "Teatro Arthur Azevedo", cidade: "São Luís", endereco: "Rua do Sol, 180, Centro", telefone: "(98) 3218-9900"});
maranhao.lazer.push({nome: "Igreja da Sé", cidade: "São Luís", endereco: "Av. Pedro II", telefone: "(98) 3222-7380"});
maranhao.lazer.push({nome: "Palácio dos Leões", cidade: "São Luís", endereco: "Av. Dom Pedro II, S/n", telefone: "(98) 3232-9784"});
maranhao.lazer.push({nome: "Catedral da Sé", cidade: "São Luís", endereco: "Av. Dom Pedro 2, centro", telefone: "(98) 3232-9784"});

para = new estado("Pará");

para.hospedagem.push({nome: "Hotel Privê do Atalaia", cidade: "Salinópolis", endereco: "Estrada do Atalaia, 10", telefone: "(91) 3464-1244"});
para.hospedagem.push({nome: "Radisson Hotel Maiorana", cidade: "Belém", endereco: "Av. Comandante Bras de Aguiar, 321", telefone: "(91) 3205-1399"});
para.hospedagem.push({nome: "Hotel Solar", cidade: "Salinópolis", endereco: "Av. Atlântica, s/n", telefone: "(91) 3423-1823"});
para.hospedagem.push({nome: "Beira Rio Hotel", cidade: "Belém", endereco: "Av. Bernardo Sayão, 4804", telefone: "(91) 4008-9000"});
para.hospedagem.push({nome: "Hotel São Bento", cidade: "Marabá" ,endereco: "VP8 Folha 31, Qd 1, Lote 9 e 10", telefone: "(94) 2103-8100"});

para.alimentacao.push({nome: "Manjar das Garças", cidade: "Belém", endereco: "Parque Mangal das Graçaas, Parque Ambiental Mangal das Graças", telefone: "(91) 3242-1056"});
para.alimentacao.push({nome: "Remanso do Bosque", cidade: "Belém", endereco: "Tv. Perebebui, 2350", telefone: "(91) 3347-2829"});
para.alimentacao.push({nome: "Casa do Saulo", cidade: "Santarém", endereco: "Praia Carapanari, Km 7,5", telefone: "(93) 9142-1067"});
para.alimentacao.push({nome: "Nossa Casa", cidade: "Santarém", endereco: "Rua São Cristovão", telefone: "(93) 3522-7684"});
para.alimentacao.push({nome: "Churrascaria Boi d'ouro", cidade: "Ananindeua", endereco: "Rodovia Mario Covas, 564B", telefone: "(91) 3235-9622"});

para.lazer.push({nome: "Estação das Docas", cidade: "Belém", endereco: "Av. Boulevard Castilhos", telefone: "(91) 3212-5525"});
para.lazer.push({nome: "Mangal das Garças", cidade: "Belém", endereco: "Pass. Carneiro da Rocha, Cidade Velha", telefone: "(91) 3242-5052"});
para.lazer.push({nome: "Teatro da Paz", cidade: "Belém", endereco: "Rua da Paz, s/n, centro", telefone: "(91) 4009-8750"});
para.lazer.push({nome: "Fazenda São Jerônimo", cidade: "Ilha do Marajó", endereco: "Rod. Soure-Pesqueiro, Km 3, Tucumanduba", telefone: "(91) 3741-2093"});
para.lazer.push({nome: "Espaço São José Liberto", cidade: "Belém", endereco: "Praça Amazonas, s/n, Jurunas", telefone: "(91) 3344-3514"});

roraima = new estado("Roraima");

roraima.hospedagem.push({nome: "Boa Vista Eco Hotel", cidade: "Boa Vista", endereco: "Av. Glaycon de Paiva, 1240", telefone: "(95) 3621-7100"});
roraima.hospedagem.push({nome: "Aipana Plaza Hotel", cidade: "Boa Vista", endereco: "Praça do Centro Civico Joaquim Nabuco, Centro", telefone: "(95) 3212-0800"});
roraima.hospedagem.push({nome: "Hotel Amazônia Palace", cidade: "Roiranópolis", endereco: "RR-174, Km 468, Centro", telefone: "(95) 3238-1410"});
roraima.hospedagem.push({nome: "Uiramutam Palace Hotel", cidade: "Boa Vista", endereco: "Av. Cap. Ene Garcez, 427", telefone: "(95) 3198-0000"});
roraima.hospedagem.push({nome: "Ferrari Palace Hotel", cidade: "Boa Vista" ,endereco: "Av. Benjamim Constant, 2011", telefone: "(95) 3623-7338"});

roraima.alimentacao.push({nome: "Peixada Tropical", cidade: "Boa Vista", endereco: "Rua Ajuricaba, 1525", telefone: "(95) 3224-6040"});
roraima.alimentacao.push({nome: "Elane Lanche", cidade: "Boa Vista", endereco: "Rua Cerejo Cruz, 1510, Centro", telefone: "("});
roraima.alimentacao.push({nome: "Casa do Saulo", cidade: "Santarém", endereco: "Praia Carapanari, Km 7,5", telefone: "(93) 9142-1067"});
roraima.alimentacao.push({nome: "Nossa Casa", cidade: "Santarém", endereco: "Rua São Cristovão", telefone: "(93) 3522-7684"});
roraima.alimentacao.push({nome: "Churrascaria Boi d'ouro", cidade: "Ananindeua", endereco: "Rodovia Mario Covas, 564B", telefone: "(91) 3235-9622"});

roraima.lazer.push({nome: "Estação das Docas", cidade: "Belém", endereco: "Av. Boulevard Castilhos", telefone: "(91) 3212-5525"});
roraima.lazer.push({nome: "Mangal das Garças", cidade: "Belém", endereco: "Pass. Carneiro da Rocha, Cidade Velha", telefone: "(91) 3242-5052"});
roraima.lazer.push({nome: "Teatro da Paz", cidade: "Belém", endereco: "Rua da Paz, s/n, centro", telefone: "(91) 4009-8750"});
roraima.lazer.push({nome: "Fazenda São Jerônimo", cidade: "Ilha do Marajó", endereco: "Rod. Soure-Pesqueiro, Km 3, Tucumanduba", telefone: "(91) 3741-2093"});
roraima.lazer.push({nome: "Espaço São José Liberto", cidade: "Belém", endereco: "Praça Amazonas, s/n, Jurunas", telefone: "(91) 3344-3514"});

rondonia = new estado("Rondonia");

rondonia.hospedagem.push({nome: "Hotel Privê do Atalaia", cidade: "Salinópolis", endereco: "Estrada do Atalaia, 10", telefone: "(91) 3464-1244"});
rondonia.hospedagem.push({nome: "Radisson Hotel Maiorana", cidade: "Belém", endereco: "Av. Comandante Bras de Aguiar, 321", telefone: "(91) 3205-1399"});
rondonia.hospedagem.push({nome: "Hotel Solar", cidade: "Salinópolis", endereco: "Av. Atlântica, s/n", telefone: "(91) 3423-1823"});
rondonia.hospedagem.push({nome: "Beira Rio Hotel", cidade: "Belém", endereco: "Av. Bernardo Sayão, 4804", telefone: "(91) 4008-9000"});
rondonia.hospedagem.push({nome: "Hotel São Bento", cidade: "Marabá",endereco: "VP8 Folha 31, Qd 1, Lote 9 e 10", telefone: "(94) 2103-8100"});

rondonia.alimentacao.push({nome: "Manjar das Garças", cidade: "Belém", endereco: "Parque Mangal das Graçaas, Parque Ambiental Mangal das Graças", telefone: "(91) 3242-1056"});
rondonia.alimentacao.push({nome: "Remanso do Bosque", cidade: "Belém", endereco: "Tv. Perebebui, 2350", telefone: "(91) 3347-2829"});
rondonia.alimentacao.push({nome: "Casa do Saulo", cidade: "Santarém", endereco: "Praia Carapanari, Km 7,5", telefone: "(93) 9142-1067"});
rondonia.alimentacao.push({nome: "Nossa Casa", cidade: "Santarém", endereco: "Rua São Cristovão", telefone: "(93) 3522-7684"});
rondonia.alimentacao.push({nome: "Churrascaria Boi d'ouro", cidade: "Ananindeua", endereco: "Rodovia Mario Covas, 564B", telefone: "(91) 3235-9622"});

rondonia.lazer.push({nome: "Estação das Docas", cidade: "Belém", endereco: "Av. Boulevard Castilhos", telefone: "(91) 3212-5525"});
rondonia.lazer.push({nome: "Mangal das Garças", cidade: "Belém", endereco: "Pass. Carneiro da Rocha, Cidade Velha", telefone: "(91) 3242-5052"});
rondonia.lazer.push({nome: "Teatro da Paz", cidade: "Belém", endereco: "Rua da Paz, s/n, centro", telefone: "(91) 4009-8750"});
rondonia.lazer.push({nome: "Fazenda São Jerônimo", cidade: "Ilha do Marajó", endereco: "Rod. Soure-Pesqueiro, Km 3, Tucumanduba", telefone: "(91) 3741-2093"});
rondonia.lazer.push({nome: "Espaço São José Liberto", cidade: "Belém", endereco: "Praça Amazonas, s/n, Jurunas", telefone: "(91) 3344-3514"});

amapa = new estado("Amapá");

amapa.hospedagem.push({nome: "Hotel Privê do Atalaia", cidade: "Salinópolis", endereco: "Estrada do Atalaia, 10", telefone: "(91) 3464-1244"});
amapa.hospedagem.push({nome: "Radisson Hotel Maiorana", cidade: "Belém", endereco: "Av. Comandante Bras de Aguiar, 321", telefone: "(91) 3205-1399"});
amapa.hospedagem.push({nome: "Hotel Solar", cidade: "Salinópolis", endereco: "Av. Atlântica, s/n", telefone: "(91) 3423-1823"});
amapa.hospedagem.push({nome: "Beira Rio Hotel", cidade: "Belém", endereco: "Av. Bernardo Sayão, 4804", telefone: "(91) 4008-9000"});
amapa.hospedagem.push({nome: "Hotel São Bento", cidade: "Marabá" ,endereco: "VP8 Folha 31, Qd 1, Lote 9 e 10", telefone: "(94) 2103-8100"});

amapa.alimentacao.push({nome: "Manjar das Garças", cidade: "Belém", endereco: "Parque Mangal das Graçaas, Parque Ambiental Mangal das Graças", telefone: "(91) 3242-1056"});
amapa.alimentacao.push({nome: "Remanso do Bosque", cidade: "Belém", endereco: "Tv. Perebebui, 2350", telefone: "(91) 3347-2829"});
amapa.alimentacao.push({nome: "Casa do Saulo", cidade: "Santarém", endereco: "Praia Carapanari, Km 7,5", telefone: "(93) 9142-1067"});
amapa.alimentacao.push({nome: "Nossa Casa", cidade: "Santarém", endereco: "Rua São Cristovão", telefone: "(93) 3522-7684"});
amapa.alimentacao.push({nome: "Churrascaria Boi d'ouro", cidade: "Ananindeua", endereco: "Rodovia Mario Covas, 564B", telefone: "(91) 3235-9622"});

amapa.lazer.push({nome: "Estação das Docas", cidade: "Belém", endereco: "Av. Boulevard Castilhos", telefone: "(91) 3212-5525"});
amapa.lazer.push({nome: "Mangal das Garças", cidade: "Belém", endereco: "Pass. Carneiro da Rocha, Cidade Velha", telefone: "(91) 3242-5052"});
amapa.lazer.push({nome: "Teatro da Paz", cidade: "Belém", endereco: "Rua da Paz, s/n, centro", telefone: "(91) 4009-8750"});
amapa.lazer.push({nome: "Fazenda São Jerônimo", cidade: "Ilha do Marajó", endereco: "Rod. Soure-Pesqueiro, Km 3, Tucumanduba", telefone: "(91) 3741-2093"});
amapa.lazer.push({nome: "Espaço São José Liberto", cidade: "Belém", endereco: "Praça Amazonas, s/n, Jurunas", telefone: "(91) 3344-3514"});

tocantins = new estado("Tocantins");

tocantins.hospedagem.push({nome: "Hotel Privê do Atalaia", cidade: "Salinópolis", endereco: "Estrada do Atalaia, 10", telefone: "(91) 3464-1244"});
tocantins.hospedagem.push({nome: "Radisson Hotel Maiorana", cidade: "Belém", endereco: "Av. Comandante Bras de Aguiar, 321", telefone: "(91) 3205-1399"});
tocantins.hospedagem.push({nome: "Hotel Solar", cidade: "Salinópolis", endereco: "Av. Atlântica, s/n", telefone: "(91) 3423-1823"});
tocantins.hospedagem.push({nome: "Beira Rio Hotel", cidade: "Belém", endereco: "Av. Bernardo Sayão, 4804", telefone: "(91) 4008-9000"});
tocantins.hospedagem.push({nome: "Hotel São Bento", cidade: "Marabá" ,endereco: "VP8 Folha 31, Qd 1, Lote 9 e 10", telefone: "(94) 2103-8100"});

tocantins.alimentacao.push({nome: "Manjar das Garças", cidade: "Belém", endereco: "Parque Mangal das Graçaas, Parque Ambiental Mangal das Graças", telefone: "(91) 3242-1056"});
tocantins.alimentacao.push({nome: "Remanso do Bosque", cidade: "Belém", endereco: "Tv. Perebebui, 2350", telefone: "(91) 3347-2829"});
tocantins.alimentacao.push({nome: "Casa do Saulo", cidade: "Santarém", endereco: "Praia Carapanari, Km 7,5", telefone: "(93) 9142-1067"});
tocantins.alimentacao.push({nome: "Nossa Casa", cidade: "Santarém", endereco: "Rua São Cristovão", telefone: "(93) 3522-7684"});
tocantins.alimentacao.push({nome: "Churrascaria Boi d'ouro", cidade: "Ananindeua", endereco: "Rodovia Mario Covas, 564B", telefone: "(91) 3235-9622"});

tocantins.lazer.push({nome: "Estação das Docas", cidade: "Belém", endereco: "Av. Boulevard Castilhos", telefone: "(91) 3212-5525"});
tocantins.lazer.push({nome: "Mangal das Garças", cidade: "Belém", endereco: "Pass. Carneiro da Rocha, Cidade Velha", telefone: "(91) 3242-5052"});
tocantins.lazer.push({nome: "Teatro da Paz", cidade: "Belém", endereco: "Rua da Paz, s/n, centro", telefone: "(91) 4009-8750"});
tocantins.lazer.push({nome: "Fazenda São Jerônimo", cidade: "Ilha do Marajó", endereco: "Rod. Soure-Pesqueiro, Km 3, Tucumanduba", telefone: "(91) 3741-2093"});
tocantins.lazer.push({nome: "Espaço São José Liberto", cidade: "Belém", endereco: "Praça Amazonas, s/n, Jurunas", telefone: "(91) 3344-3514"});

espiritoSanto = new estado("Espirito Santo");

espiritoSanto.hospedagem.push({nome: "Hotel Privê do Atalaia", cidade: "Salinópolis", endereco: "Estrada do Atalaia, 10", telefone: "(91) 3464-1244"});
espiritoSanto.hospedagem.push({nome: "Radisson Hotel Maiorana", cidade: "Belém", endereco: "Av. Comandante Bras de Aguiar, 321", telefone: "(91) 3205-1399"});
espiritoSanto.hospedagem.push({nome: "Hotel Solar", cidade: "Salinópolis", endereco: "Av. Atlântica, s/n", telefone: "(91) 3423-1823"});
espiritoSanto.hospedagem.push({nome: "Beira Rio Hotel", cidade: "Belém", endereco: "Av. Bernardo Sayão, 4804", telefone: "(91) 4008-9000"});
espiritoSanto.hospedagem.push({nome: "Hotel São Bento", cidade: "Marabá" ,endereco: "VP8 Folha 31, Qd 1, Lote 9 e 10", telefone: "(94) 2103-8100"});

espiritoSanto.alimentacao.push({nome: "Manjar das Garças", cidade: "Belém", endereco: "Parque Mangal das Graçaas, Parque Ambiental Mangal das Graças", telefone: "(91) 3242-1056"});
espiritoSanto.alimentacao.push({nome: "Remanso do Bosque", cidade: "Belém", endereco: "Tv. Perebebui, 2350", telefone: "(91) 3347-2829"});
espiritoSanto.alimentacao.push({nome: "Casa do Saulo", cidade: "Santarém", endereco: "Praia Carapanari, Km 7,5", telefone: "(93) 9142-1067"});
espiritoSanto.alimentacao.push({nome: "Nossa Casa", cidade: "Santarém", endereco: "Rua São Cristovão", telefone: "(93) 3522-7684"});
espiritoSanto.alimentacao.push({nome: "Churrascaria Boi d'ouro", cidade: "Ananindeua", endereco: "Rodovia Mario Covas, 564B", telefone: "(91) 3235-9622"});

espiritoSanto.lazer.push({nome: "Estação das Docas", cidade: "Belém", endereco: "Av. Boulevard Castilhos", telefone: "(91) 3212-5525"});
espiritoSanto.lazer.push({nome: "Mangal das Garças", cidade: "Belém", endereco: "Pass. Carneiro da Rocha, Cidade Velha", telefone: "(91) 3242-5052"});
espiritoSanto.lazer.push({nome: "Teatro da Paz", cidade: "Belém", endereco: "Rua da Paz, s/n, centro", telefone: "(91) 4009-8750"});
espiritoSanto.lazer.push({nome: "Fazenda São Jerônimo", cidade: "Ilha do Marajó", endereco: "Rod. Soure-Pesqueiro, Km 3, Tucumanduba", telefone: "(91) 3741-2093"});
espiritoSanto.lazer.push({nome: "Espaço São José Liberto", cidade: "Belém", endereco: "Praça Amazonas, s/n, Jurunas", telefone: "(91) 3344-3514"});

sergipe = new estado("Sergipe");

sergipe.hospedagem.push({nome: "Hotel Privê do Atalaia", cidade: "Salinópolis", endereco: "Estrada do Atalaia, 10", telefone: "(91) 3464-1244"});
sergipe.hospedagem.push({nome: "Radisson Hotel Maiorana", cidade: "Belém", endereco: "Av. Comandante Bras de Aguiar, 321", telefone: "(91) 3205-1399"});
sergipe.hospedagem.push({nome: "Hotel Solar", cidade: "Salinópolis", endereco: "Av. Atlântica, s/n", telefone: "(91) 3423-1823"});
sergipe.hospedagem.push({nome: "Beira Rio Hotel", cidade: "Belém", endereco: "Av. Bernardo Sayão, 4804", telefone: "(91) 4008-9000"});
sergipe.hospedagem.push({nome: "Hotel São Bento", cidade: "Marabá" ,endereco: "VP8 Folha 31, Qd 1, Lote 9 e 10", telefone: "(94) 2103-8100"});

sergipe.alimentacao.push({nome: "Manjar das Garças", cidade: "Belém", endereco: "Parque Mangal das Graçaas, Parque Ambiental Mangal das Graças", telefone: "(91) 3242-1056"});
sergipe.alimentacao.push({nome: "Remanso do Bosque", cidade: "Belém", endereco: "Tv. Perebebui, 2350", telefone: "(91) 3347-2829"});
sergipe.alimentacao.push({nome: "Casa do Saulo", cidade: "Santarém", endereco: "Praia Carapanari, Km 7,5", telefone: "(93) 9142-1067"});
sergipe.alimentacao.push({nome: "Nossa Casa", cidade: "Santarém", endereco: "Rua São Cristovão", telefone: "(93) 3522-7684"});
sergipe.alimentacao.push({nome: "Churrascaria Boi d'ouro", cidade: "Ananindeua", endereco: "Rodovia Mario Covas, 564B", telefone: "(91) 3235-9622"});

sergipe.lazer.push({nome: "Estação das Docas", cidade: "Belém", endereco: "Av. Boulevard Castilhos", telefone: "(91) 3212-5525"});
sergipe.lazer.push({nome: "Mangal das Garças", cidade: "Belém", endereco: "Pass. Carneiro da Rocha, Cidade Velha", telefone: "(91) 3242-5052"});
sergipe.lazer.push({nome: "Teatro da Paz", cidade: "Belém", endereco: "Rua da Paz, s/n, centro", telefone: "(91) 4009-8750"});
sergipe.lazer.push({nome: "Fazenda São Jerônimo", cidade: "Ilha do Marajó", endereco: "Rod. Soure-Pesqueiro, Km 3, Tucumanduba", telefone: "(91) 3741-2093"});
sergipe.lazer.push({nome: "Espaço São José Liberto", cidade: "Belém", endereco: "Praça Amazonas, s/n, Jurunas", telefone: "(91) 3344-3514"});

paraiba = new estado("Paraíba");

paraiba.hospedagem.push({nome: "Hotel Privê do Atalaia", cidade: "Salinópolis", endereco: "Estrada do Atalaia, 10", telefone: "(91) 3464-1244"});
paraiba.hospedagem.push({nome: "Radisson Hotel Maiorana", cidade: "Belém", endereco: "Av. Comandante Bras de Aguiar, 321", telefone: "(91) 3205-1399"});
paraiba.hospedagem.push({nome: "Hotel Solar", cidade: "Salinópolis", endereco: "Av. Atlântica, s/n", telefone: "(91) 3423-1823"});
paraiba.hospedagem.push({nome: "Beira Rio Hotel", cidade: "Belém", endereco: "Av. Bernardo Sayão, 4804", telefone: "(91) 4008-9000"});
paraiba.hospedagem.push({nome: "Hotel São Bento", cidade: "Marabá" ,endereco: "VP8 Folha 31, Qd 1, Lote 9 e 10", telefone: "(94) 2103-8100"});

paraiba.alimentacao.push({nome: "Manjar das Garças", cidade: "Belém", endereco: "Parque Mangal das Graçaas, Parque Ambiental Mangal das Graças", telefone: "(91) 3242-1056"});
paraiba.alimentacao.push({nome: "Remanso do Bosque", cidade: "Belém", endereco: "Tv. Perebebui, 2350", telefone: "(91) 3347-2829"});
paraiba.alimentacao.push({nome: "Casa do Saulo", cidade: "Santarém", endereco: "Praia Carapanari, Km 7,5", telefone: "(93) 9142-1067"});
paraiba.alimentacao.push({nome: "Nossa Casa", cidade: "Santarém", endereco: "Rua São Cristovão", telefone: "(93) 3522-7684"});
paraiba.alimentacao.push({nome: "Churrascaria Boi d'ouro", cidade: "Ananindeua", endereco: "Rodovia Mario Covas, 564B", telefone: "(91) 3235-9622"});

paraiba.lazer.push({nome: "Estação das Docas", cidade: "Belém", endereco: "Av. Boulevard Castilhos", telefone: "(91) 3212-5525"});
paraiba.lazer.push({nome: "Mangal das Garças", cidade: "Belém", endereco: "Pass. Carneiro da Rocha, Cidade Velha", telefone: "(91) 3242-5052"});
paraiba.lazer.push({nome: "Teatro da Paz", cidade: "Belém", endereco: "Rua da Paz, s/n, centro", telefone: "(91) 4009-8750"});
paraiba.lazer.push({nome: "Fazenda São Jerônimo", cidade: "Ilha do Marajó", endereco: "Rod. Soure-Pesqueiro, Km 3, Tucumanduba", telefone: "(91) 3741-2093"});
paraiba.lazer.push({nome: "Espaço São José Liberto", cidade: "Belém", endereco: "Praça Amazonas, s/n, Jurunas", telefone: "(91) 3344-3514"});

rioGrandeDoNorte = new estado("Rio Grande do Norte");

rioGrandeDoNorte.hospedagem.push({nome: "Radisson Hotel Maiorana", cidade: "Belém", endereco: "Av. Comandante Bras de Aguiar, 321", telefone: "(91) 3205-1399"});
rioGrandeDoNorte.hospedagem.push({nome: "Hotel Solar", cidade: "Salinópolis", endereco: "Av. Atlântica, s/n", telefone: "(91) 3423-1823"});
rioGrandeDoNorte.hospedagem.push({nome: "Beira Rio Hotel", cidade: "Belém", endereco: "Av. Bernardo Sayão, 4804", telefone: "(91) 4008-9000"});
rioGrandeDoNorte.hospedagem.push({nome: "Hotel São Bento", cidade: "Marabá" ,endereco: "VP8 Folha 31, Qd 1, Lote 9 e 10", telefone: "(94) 2103-8100"});
rioGrandeDoNorte.hospedagem.push({nome: "Hotel São Bento", cidade: "Marabá" ,endereco: "VP8 Folha 31, Qd 1, Lote 9 e 10", telefone: "(94) 2103-8100"});

rioGrandeDoNorte.alimentacao.push({nome: "Manjar das Garças", cidade: "Belém", endereco: "Parque Mangal das Graçaas, Parque Ambiental Mangal das Graças", telefone: "(91) 3242-1056"});
rioGrandeDoNorte.alimentacao.push({nome: "Remanso do Bosque", cidade: "Belém", endereco: "Tv. Perebebui, 2350", telefone: "(91) 3347-2829"});
rioGrandeDoNorte.alimentacao.push({nome: "Casa do Saulo", cidade: "Santarém", endereco: "Praia Carapanari, Km 7,5", telefone: "(93) 9142-1067"});
rioGrandeDoNorte.alimentacao.push({nome: "Nossa Casa", cidade: "Santarém", endereco: "Rua São Cristovão", telefone: "(93) 3522-7684"});
rioGrandeDoNorte.alimentacao.push({nome: "Churrascaria Boi d'ouro", cidade: "Ananindeua", endereco: "Rodovia Mario Covas, 564B", telefone: "(91) 3235-9622"});

rioGrandeDoNorte.lazer.push({nome: "Estação das Docas", cidade: "Belém", endereco: "Av. Boulevard Castilhos", telefone: "(91) 3212-5525"});
rioGrandeDoNorte.lazer.push({nome: "Mangal das Garças", cidade: "Belém", endereco: "Pass. Carneiro da Rocha, Cidade Velha", telefone: "(91) 3242-5052"});
rioGrandeDoNorte.lazer.push({nome: "Teatro da Paz", cidade: "Belém", endereco: "Rua da Paz, s/n, centro", telefone: "(91) 4009-8750"});
rioGrandeDoNorte.lazer.push({nome: "Fazenda São Jerônimo", cidade: "Ilha do Marajó", endereco: "Rod. Soure-Pesqueiro, Km 3, Tucumanduba", telefone: "(91) 3741-2093"});
rioGrandeDoNorte.lazer.push({nome: "Espaço São José Liberto", cidade: "Belém", endereco: "Praça Amazonas, s/n, Jurunas", telefone: "(91) 3344-3514"});

piaui = new estado("Piauí");

piaui.hospedagem.push({nome: "Radisson Hotel Maiorana", cidade: "Belém", endereco: "Av. Comandante Bras de Aguiar, 321", telefone: "(91) 3205-1399"});
piaui.hospedagem.push({nome: "Hotel Solar", cidade: "Salinópolis", endereco: "Av. Atlântica, s/n", telefone: "(91) 3423-1823"});
piaui.hospedagem.push({nome: "Beira Rio Hotel", cidade: "Belém", endereco: "Av. Bernardo Sayão, 4804", telefone: "(91) 4008-9000"});
piaui.hospedagem.push({nome: "Hotel São Bento", cidade: "Marabá" ,endereco: "VP8 Folha 31, Qd 1, Lote 9 e 10", telefone: "(94) 2103-8100"});
piaui.hospedagem.push({nome: "Hotel São Bento", cidade: "Marabá" ,endereco: "VP8 Folha 31, Qd 1, Lote 9 e 10", telefone: "(94) 2103-8100"});

piaui.alimentacao.push({nome: "Manjar das Garças", cidade: "Belém", endereco: "Parque Mangal das Graçaas, Parque Ambiental Mangal das Graças", telefone: "(91) 3242-1056"});
piaui.alimentacao.push({nome: "Remanso do Bosque", cidade: "Belém", endereco: "Tv. Perebebui, 2350", telefone: "(91) 3347-2829"});
piaui.alimentacao.push({nome: "Casa do Saulo", cidade: "Santarém", endereco: "Praia Carapanari, Km 7,5", telefone: "(93) 9142-1067"});
piaui.alimentacao.push({nome: "Nossa Casa", cidade: "Santarém", endereco: "Rua São Cristovão", telefone: "(93) 3522-7684"});
piaui.alimentacao.push({nome: "Churrascaria Boi d'ouro", cidade: "Ananindeua", endereco: "Rodovia Mario Covas, 564B", telefone: "(91) 3235-9622"});

piaui.lazer.push({nome: "Estação das Docas", cidade: "Belém", endereco: "Av. Boulevard Castilhos", telefone: "(91) 3212-5525"});
piaui.lazer.push({nome: "Mangal das Garças", cidade: "Belém", endereco: "Pass. Carneiro da Rocha, Cidade Velha", telefone: "(91) 3242-5052"});
piaui.lazer.push({nome: "Teatro da Paz", cidade: "Belém", endereco: "Rua da Paz, s/n, centro", telefone: "(91) 4009-8750"});
piaui.lazer.push({nome: "Fazenda São Jerônimo", cidade: "Ilha do Marajó", endereco: "Rod. Soure-Pesqueiro, Km 3, Tucumanduba", telefone: "(91) 3741-2093"});
piaui.lazer.push({nome: "Espaço São José Liberto", cidade: "Belém", endereco: "Praça Amazonas, s/n, Jurunas", telefone: "(91) 3344-3514"});

function limparConteudo(){
	document.getElementById("hospedagem").innerHTML = '';
	document.getElementById("alimentacao").innerHTML = '';
	document.getElementById("lazer").innerHTML = '';	
}

function alterarConteudo(estado){
	
	for (i = 0; i < estado.hospedagem.length; i++) {
		document.getElementById("hospedagem").innerHTML += '<li>' + estado.hospedagem[i].nome + '<br>Cidade: ' + estado.hospedagem[i].cidade + '<br>Endereco: ' + estado.hospedagem[i].endereco + '<br>Telefone: ' + estado.hospedagem[i].telefone + '</li>';
		document.getElementById("alimentacao").innerHTML += '<li>' + estado.alimentacao[i].nome + '<br>Cidade: ' + estado.alimentacao[i].cidade + '<br>Endereco: ' + estado.alimentacao[i].endereco + '<br>Telefone: ' + estado.alimentacao[i].telefone + '</li>';
		document.getElementById("lazer").innerHTML += '<li>' + estado.lazer[i].nome + '<br>Cidade: ' + estado.lazer[i].cidade + '<br>Endereco: ' + estado.lazer[i].endereco + '<br>Telefone: ' + estado.lazer[i].telefone + '</li>';
	}
}

function adicionarHospedagem(){
	document.getElementById("crowd").innerHTML = '*Exclusivo para Hospedagem na Bahia<br>Nome: <input id="nome" type="text"><br>Cidade: <input id="cidade" type="text"><br>Endereço: <input id="endereco" type="text"><br>Telefone: <input id="telefone" type="text"><br><button type="text" onClick="create();">Enviar</button> <button onClick="limparNavegacao2();">Voltar</button>';
}

function editarHospedagem(){
	document.getElementById("crowd").innerHTML = '*Exclusivo para Hospedagem na Bahia<br>Posição: <input id="posicao" type="number"><br>Nome: <input id="nome" type="text"><br>Cidade: <input id="cidade" type="text"><br>Endereço: <input id="endereco" type="text"><br>Telefone: <input id="telefone" type="text"><br><button type="text" onClick="edit();">Enviar</button> <button onClick="limparNavegacao2();">Voltar</button>';
}

function create(){
	var a = document.getElementById("nome").value;
	var b = document.getElementById("cidade").value;
	var c = document.getElementById("endereco").value;
	var d = document.getElementById("telefone").value;
	bahia.hospedagem.push({nome: a, cidade: b, endereco: c, telefone: d});
	
	
}

function limparNavegacao2(){
	document.getElementById("crowd").innerHTML = '<button type="button" onClick="adicionarHospedagem();">Adicionar</button> <button type="button" onClick="editarHospedagem();">Editar</button> <button type="button">Excluir</button>'
}

function edit(){
	var position = document.getElementById("posicao").value;
	
	var a1 = bahia.hospedagem[position].nome;
	var b1 = bahia.hospedagem[position].cidade;
	var c1 = bahia.hospedagem[position].endereco;
	var d1 = bahia.hospedagem[position].telefone;
	
	var a2 = document.getElementById("nome").value;
	var b2 = document.getElementById("cidade").value;
	var c2 = document.getElementById("endereco").value;
	var d2 = document.getElementById("telefone").value;
	
	bahia.hospedagem[position].nome.replace("Paradise Houses","meu pau");
	bahia.hospedagem[position].cidade.replace(b1,b2);
	bahia.hospedagem[position].endereco.replace(c1,c2);
	bahia.hospedagem[position].telefone.replace(d1,d2);
}

function validarCadastro(){
	alert("Cadastro realizado! Obrigado");
}
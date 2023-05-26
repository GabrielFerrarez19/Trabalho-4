

var escrita=[
	"Vamos começar!!",
	"<p>Regras 1</p></p><br>Os usuários e a equipe do Laboratório devem preservar o silêncio na sala para que esta se configure como um ambiente de estudo",
	"<p>Regras 2</p><br>É proibido o consumo de qualquer tipo de alimento ou bebida nos Laboratórios.",
	"<p>Regras 3</p><br>O ambiente deve preservar o estado de limpeza e organização de que foi encontrado. Lixo deve ser depositado na lixeira, organizar cadeiras e demais recursos utilizados durante a aula.",
	"<p>Regras 4</p><br>Ao término do uso do laboratório, certifique-se de desligar o PC com a respectiva tela, fechando todos os programas e finalizando o sistema operacional",
	"<p>Regras 5</p><br>É proibido acessar páginas da Internet que possam ser consideradas ilegais ou ofensivas à moral pessoal ou coletiva. Por exemplo, páginas de relacionamentos, pornográficas, de caráter racista,discriminatórias ou que incitem a violência",
	"<p>Regras 6</p><br>Não é permitido usar indevidamente os recursos disponíveis na Internet, como utilizar a internet para acessar site de compras, jogos, redes sociais ou quaisquer outros assuntos não pertinentes a aula. No caso de jogos só serão permitidos aqueles que foram designados pelo instrutor com o objetivo didático-pedagógico.",
	"<p>Regras 7</p><br>Não é permitido utilizar recursos de comunicação instantânea (MSN, salas de bate-papo,googletalk, whatsapp, telegram, entre outros similares) que não estejam previstos em atividades didático-pedagógicas.",
	"<p>Regras 8</p><br>É proibido perturbar o ambiente com brincadeiras, algazarras e/ou qualquer outra atividade alheia às atividades didático-pedagógicas como também exercer atividades não relacionadas com o uso específico deste Laboratório.",
	"<p>Regras 9</p><br>Não é permitido trocar cabos ou equipamentos periféricos e/ou acessórios (teclados, mouses, etc.)Caso algum equipamento apresente defeito ou não ligue, informar o instrutor para que esse comunique a área de TI responsável por manutenções.",
	"<p>Regras 10</p><br>É proibida a instalação de qualquer tipo de programa (mesmo que freeware ou de uso livre) sem a expressa autorização da Supervisão Técnica da Unidade.",
	"<p>Regras 11</p><br>Os arquivos criados devem ser copiados para seu Google Drive (no caso de alunos que possuem a conta SENAI aluno) e/ou enviados para o seu e-mail pessoal. Observando-se que os arquivos deixados no computador podem ser alterados e apagados por qualquer usuário. Portanto, evite deixar arquivos importantes. Não é permitido utilizar pendrive e outros dispositivos similares.",
	"<p>Regras 12</p><br>Proibido desenvolver e/ou disseminar vírus nos equipamentos dos Laboratórios de Informática.",
	"<p>Regras 13</p><br>É proibida a alteração de qualquer componente instalado nos equipamentos (hardware ou software).",
	"<p>Regras 14</p><br>Desmontar qualquer equipamento ou acessório dos Laboratórios de Informática, sob qualquer pretexto, assim como remover equipamentos do local a eles destinados (mesmo dentro do recinto), desde que não esteja previsto em atividades didático-pedagógicas",
	"FIM",
]

var contador = 0;

function proximo(){
	var label = document.getElementById("labelEscrita");
	label.innerHTML = escrita[contador];
	contador=contador+1;
	if(contador>15){
		label.innerHTML="fim!";
		contador =contador-1;
		console.log(contador)
		contador=15
	}
}

function anterior(){
	contador=contador-1;
	var label=document.getElementById("labelEscrita");
	label.innerHTML= escrita[contador];
	console.log(contador)
	if(contador<1){
		label.innerHTML="Vamos começar!!";
		contador=contador+1;
		console.log(contador)
		contador=1
	}
}
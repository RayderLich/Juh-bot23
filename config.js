const ownerNumber = ["5511957235996@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '5511957235996' 
// mude para seu numero

const callbotmsgs = ['JUH', 'BOT']

var gimagenotregister = false
// quando não há comando registrado o bot procura no google image

var sgooglenotregister = false
// quando não há comando registrado o bot procura uma pesquisa no google

const antinewchatmsg = 'O anti chat novo está ativado e você não é meu proprietário, logo será bloqueado'
//mensagem do antinewchat

const urlaudiomenu = ''
// link direto da url do audio

const antipvmsg = '*🚫 PV BLOQUEADO 🚫*'
//mensagem do antipv

const limitqnt = 9999

const delayantispamcmd = 3
//tempo de delay do antispamcmd (medido por segundos)

const msgwelcomeimg = (numero, groupname) => {
    return `Seja bem-vindo ${numero}\n\nEscreve ${prefix}menu para lista de comandos`
}
//Texto de boas vindas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const byemsgimg = (numero, groupname) => {
    return `Adeus ${numero}`
}
//Texto de despedidas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const menumsgimg = (numero, groupname, battery) => {
    return `aguarde ate ano q vem`
}
//Texto no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const titlemenumsgimg = 'calma ae'
//Título no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundmenuimg = `https://i.pinimg.com/236x/6e/d2/3c/6ed23c7f96498fe1fb56022077a352a7.jpg`
//Link direto da imagem de fundo TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundwelcomeimg = `https://i.pinimg.com/236x/6e/d2/3c/6ed23c7f96498fe1fb56022077a352a7.jpg`
//Link direto da imagem de fundo da boas-vindas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundbyeimg = `https://i.imgur.com/2TCj9ri.jpg`
//Link direto da imagem de fundo das despedidas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const apikeyimgbb = 'c9cf132756510ad171587fb5a5a0389f'
// sua key do imgbb para ativar o antiporn e mais alguns comando que necessita de baixar imagem

const cr = 'RS BOt\n' 
// texto do simbolo de verificado

const prefix = '!' 
// prefixo

const blockedmsg = '*😜 Seu número esta bloqueado, ou seja não ouvindo você 😜*'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '*🚫Este comando esta bloqueado contate o propitetário do bot para saber o pq🚫*'
// mensagem quando alguem solicita um comando bloqueado 

// MENSAGENS DE BAN

const banmsgtype = '*Peble, seu ban estar próximo*'
// mensagem de ban no anti tipos de mensagem

const ativohelp = `O sistema de contagem de mensagens é por grupo e consiste em rankear, listar, remover pessoas de acordo
com a frequência de mensagens no grupo, veja abaixo os comandos para administrar as mensagens do grupo:

checkativo (marcar) - lista a frequência de mensagens do membro marcado
rankativo - rankea as pessoas mais ativas do grupo
banativos (num) - remove membros com uma certa qnt de numeros de msg pra baixo
filtroativo (num) - lista membros com uma certa qnt de numeros de msg pra baixo]
atividade - lista a atividade de todos membros do grupo

Obs: O número de mensagens pode estar impreciso devido a contagem ser pelo bot.`

const adminmsgtype = '*Tu é adm ent n vou te banir por mandar um tipo de mensagem proibida*'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = 'Hmmm pornozinho com antiporn ativado, ja sabe né...'
// mensagem de ban no antiporn

const adminmsgporn = '*Tu é adm ent n vou te banir por mandar porn*'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = 'Peble, seu ban estar próximo'
// mensagem de ban no antilink

const adminmsglink = 'Isso é um link amigo... ah é tu é adm ent pode kkkk 🙃'
// mensagem de quando adm manda link

const adminmsgpalavra = 'isso esta na lista das palavras proibidas pelo bot'
// mensagem de quando adm manda uma palavra proibida pelo bot

const banmsgpalavra = 'Palavra proibida? Já sabe né'
// mensagem de ban quando manda uma palavra proibida pelo bot

const qnttravahardroleta = 2
// quantidade de travas que mandam no roleta russa hard
// Obs: O valor é multiplicado por 12 ent tenha cuidado

// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE


// link e mensagem de boa tarde


// link e mensagem de boa noite 

// MENSAGENS DE ERRO

const msgerr = 'Deu erro, tente novamente :/'
// mensagem de erro

const notregister = `*Comando não registrado, escreva ${prefix}menu para ver a lista de comandos*`

// MENSAGENS DE AUTOREPLY


// KEYS

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: '🥶 Fica frio ai, Eu to Fazendo isso pra vc!',
    success: 'Pronto!',
    error: {
        stick: 'IIIh bugou!',
        Iv: 'Link Invalido'
    },
    only: {
        group: 'Esse comando so pode ser usado em grupos',
        ownerG: 'Esse comando so pode ser usado pelo o grupo dono',
        ownerB: ' Este comando só pode ser usado pelo número proprietário!',
        admin: 'Só admin pode usar esse comando burro!',
        Badmin: 'Me da admin primeiro né seu burro!'
    }
}

// CONTATO DO CRIADOR

const vcard = ''
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde

const gpvotohelp = `O sistema de voto gp consiste no sistema normal de voto, porém feito somente para grupos
veja abaixo os comandos e suas funções a seguir:

${prefix}gpinitvoto
${prefix}gpvotoinit - Inicia a votação em grupo
Ex: ${prefix}gpvotoinit tema | opção 1 | opção 2
Obs: pode acrescentar quantas opções quiser

${prefix}gpclearvoto
${prefix}gpvotoclear - Limpa todos os votos

${prefix}gpvotostatus
${prefix}gpstatusvoto - Vê o status atual do voto

${prefix}gpvoto - Vota em uma opção
Ex: ${prefix}gpvoto opção1

${prefix}gpvotofinish
${prefix}gpfinishvoto - Encerra a votação

${prefix}gpbroadvoto
${prefix}gpvotobroad - Faz uma transmissão da votação para todos membros do grupo`

const votohelp = `O sistema de voto consistem em todos os usuários do bot poderem votar e para ter uma boa
experiência, há comandos para administrar essa votação. Veja abaixo os comandos e suas funções a seguir:

${prefix}initvoto
${prefix}votoinit - Inicia a votação geral
Ex: ${prefix}votoinit tema | opção 1 | opção 2
Obs: pode acrescentar quantas opções quiser

${prefix}clearvoto
${prefix}votoclear - Limpa todos os votos

${prefix}votostatus
${prefix}statusvoto - Vê o status atual do voto

${prefix}voto - Vota em uma opção
Ex: ${prefix}voto opção1

${prefix}votofinish
${prefix}finishvoto - Encerra a votação

${prefix}broadvoto
${prefix}votobroad - Faz uma transmissão da votação para todos que usam o bot`

// Nem ouse mexer aqui se n quiser que de erro
exports.gpvotohelp = gpvotohelp
exports.votohelp = votohelp
exports.ativohelp = ativohelp
exports.limitqnt = limitqnt
exports.urlaudiomenu = urlaudiomenu
exports.delayantispamcmd = delayantispamcmd
exports.antinewchatmsg = antinewchatmsg
exports.antipvmsg = antipvmsg
exports.backgroundbyeimg = backgroundbyeimg
exports.backgroundwelcomeimg = backgroundwelcomeimg
exports.backgroundmenuimg = backgroundmenuimg
exports.titlemenumsgimg = titlemenumsgimg
exports.menumsgimg = menumsgimg
exports.gimagenotregister = gimagenotregister
exports.sgooglenotregister = sgooglenotregister
exports.byemsgimg = byemsgimg
exports.msgwelcomeimg = msgwelcomeimg
exports.notregister = notregister
exports.qnttravahardroleta = qnttravahardroleta
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.banmsgpalavra = banmsgpalavra
exports.adminmsgpalavra = adminmsgpalavra
exports.apikeyimgbb = apikeyimgbb



exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber
exports.callbotmsgs = callbotmsgs

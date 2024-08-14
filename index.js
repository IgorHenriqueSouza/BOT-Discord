const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

const token = process.env.DISCORD_TOKEN;
client.login(token);

const canalId = "1261125360427466844";

client.once("ready", () => {
  console.log(`Bot logado como ${client.user.tag}`);

  const canal = client.channels.cache.get(canalId);

  // Função para enviar mensagem nos dias específicos
  function enviarMensagem() {
    const hoje = new Date();
    const diaDaSemana = hoje.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado

    // Verifica se hoje é segunda (1), quarta (3) ou sexta-feira (5)
    if (diaDaSemana === 1 || diaDaSemana === 3 || diaDaSemana === 5) {
      if (canal) {
        canal.send(
          "@everyone \n" +
            "HOJE TEM WORLD WAR\n" +
            "🇧🇷 World War - Segunda, Quarta e Sexta as 21hrs no Servidor 1 no mapa Devias 3 (cheguem 30 min antes para organizar as PTs). \n" +
            "\n" +
            "Premiação: Entrada para o mapa Debenter no Servidor 1 onde dropa seeds level 4, elemental rune, abilitys e guardian stone (lembrar de pegar TAG para entrar no mapa de Debenter).\n" +
            "---------------- \n" +
            "\n" +
            "TODAY THERE IS WORLD WAR \n" +
            "🇺🇲 World War - Monday, Wednesday and Friday at 20pm on Server 1 on the Devias 3 map (arrive 30 minutes early to organize PTs).\n" +
            "Prize: Entry to the Debenter map on Server 1 where it drops level 4 seeds, elemental rune, abilities and guardian stone (remember to get TAG to enter the Debenter map)."
        );
      }
    }
  }

  // Executa a função imediatamente ao iniciar o bot
  enviarMensagem();

  // Configura o intervalo para 24 horas
  setInterval(enviarMensagem, 86400000); // 86400000 ms = 24 horas
});

client.login(token);

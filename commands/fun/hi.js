const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('嗨')
		.setDescription('我是你媽嗎？'),
	async execute(interaction) {
		return interaction.reply('你腦子有病吧！');
	},
};

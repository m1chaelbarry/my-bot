const { SlashCommandBuilder } = require('@discordjs/builders');

const average = (array) => array.reduce((a, b) => a + b) / array.length;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('srednia')
		.setDescription('Liczy twoją średnią!')
		.addStringOption(option => option.setName('a').setDescription('Twoje oceny w kat. A oddzielone spacją'))
		.addStringOption(option => option.setName('b').setDescription('Twoje oceny w kat. B oddzielone spacją'))
		.addStringOption(option => option.setName('c').setDescription('Twoje oceny w kat. C oddzielone spacją')),
		
	async execute(interaction) {
		ocenyA = String(interaction.options.getString('a')).split(' ').map(Number);
		ocenyB = String(interaction.options.getString('b')).split(' ').map(Number);
		ocenyC = String(interaction.options.getString('c')).split(' ').map(Number);
	
		console.log(ocenyA)
		console.log(ocenyB)
		console.log(ocenyC)
        console.log('\n')

		let sredniaA = average(ocenyA)*0.6;
		let sredniaB = average(ocenyB)*0.25;
		let sredniaC = average(ocenyC)*0.15;

        if (isNaN(sredniaA)) sredniaA = 0;
        if (isNaN(sredniaB)) sredniaB = 0;
        if (isNaN(sredniaC)) sredniaC = 0;
		
		console.log(sredniaA)
		console.log(sredniaB)
		console.log(sredniaC)
        console.log('\n')
		
		const SredniaKoncowa = sredniaA + sredniaB + sredniaC
		console.log(SredniaKoncowa)


		await interaction.reply(String(SredniaKoncowa));
	},
};
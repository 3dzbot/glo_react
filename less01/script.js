'use strict';
const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
const command = [];

//удалили из массива пустые значения и двойной перебор
for (let i = 0; i < employers.length; i++) {
	if (employers[i].length > 0 && employers[i].trim() != '') {
		employers[i] = employers[i].toLowerCase().trim();
		employers[i] = employers[i][0].toUpperCase() + employers[i].slice(1);
		command.push(employers[i]);
	}
}

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

//не уверен. после пуша посмотрю как надо было )
const calcCash = ({cash}) => {
	let total;
	total = cash.reduce((sum, current) => sum + current, 0);
}

const lesson = calcCash(data);

function makeBusiness(director, teacher, allModule, gang, course) {
	teacher = teacher || 'Максим';
	let sumTech = data.react.concat(data.add, 'и другие');
	console.log(`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
	Команда Академии: ${gang}`);
	console.log(`Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`);
	console.log('Технологии которые мы изучим: ');
	console.log(...sumTech);

}

makeBusiness(...['Артем', null, lesson, command, nameCourse]);

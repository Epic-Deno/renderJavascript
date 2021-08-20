let arr1 = [
	{
		id: 1,
		name: '222',
	},
	{
		id: 1,
		name: '333'
	},
	{
		id: 2,
		name: '2333'
	},
	{
		id: 2,
		name: '2333'
	}

]

let newArr = new Array();

arr1.map(res => {
	// 每一项
	let targetRow = newArr.find(i => i.id == res.id);
	!targetRow && newArr.push(res)
})
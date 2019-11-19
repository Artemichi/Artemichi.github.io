const margin = {
	top: 50,
	right: 50,
	bottom: 50,
	left: 55
}

const width = window.innerWidth > 1024 ? window.innerWidth - 300 - margin.left - margin.right : window.innerWidth 
const height = window.innerHeight - margin.top - margin.bottom

const svg = d3.select('body').append('svg')
	.attr('id', 'chart')
	.attr('width', width + margin.left + margin.right)
	.attr('height', height + margin.top + margin.bottom)
		.append('g')
			.attr('transform', `translate(${margin.left},${margin.top})`)

const data = [
	{id: 1, title: 'Apple', value: 522},
	{id: 2, title: 'Samsung', value: 122},
	{id: 3, title: 'OPPO', value: 22},
	{id: 4, title: 'OnePlus', value: 322},
	{id: 5, title: 'Xiaomi', value: 700},
	{id: 6, title: 'LG', value: 600},
	{id: 7, title: 'Redmi', value: 300},
]

const x = d3.scaleLinear()
		.range([0,width])

const xAxis = d3.axisTop()
	.scale(x)

svg
	.append('g')
	.attr('class', 'x-axis')
	.call(xAxis)

const y = d3.scaleBand()
	.range(0,height)

const yAxixs = d3.axisLeft()
	.scale(y)
	
svg
	.append('g')
	.attr('class', 'y-axis')
	.call(yAxixs)	

const draw = () => {
	const barHeight = 100
	const barOffset = 3
	
	const valueRange = [
		0,
		d3.max(data, d => d.value)
	]

	x
		.domain(valueRange)

	y
		.domain(data.map(d => d.title))
		.range([0, data.length * barHeight + data.length * barOffset - barOffset])


	const bars = svg.selectAll('.bar').data(data)

	bars
		.exit()
			.transition()
			.duration(1000)
			.style('fill', 'transparent')
		.remove()

	const barAdd = bars
		.enter()
			.append('rect')
				.attr('class', 'bar')
				.attr('height', barHeight)

	barAdd.merge(bars)
		.transition().duration(1000)
			.attr('width', d => x(d.value))
			.attr('y', (d, n) => n * barHeight + n * barOffset + 1)

	svg
		.select('.x-axis')
			.transition()
		.call(xAxis)

	svg
		.select('.y-axis')
			.transition()
		.call(yAxixs)

}

draw()

const animate = setInterval(() => {
	if (data.length != 0) {
		const el = Math.round(Math.random() * (data.length - 1))
		data[el].value = Math.round(Math.random() * 1000)

		draw()
	}else {
		clearInterval(animate)

		d3.selectAll('g')
			.transition()
			.duration(1000)
			.style('opacity', '0')
			.remove()

		d3.select('#chart')
		.append('text')
			.style('opacity', '0')
			.transition().duration(1000)
			.style('opacity', '1')
			.style('font-weight', '500')
			.attr('text-anchor', 'middle')
			.attr('x', `${(width + margin.left + margin.right) / 2}`)
			.attr('y', `${(height + margin.top + margin.bottom) / 2}`)
			.text('Данные отсутствуют, приходите позже 😕')
	}
}, 1500);

svg.selectAll('.bar').on('click', (d,i) => {
	data.splice(i,1)
})
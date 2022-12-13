const code = `
() => {
	const [data, setData] = useState(DATA)

	const handleFilter = (e) => {
		const filteredData = DATA.filter((val) => val[0].includes(e.target.value))
		setData(filteredData)
	}

	return (
		<Box>
			<Input
				sx={{ marginBottom: 2, width: 400 }}
				onChange={handleFilter}
			/>

			<Paper sx={{ height: '80vh', overflow: 'scroll' }}>
				<List>
					{data.map(([a, b, c, d]) => (
						<ListItem key={a}>
							<ListItemText
								primary={
									<span>
										{a}; {b}; {c}; {d}
									</span>
								}
							/>
						</ListItem>
					))}
				</List>
			</Paper>
		</Box>
	);
}
`.trim()

export default code
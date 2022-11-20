export const parseCSV = <T>(data: string) => {
	const rows = data.split('\r\n')
	const firstRow = rows[0].split(',')
	rows.shift()
	const items: Array<T> = []
	for(const row of rows) {
		const item: T = {} as T;
		const parsedRow = row.split(',')
		// if (!parsedRow[0]) continue;
		for (const index in firstRow) {
			const key = firstRow[index]
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			item[key] = parsedRow[index]
		}
		items.push(item)
	}
	return items
}

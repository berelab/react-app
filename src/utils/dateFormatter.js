export const formatDate = (date) => {
	const objectDate = new Date(date.release_date);
	const year = objectDate.getFullYear();
	const month = objectDate.getMonth();
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const new_date = `${monthNames[month]} ${year}`;

	return new_date;
};

export default function getListStudentIds(thugg) {
	let newthugg = [];
	if (thugg instanceof Array) {
		newthugg = thugg.map((item) => item.id);
	}

	return newthugg;
}

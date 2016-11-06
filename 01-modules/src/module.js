export function valid(email) {
	return (email.match(/[0-9]@fh-salzburg.ac.at/i) != null ? true : false);
}

export function degreeProgram(email) {
	return email.split(".")[1].split("-")[0].toUpperCase();
}

export function level(email) {
	return (email.split(".")[1].split("-")[1].toUpperCase().substring(0,1) == "B" ? "BA" : "MA");
}

export function graduationYear(email) {
	var degreeLevel = level(email);
	var joint = email.split(".")[1].split("-")[1].toUpperCase().substring(1,5);

	return (degreeLevel == "BA" ? Number(joint)+3 : Number(joint)+2);
}

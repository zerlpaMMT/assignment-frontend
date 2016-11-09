export function valid(email) {
	return (/[A-z].[A-z]{3,4}-[b|m]{1}[0-9]{4}@fh-salzburg.ac.at/i).test(email);
}

export function degreeProgram(email) {
	return (valid(email) ? email.split(".")[1].split("-")[0].toUpperCase() : null);
}

export function level(email) {
	return (valid(email) ? (email.split(".")[1].split("-")[1].toUpperCase().substring(0,1) == "B" ? "BA" : "MA") : null);
}

export function graduationYear(email) {
	var degreeLevel = level(email);

	if(degreeLevel != null){
		var joint = email.split(".")[1].split("-")[1].toUpperCase().substring(1,5);

		return (degreeLevel == "BA" ? Number(joint)+3 : joint+2);
	}
	
	return null;
}

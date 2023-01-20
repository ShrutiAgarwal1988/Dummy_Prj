
  

var entry = {
	
	
	
	
	var allEntries = [entry];
	localStorage.setItem("entry", JSON.stringify(entry));
	
	localStorage.setItem("allEntries", JSON.stringify(allEntries));
			 




function search_details() {
    let input = document.getElementById('searchbox').value
    input = input.toLowerCase();
    let x = document.querySelector('#div-selector');
	x.innerHTML ="";
	

    for (i = 0; i < data.length; i++) {
      let obj = data[i];
	
      if (obj.basics.toLowerCase().includes(input) || obj.location.toLowerCase().includes(input) || obj.profiles.toLowerCase().includes(input) || obj.skills.toLowerCase().includes(input) || obj.id.includes(input) || obj.work.toLowerCase().includes(input) || obj.Internship.toLowerCase().includes(input) || obj.projects.toLowerCase().includes(input) || obj.education.toLowerCase().includes(input) || obj.Senior-Secondary.toLowerCase().includes(input) || obj.High-School.toLowerCase().includes(input) || obj.achievements.toLowerCase().includes(input) || obj.interests.toLowerCase().includes(input)) {
        const elem = document.createElement("p");
        elem.innerHTML =` ${obj.id} - ${obj.basics} - ${obj.location} - ${obj.profiles} - ${obj.skills} - ${obj.work} - ${obj.Internship} - ${obj.projects} - ${obj.education} - ${obj.Senior-Secondary} - ${obj.High-School} -${obj.achievements} - ${obj.interests}`
        x.appendChild(elem);
      }
    }
	
};

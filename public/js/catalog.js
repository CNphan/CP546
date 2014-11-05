var subjects = [];
function isSubject(name){
  for(n in subjects){
    if(n == name){
      return true;
    }
  }
  return false;
}
var getSubjects = function (schedules){
  for(var n = 0; n < schedules.length; n++){
    console.log(n);
    if(!isSubject(n.course.subject.name)){
      //console.log(n);
      //subjects.push(n.course.subject.name);
    }
  }
  return subjects;
};
var getDays = function(j){
	var days = '';
	if (j.sat == true){
		days.concat(days, 'S ');
	}
	if (j.mon == true){
		days.concat(days, 'M ');
	}
	if (j.tue == true){
		days.concat(days, 'T ');
	}
	if (j.wed == true){
		days.concat(days, 'W ');
	}
	if (j.thur == true){
		days.concat(days, 'Th ');
	}
	if (j.fri == true){
		days.concat(days, 'F ');
	}
	if (j.sun == true){
		days.concat(days, 'Sun ');
	}
	return days;
};
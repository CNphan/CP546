# User Stories
### User Stories Format
> " As a -role-, I want -goal/desire- so that -benefit-"
Benefit is optional.

### Assumptions Made 
1. Professors can be generalized to the term "teacher".
2. Want schedules and course registration managed above all.
3. Semester can be generalized as "session".
4. Class will be generalized as "course".
5. Degree will be generalized as "subject".

### User Vision Broken Down to User Stories
1. Students will use their PCs to log into the system and request classes.
  1. As a student, I want sign in from my home personal computing device.
  2. As a student, I want to request to register for university sessions.
  3. As a student, I want to request addition to class roll.
2. Students will display the number of openings (which may be none) of all sections of a course, and select one of the open sections. 
  1. As a student, I want to see the number of seats a class has and how many are available.
  2. As a system, it should not allow a student to add classes with no seats remaining.
3. Students will drop courses, but only before the second week of classes.
  1. As a student, I want to drop a class.
  2. As a system, it should not allow a student to drop after the 2nd week of a session.
4. Students will display their current schedule and their previous history—courses taken and grades earned.
  1. As a student, I want to see my current schedule.
  2. As a student, I want to see my class history.
  3. As a student, I would like to see my posted grades with my class history.
  4. As a student, I would like to sort my class history by semester.
5. The system will enforce prerequisites and not allow a student to enroll in a class for which he hasn’t taken the required previous course or courses.
  1. As a system, it should restrict students from registering if prerequisites have not been taken.
6. Professors will display the entire roll for a given class or the schedule of a given student. 
  1. As a teacher, I want to see my class roll.
  2. As a teacher, I want to see a students current schedule.
7. Professors will also display the history of a student to see which courses he has taken in the past.
  1. As a teacher, I want to view the students class history.
8. Professors will be able to drop students from a class.
  1. As a teacher, I want to drop a student.
9. Professors will enter grades for students. 
  1. As a teacher, I want to enter student grades.
10. Administrative staff will enter new students and professors into the system, and assign passwords. 
  1. As a administrator, I want to add a user account.
  2. As a administrator, I want to authorize user profiles status at the university.
  3. As a administrator, I want to assign a users profile password.
11. Administrator will also remove student and professor authorizations, but not student histories. 
  1. As a administrator, I want deactivate a user profiles authorization.
  2. As a system, It should not allow a users history to be deleted.
12.  Administrator will enter the class schedule for a semester, and enter the descriptions of new courses, including prerequisites. 
  1. As a administrator, I want to enter a class schedule.
  2. As a administrator, I want class schedules to be assigned to a session.
  3. As a administrator, I want to add new courses.
13. Administrator will enter the list of courses for degree majors.
  1. As a administrator, I want assign courses to all degree majors.
14. The system will update student grade levels—freshman, sophomore, and so forth—depending upon the number of units that a student has successfully completed.
  1. As a system, it should updates students grade status.
  2. As a system, it should define grade status freshman, sophomore, junior, senior.
  3. As a system, it should only authorize grade status for successfully completed courses.
15. The system will perform graduation checks, which involve determining that a student has completed a specific set of courses for his major.
  1. As a system, it should perform graduation check.
  2. As a system, it should define a graduation check by checking course completion against their assigned degree.
16. The system will produce student transcripts, lists of courses taken and grades earned, on request by an administrator.
  1. As a administrator, I want to view a students transcripts.  
  2. As a administrator, I want to view a students history and grades earned.

**Derived User Stories Total**: 33
# University Manager

This web application manages aspects of a university.  The user profiles managed by the application are students, teachers, and university administrators.
  
### Features
#### Students
* Search the class schedule for available seats.
* Add class to their schedule if seats remain.
* Drop a class from their schedule and give an explanation as to why.
  
#### Teachers
* Drop students from their class.
* View their current schedule.

#### University Administrator
* Add new student/teacher/administrator profiles.
* Deactivate profiles but not delete them.
* Schedule classes at the university.
  
  
## Development Environments
Below you will find information on the component used on the back-end and front-end of the application.  Development environment will operate via your local host on port 3000.

### Back-end System
This will be delivered using Node.js with Express. The database we will use will be a noSQL DBMS called MongoDB.  To create bindings to Node.js application the Mongoose.js package on NPM will be used.

#### Node.js & Express.js
* Node.js | www.nodejs.org
* Express | www.expressjs.com

#### MongoDB
* Mongodb | www.mongodb.com
* Mongoose | www.mongoosejs.com

### Front-end System
This will be delivered using popular web technologies like HTML5, JavaScript, and CSS3.  For the HTML5 language we will be using the Jade Template Engine which is ideal for communicating with the backend system.

#### HTML5
* W3C School | www.w3schools.com/html 
* Jade Template Engine | www.jade-lang.com 
 
#### JavaScript (ECMA 5)
* W3C School | www.w3schools.com/js
* Note : Jade allows for you to write aspects of JavaScript see Jade website.

#### CSS3
* W3C | www.w3schools.com/css


## Development Tools
You can use a standard text editor to develop or you can use the Eclipse IDE.  Terminal commands are used to leverage the backend components.  

### Installing NodeEclipse
#### New Installation
Got to www.nodeclipse.org/updates for instruction on how to install new environments.


#### Existing Installation
To add nodeeclipse to an existing installation of eclipse goto the application menu bar and select *Help > Install New Software*.  In the *Work with:* input field enter this address `http://dl.bintray.com/nodeclipse/nodeclipse/0.17`.  Select the core package and any other desired packages and install.

### Installing MongoDB



## Testing
### Unit Test
Unit test will be done on processes that determine decisions with feature task.

### Functional Test
Each task should be tested for correct and incorrect inputs where appropriate.

### System Test
The system will be tested for all features under each profile.

 
## Template Design
### Libraries In Use
This project uses several CSS and JavaScript packages available to the public.  Instructions for using these an be found on their homepage.
* Jquery 2.1.1 | www.jquery.com
* Twitter Bootstrap | www.getbootstrap.com

### Creating a page.
When creating a page layout there are several things to remember.  You will load external resources by encapsulating in the appropriate Jade `block` tag.  Jade is structure based and requires proper indentation of code.  Indent space is a 2 character spacing and not the TAB key element.

The templates assume they are placed at the root of the `\public\` directory.
```jade

// Begin Jade template.
extends layout

//-CSS is inserted in the HEAD tag.
block css
  
//-JavaScript will be inserted at the end of the BODY tag.
block js
  
//-Add navigation item to existing navigation set.
block nav
  
//-Add navigation item to existing Administrator navigation set.
block navAdmin
  
//-Add navigation item to existing Teacher navigation set.
block navTeacher
  
//-Add navigation item to existing Student navigation set.
block navStudent
  
//-HTML content to display.
block content
  section#main.container
    .row
      //-Columns in a row must equal 12. 
      .col-xs-12.col-sm-12.col-md-12.col-lg-12

// End Jade Template
```

#### Loading JavaScript Files
If using self generated JavaScript you can load it using `block js`.  You have two options for loading JavaScript content.  You can use the SCRIPT tag or you can use the preferred method and include a `.js` file from the `public/js` directory folder.
```jade

block js
  script 
    //-code here
  script(src='js/myfile.js') //-preferred
```

#### Loading CSS Files
If using self generated css you can load it using `block css`.  You can include a `.css` file from the `public/css` directory folder.
```jade

block css
  link(rel='stylesheet', href='/css/myfile.css')
```

#### Adding Navigation Link Items
When adding navigation items you can use `+navItem()` for any profile `block nav*` tag.
```jade

block nav
  +navItem('Item Name', 'link location')
```

#### Adding Content
When adding html content to a page you need to use the correct encapsulation of section content and table alignment using the Twitter Bootstrap [Grid Options](http://getbootstrap.com/css/#grid-options).  Grid rows must have colums be equal to 12.
```jade

block content
  section#main.container
    .row
      .col-xs-12.col-sm-12.col-md-12.col-lg-12
```

### Page Linking
The link structure will defined as such during development:
* Home | [localhost:3000](http://localhost:3000)
⋅⋅* Security: unrestricted
⋅⋅* Display School Welcome & Information
* Catalog | [localhost:3000/catalog](http://localhost:3000/catalog)
⋅⋅* Security: unrestricted
⋅⋅* Show current session by subject.
⋅⋅* If student show add class button if room exist.
* My Schedule | [localhost:3000/catalog/schedule](http://localhost:3000/catalog/schedule)
⋅⋅* Security: Teacher & Student Only
⋅⋅* There should be no profile difference.
* Add Schedule | [localhost:3000/catalog/add](http://localhost:3000/catalog/add)
⋅⋅* Security: Administrator Only
⋅⋅* Upon completion return to root page of process.
⋅⋅* See [Data](#data-design) Design to understand the best way to manipulate data.
⋅⋅* Upon completion return to root page of process.
* Add Class | [localhost:3000/student/add](http://localhost:3000/student/add)
⋅⋅* Security: Student Only
⋅⋅* Upon completion return to root page of process.
* Drop Class | [localhost:3000/student/drop](http://localhost:3000/student/drop)
⋅⋅* Security: Teacher & Student Only
⋅⋅* Upon completion return to root page of process.
* Student's History | [localhost:3000/student/history](http://localhost:3000/student/history)
⋅⋅* Security: Teacher & Student Only
* Profile | [localhost:3000/user](http://localhost:3000/user)
⋅⋅* Security: Registered Users
* Register | [localhost:3000/credentials/register](http://localhost:3000/credentials/register)
⋅⋅* Security: unrestricted
* Add User | [localhost:3000/credentials/add](http://localhost:3000/credentials/add)
⋅⋅* Security: Administrator Only
⋅⋅* Upon completion return to root page of process.
* De-Activate User | [localhost:3000/credentials/deactivate](http://localhost:3000/credentials/deactivate)
⋅⋅* Security: Administrator Only
⋅⋅* Upon completion return to root page of process.

## Data Design
Node.js and MongoDB both work with JSON data by default.  Data stores passed to the template will be processes this way.  Data passed to the templates is defined as follows.

### User Profile
**Value name passed to template** : user

| Value            | Option                               | Default     |
| ---------------- |:------------------------------------:| -----------:|
| id               |  16 digit alpha / numeric assign key | null        |
| type             |  default : student : teacher : admin | default     |
| first            |  string value                        | Guest       |
| last             |  string value                        | User        |
| isActive         |  true : false                        | false       |
 
### Class Schedule
**Value name passed to template** : classSession[int] where int is the record number as an integer.

| Value            | Option                                     | Default     |
| ---------------- |:------------------------------------------:| -----------:|
| code             | 2 digit month - 2 digit year - length code | null        |
| startDate        |                                            | null        |
| endDate          |                                            | null        |

**Value name passed to template** : schedule[int] where int is the record number as an integer.

| Value            | Option                                | Default     |
| ---------------- |:-------------------------------------:| -----------:|
| session          | classSession[int]                     | null        |
| classCode        | int                                   | null        |
| subjectCode      | scheduleSubject[int]                  | null        |
| className        | string value                          | null        |
| classDescription | string Value                          | null        |
| dailyMeeting     | scheduleDaily (object)                | null        |
| startTime        | date object                           | null        |
| length           | minutes as int (ie 60 = 60 min)       | null        |
| seats            | integer value                         | null        |
| seatsTaken       | integer value                         | null        |

**Value name passed to template** : scheduleDaily

| Value            | Option                               | Default     |
| ---------------- |:------------------------------------:| -----------:|
| sun              |  true : false                        | false       |
| mon              |  true : false                        | false       |
| tue              |  true : false                        | false       |
| wed              |  true : false                        | false       |
| thur             |  true : false                        | false       |
| fri              |  true : false                        | false       |
| sat              |  true : false                        | false       |

**Value name passed to template** : scheduleSubject[int] where int is the record as an integer.

| Value            | Option                               | Default     |
| ---------------- |:------------------------------------:| -----------:|
| code             |  3 char : string value               | null        |
| name             |  string value                        | null        |
| description      |  string value                        | null        |


### School Profile
**Value name passed to template** : school

| Value            | Option                     | Default     |
| ---------------- |:--------------------------:| -----------:|
| name             | string value               | null        |
| currentSession   | string value               | null        |
| previousSession  | string value               | null        |
| nextSession      | string value               | null        |
| president        | string value               | null        |
| city             | string value               | null        |
| state            | string value               | null        |
| zip              | integer value              | null        |

### User Stories
#### Format
> " As a <role>, I want <goal/desire> so that <benefit> "
Benefit is optional.

#### Assumptions
1. Professors can be generalized to the term "teacher".
2. Want schedules and class registration managed above all.
3. Semester can be generalized as "session".

#### User Vision Broken Down
1. Students will use their PCs to log into the system and request classes.

⋅⋅1. As a student, I want sign in from my home personal computing device.

⋅⋅2. As a student, I want to request to register for university sessions.

⋅⋅3. As a student, I want to request addition to class roll.

2. Students will display the number of openings (which may be none) of all sections of a course, and select one of the open sections. 

⋅⋅1. As a student, I want to request addition to class roll.

⋅⋅2. As a student, I want to see the number of seats a class has and how many are available.

⋅⋅3. As a system, it should not allow a student to add classes with no seats remaining.

3. Students will drop courses, but only before the second week of classes.

⋅⋅1. As a student, I want to drop a class.

⋅⋅2. As a system, it should not allow a student to drop after the 2nd week of a session.

4. Students will display their current schedule and their previous history—courses taken and grades earned.

⋅⋅1. As a student, I want to see my current schedule.

⋅⋅2. As a student, I want to see my class history.

⋅⋅3. As a student, I would like to see my posted grades with my class history.

⋅⋅4. As a student, I would like to sort my class history by semester.

5. The system will enforce prerequisites and not allow a student to enroll in a class for which he hasn’t taken the required previous course or courses.

⋅⋅1. As a system, it should restrict students from registering if prerequisites have not been taken.

6. Professors will display the entire roll for a given class or the schedule of a given student. 

⋅⋅1. As a teacher, I want to see my class roll.

⋅⋅2. As a teacher, I want to see a students current schedule.

7. Professors will also display the history of a student to see which courses he has taken in the past.

⋅⋅1. As a teacher, I want to view the students class history.

8. Professors will be able to drop students from a class.

⋅⋅1. As a teacher, I want to drop a student.

9. Professors will enter grades for students. 

⋅⋅1. As a teacher, I want to enter student grades.

10. Administrative staff will enter new students and professors into the system, and assign passwords. 

⋅⋅1. As a administrator, I want to add a user account.

⋅⋅2. As a administrator, I want to authorize user profiles status at the university.

⋅⋅3. As a administrator, I want to assign a users profile password.

11. Administrator will also remove student and professor authorizations, but not student histories. 

⋅⋅1. As a administrator, I want deactivate a user profiles authorization.

⋅⋅2. As a system, It should not allow a users history to be deleted.

12.  Administrator will enter the class schedule for a semester, and enter the descriptions of new courses, including prerequisites. 

⋅⋅1. As a administrator, I want to enter a class schedule.

⋅⋅2. As a administrator, I want class schedules to be assigned to a session.

⋅⋅3. As a administrator, I want to add new courses.

13. Administrator will enter the list of courses for degree majors.

⋅⋅1. As a administrator, I want assign courses to all degree majors.

14. The system will update student grade levels—freshman, sophomore, and so forth—depending upon the number of units that a student has successfully completed.

⋅⋅1. As a system, it should updates students grade status.

⋅⋅2. As a system, it should define grade status freshman, sophomore, junior, senior.

⋅⋅3. As a system, it should only authorize grade status for successfully completed courses.

15. The system will perform graduation checks, which involve determining that a student has completed a specific set of courses for his major.

⋅⋅1. As a system, it should perform graduation check.

⋅⋅2. As a system, it should define a graduation check by checking course completion against their assigned degree.

16. The system will produce student transcripts, lists of courses taken and grades earned, on request by an administrator.

⋅⋅1. As a administrator, I want to view a students transcripts.  

⋅⋅2. As a administrator, I want to view a students history and grades earned.

#### Derived User Stories
**Total**: 34

1. As a student, I want to request addition to class roll.

2. As a student, I want to see the number of seats a class has and how many are available.

3. As a system, it should not allow a student to add classes with no seats remaining.

4. As a student, I want to drop a class.

5. As a system, it should not allow a student to drop after the 2nd week of a session.

6. As a student, I want to see my current schedule.

7. As a student, I want to see my class history.

8. As a student, I would like to see my posted grades with my class history.

9. As a student, I would like to sort my class history by semester.

10. As a system, it should restrict students from registering if prerequisites have not been taken.

11. As a teacher, I want to see my class roll.

12. As a teacher, I want to see a students current schedule.

13. As a teacher, I want to view the students class history.

14. As a teacher, I want to drop a student.

15. As a teacher, I want to enter student grades.

16. As a administrator, I want to add a user account.

17. As a administrator, I want to authorize user profiles status at the university.

18. As a administrator, I want to assign a users profile password.

19. As a administrator, I want deactivate a user profiles authorization.

20. As a system, It should not allow a users history to be deleted.

21. As a administrator, I want to enter a class schedule.

22. As a administrator, I want class schedules to be assigned to a session.

23. As a administrator, I want to add new courses.

24. As a administrator, I want assign courses to all degree majors.

25. As a system, it should updates students grade status.

26. As a system, it should define grade status freshman, sophomore, junior, senior.

27. As a system, it should only authorize grade status for successfully completed courses.

28. As a system, it should perform graduation check.

29. As a system, it should define a graduation check by checking course completion against their assigned degree.

30. As a student, I want sign in from my home personal computing device.

31. As a student, I want to request to register for university sessions.

32. As a student, I want to request addition to class roll.

33. As a administrator, I want to view a students transcripts.  

34. As a administrator, I want to view a students history and grades earned.

#### Task Creation
1. Credentials

⋅⋅1. As a system, it should updates students grade status.

⋅⋅2. As a system, it should define grade status freshman, sophomore, junior, senior.

⋅⋅3. As a student, I want to request to register for university sessions.

⋅⋅4. As a administrator, I want to add a user account.

⋅⋅5. As a administrator, I want to authorize user profiles status at the university.

⋅⋅6. As a administrator, I want to assign a users profile password. 

⋅⋅7. As a administrator, I want deactivate a user profiles authorization.

2. Catalog

⋅⋅1. As a administrator, I want class schedules to be assigned to a session.

⋅⋅2. As a administrator, I want assign courses to all degree majors.

3. Course

4. My Schedule

5. Front-end

⋅⋅1. As a student, I want sign in from my home personal computing device.

6. Back-end

⋅⋅1. As a system, it should perform graduation check.

⋅⋅2. As a system, it should define a graduation check by checking course completion against their assigned degree.

⋅⋅3. As a system, it should updates students grade status.

⋅⋅4. As a system, it should define grade status freshman, sophomore, junior, senior.

⋅⋅5. As a system, it should only authorize grade status for successfully completed courses.

⋅⋅6. As a system, It should not allow a users history to be deleted.

⋅⋅7. As a system, it should restrict students from registering if prerequisites have not been taken.

⋅⋅8. As a system, it should not allow a student to add classes with no seats remaining.

⋅⋅9. As a system, it should not allow a student to drop after the 2nd week of a session.

7. Student

⋅⋅1. As a student, I want sign in from my home personal computing device.

⋅⋅2. As a student, I want to request to register for university sessions.

⋅⋅3. As a student, I want to request addition to class roll.

⋅⋅4. As a student, I want to see the number of seats a class has and how many are available.

⋅⋅5. As a student, I want to drop a class.

⋅⋅6. As a student, I want to see my current schedule.

⋅⋅7. As a student, I want to see my class history.

⋅⋅8. As a student, I would like to see my posted grades with my class history.

⋅⋅9. As a student, I would like to sort my class history by semester.

8. Administrator

⋅⋅1. As a administrator, I want assign courses to all degree majors.

⋅⋅2. As a administrator, I want to enter a class schedule.

⋅⋅3. As a administrator, I want to add new courses.

⋅⋅4. As a administrator, I want deactivate a user profiles authorization.

⋅⋅5. As a administrator, I want to add a user account.

⋅⋅6. As a administrator, I want to authorize user profiles status at the university.

⋅⋅7. As a administrator, I want to assign a users profile password.

9. Teacher

⋅⋅1. As a teacher, I want to see my class roll.

⋅⋅2. As a teacher, I want to see a students current schedule.

⋅⋅3. As a teacher, I want to view the students class history.

⋅⋅4. As a teacher, I want to drop a student.

⋅⋅5. As a teacher, I want to enter student grades.

10. Posting Data

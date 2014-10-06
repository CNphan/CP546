# University Manager

This web application manages aspects of a university.  The user profiles managed by the application are students, teachers, and university administrators.
  
### Features
#### Students
* Search the course schedule for available seats.
* Add course to their schedule if seats remain.
* Drop a course from their schedule and give an explanation as to why.
  
#### Teachers
* Drop students from their course.
* View their current schedule.

#### University Administrator
* Add new student/teacher/administrator profiles.
* Deactivate profiles but not delete them.
* Schedule courses at the university.
  
  
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


## End User Environments
### Web Browsers
* Mozilla Firefox
* Chrome
* Safari
* Internet Explorer

### Web Browser Operating Systems
* Microsoft Windows
* Apple OS
* Apple iOS
* Linux Distributions
* Android
 

## Development Tools
You can use a standard text editor to develop or you can use the Eclipse IDE.  Terminal commands are used to leverage the backend components.  

### Installing NodeEclipse
#### New Installation
Got to www.nodeclipse.org/updates for instruction on how to install new environments.


#### Existing Installation
To add nodeeclipse to an existing installation of eclipse goto the application menu bar and select *Help > Install New Software*.  In the *Work with:* input field enter this address `http://dl.bintray.com/nodeclipse/nodeclipse/0.17`.  Select the core package and any other desired packages and install.

### Installing MongoDB
Goto [www.mongodb.org/downloads](http://www.mongodb.org/downloads) and download version 2.2.7 package that relates to your operating system.  Follow the installers instruction, if any.

## Testing
### Unit Test
Unit test will be done on processes that determine decisions with feature task.

### Functional Test
Each task should be tested for correct and incorrect inputs where appropriate.

### System Test
The system will be tested for all features under each profile.


## Page Linking
The link structure will defined as such during development:
* **ALL PAGES**
  * **Data**: school, user
  
* **Home** | [localhost:3000](http://localhost:3000)
  * **File**: *index.jade*
  * **Desc**: This page welcomes the user and should direct them to the catalog or to register.
  * **Security**: unrestricted
  * **Notes**
    * Display School Welcome & Information
  
* **Catalog** | [localhost:3000/catalog](http://localhost:3000/catalog)
  * **File**: *catalog.jade*
  * **Desc**: This page displays the courses by each session(semester).
  * **Security**: unrestricted
  * **Data**: schedule[array]
  * **Notes**
    * Show current session by subject.
    * If student show add course button if room exist.
  
* **My Schedule** | [localhost:3000/catalog/schedule](http://localhost:3000/catalog/schedule)
  * **File**: *schedule.jade*
  * **Desc**: This displays the teacher students courses currently assigned to them.  Students should see a drop course button for each course.  Teachers should see a Student Roll for each course.
  * **Security**: Teacher & Student Only
  * **Data**: schedule[array]
  * **Notes**
    * There should be no profile difference.
  
* **Add Schedule** | [localhost:3000/catalog/addschedule](http://localhost:3000/catalog/addschedule)
  * **File**: *addschedule.jade*
  * **Desc**: This page allows administrators to assign a schedule to a course.
  * **Security**: Administrator Only
  * **Data**: course[array]
  * **Notes**
    * Upon completion return to root page of process.
    * See [Data](#data-design) Design to understand the best way to manipulate data.
  
* **Add Course** | [localhost:3000/catalog/addcourse](http://localhost:3000/catalog/addcourse)
  * **File**: *addcourse.jade*
  * **Desc**: This page allows administrators to create a course.
  * **Security**: Administrator Only
  * **Data**: subject[array]
  * **Notes**
    * Upon completion return to root page of process.
    * See [Data](#data-design) Design to understand the best way to manipulate data.
  
* **Course Request** | [localhost:3000/student/add](http://localhost:3000/student/add)
  * **File**: *addrequest.jade*
  * **Desc**: This is a confirmation page, student reviews information and clicks add course button. Request is sent by catalog add course button only.
  * **Security**: Student Only
  * **Data**: schedule 
  * **Notes**
    * Upon completion return to catalog page.
  
* **Drop Course** | [localhost:3000/student/drop](http://localhost:3000/student/drop)
  * **File**: *drop.jade*
  * **Desc**: This is a confirmation page, student reviews information and clicks drop course button. Request is sent by schedule drop course button only.
  * **Security**: Teacher & Student Only
  * **Data**: schedule 
  * **Notes**
    * Upon completion return to My Schedule.
  
* **Student's History** | [localhost:3000/student/history](http://localhost:3000/student/history)
  * **File**: *history.jade*
  * **Desc**: View a students history of courses taken and organize by session(semester). 
  * **Data**: schedule[array]
  * **Security**: All registered users.
  
* **Profile** | [localhost:3000/user/:id](http://localhost:3000/user/:id)
  * **File**: *user.jade*
  * **Desc**: This shows the user profile.
  * **Security**: Registered Users
  
* **Register** | [localhost:3000/credentials/register](http://localhost:3000/credentials/register)
  * **File**: *register.jade*
  * **Desc**: This allows a student to create a new account or apply for the session(semester).
  * **Security**: unrestricted
  
* **Add User** | [localhost:3000/credentials/add](http://localhost:3000/credentials/add)
  * **File**: *adduser.jade*
  * **Desc**: This page allows administrators to approve registration of students and add new user profiles.
  * **Security**: Administrator Only
  * **Data**: userpool[array]
  * **Notes**
    * Upon form submit return to process.
  
* **De-Activate User** | [localhost:3000/credentials/deactivate](http://localhost:3000/credentials/deactivate)
  * **File**: *deactivate.jade*
  * **Desc**: This allows a administrator to deactivate a profiles authorization.
  * **Security**: Administrator Only
  * **Data**: userpool[array]
  * **Notes**
    * Upon completion return to root page of process.

## Data Design
Node.js and MongoDB both work with JSON data by default.  Data stores passed to the template will be processes this way.  Data passed to the templates is defined as follows.

### User Profile Objects
**Value name passed to template** : user

| Value            | Option                                  | Default     |
| ---------------- |:---------------------------------------:| -----------:|
| id               |  16 digit alpha / numeric assigned key  | null        |
| type             |  default : student : teacher : admin    | default     |
| first            |  string value                           | Guest       |
| last             |  string value                           | User        |
| isActive         |  true : false                           | false       |
| info             |  userinfo object                        | null        |


**Value name passed to template** : userinfo

| Value            | Option                                         | Default     |
| ---------------- |:----------------------------------------------:| -----------:|
| id               |  16 digit alpha / numeric assigned key         | null        |
| sex              |  male | female | transgender | decline         | decline     |
| gradeLevel       |  none | freshman | sophomore | junior | senior | freshman    |
| gpa              |  decimal value (x.xxx)                         | 0.000       |
| contact          |  contact object array                          | null        |
| history          |  user history object                           | null        |


**Value name passed to template** : contact

| Value            | Option                                         | Default     |
| ---------------- |:----------------------------------------------:| -----------:|
| id               |  integer value                                 | null        |
| addr             |  string value                                  | null        |
| addr2            |  string value                                  | null        |
| city             |  string value                                  | null        |
| state            |  string value                                  | null        |
| zip              |  integer value                                 | null        |


**Value name passed to template** : userhistory

| Value            | Option                                 | Default     |
| ---------------- |:--------------------------------------:| -----------:|
| id               | 16 digit alpha / numeric assigned key  | null        |
| ge-institution   | transcript object                      | null        |
| colg-trans       | transcript object array                | null        |


**Value name passed to template** : transcript

| Value            | Option                                  | Default     |
| ---------------- |:---------------------------------------:| -----------:|
| id               | integer value                           | null        |
| name             | string value                            | null        |
| city             | string value                            | null        |
| state            | string value                            | null        |
| gpa              | string value                            | null        |
 
 
### Course Schedule Objects
**Value name passed to template** : session

| Value            | Option                                     | Default     |
| ---------------- |:------------------------------------------:| -----------:|
| code             | 2 digit month - 2 digit year - length code | null        |
| startDate        | date object                                | null        |
| endDate          | date object                                | null        |


**Value name passed to template** : schedule

| Value            | Option                                | Default     |
| ---------------- |:-------------------------------------:| -----------:|
| session          | session object                        | null        |
| section          | section object                        | null        |
| dailyMeeting     | daily object                          | null        |
| startTime        | date object                           | null        |
| length           | integer value (ie 60 = 60 min)        | null        |
| seats            | integer value                         | null        |
| seatsTaken       | integer value                         | null        |


**Value name passed to template** : daily

| Value            | Option                               | Default     |
| ---------------- |:------------------------------------:| -----------:|
| sun              |  true : false                        | false       |
| mon              |  true : false                        | false       |
| tue              |  true : false                        | false       |
| wed              |  true : false                        | false       |
| thur             |  true : false                        | false       |
| fri              |  true : false                        | false       |
| sat              |  true : false                        | false       |


**Value name passed to template** : course

| Value            | Option                               | Default     |
| ---------------- |:------------------------------------:| -----------:|
| code             | 3 char : integer value               | null        |
| name             | string value                         | null        |
| description      | string value                         | null        |
| subject          | subject object                       | null        |


**Value name passed to template** : subject

| Value            | Option                              | Default     |
| ---------------- |:-----------------------------------:| -----------:|
| code             | 3 char : string value               | null        |
| name             | string value                        | null        |
| description      | string value                        | null        |


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


## Scope Refinement
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
 
### Refine User Stories, Assign & Prioritize Task List
1. **Learn**
  1. Team needs to learn about Node.js with Express.js.
  2. Team needs to learn about Jade Templates for Node.js.
  3. Break down product owner's vision into user stories.
  4. Get Team situated with development environment and launch base template on local machine.

2. **Testing**
  1. As a developer, I want to run unit test on all native application data object operations on the back-end.
  2. As a scrum master, want functional test to be run on all site pages.
  3. As a scrum master, I want all system features tested in the development environment and the go live environment.

3. **University Profiles**
  1. As a administrator, I want to add a user account.
  2. As a student, I want to request to register for university sessions.
  3. As a administrator, I want to authorize a students registration application.

4. **Profile Types**
  1. As a administrator, I want to assign a users profile password.
  2. As a administrator, I want deactivate a user profiles authorization.

5. **Courses**
  1. As a administrator, I want to add new courses.
  2. As a student, I want to request addition to course roll.
  3. As a student, I want to drop a course.
  4. As a teacher, I want to drop a student from my course.
  5. As a teacher, I want to see my course student roll.
  6. As a administrator, I want assign courses to all degree majors.

6. **Schedule**
  1. As a administrator, I want to enter a course schedule.
  2. As a administrator, I want course schedules to be assigned to a course.
  3. As a student, I want to see my current course schedule.
  4. As a teacher, I want to see a students current course schedule.

7. **Back-end**
  1. As a system, It should not allow a users history to be deleted.
  2. As a system, it should restrict students from registering if prerequisites have not been taken.

8. **History**
  1. As a teacher, I want to view the students course history.
  2. As a student, I want to see my course history.
  3. As a administrator, I want to view a students transcripts.  

9. **Front-end Views**
  1. As a student, I want sign in from my home personal computing device.

10. **Front-end Features**
  1. As a student, I want to see the number of seats a course has and how many are available.
  2. As a system, it should not allow a student to add courses with no seats remaining.
  3. As a system, it should not allow a student to drop after the 2nd week of a session.
  4. As a student, I would like to sort my course history by semester.

11. **Grades**
  1. As a teacher, I want to enter student grades.
  2. As a student, I would like to see my posted grades with my course history.
  3. As a administrator, I want to view a students history and grades earned.

12. **Grade Level**
  1. As a system, it should define grade levels as freshman, sophomore, junior, senior.
  2. As a system, it should updates students grade level.
  3. As a system, it should only authorize grade level for successfully completed courses only.
  4. As a system, it should perform graduation check.
  5. As a system, it should define a graduation check by checking course completion against their assigned degree.

### Refine Task Scope For Sprint Work Products
1. **Learn**
  1. Team needs to learn about Node.js with Express.js.
  2. Team needs to learn about Jade Templates for Node.js.
  3. Break down product owner's vision into user stories.
  4. Get Team situated with development environment and launch base template on local machine.

2. **Testing**
  1. As a developer, I want to run unit test on all native application data object operations on the back-end.
  2. As a scrum master, want functional test to be run on all site pages.
  3. As a scrum master, I want all system features tested in the development environment and the go live environment.

3. **University Profiles**
  1. As a administrator, I want to add a user account.
  2. As a student, I want to request to register for university sessions.
  3. As a administrator, I want to authorize a students registration application.

4. **Profile Types**
  1. As a administrator, I want to assign a users profile password.
  2. As a administrator, I want deactivate a user profiles authorization.

5. **Courses**
  1. As a administrator, I want to add new courses.
  2. As a student, I want to request addition to course roll.
  3. As a student, I want to drop a course.
  4. As a teacher, I want to drop a student from my course.
  5. As a teacher, I want to see my course student roll.

6. **Schedule**
  1. As a administrator, I want to enter a course schedule.
  2. As a administrator, I want course schedules to be assigned to a course.
  3. As a student, I want to see my current course schedule.
  4. As a teacher, I want to see a students current course schedule.

7. **Back-end**
  1. As a system, It should not allow a users history to be deleted.

8. **History**
  1. As a teacher, I want to view the students course history.
  2. As a student, I want to see my course history.
  3. As a administrator, I want to view a students transcripts.  

9. **Front-end Views**
  1. As a student, I want sign in from my home personal computing device.

10. **Front-end Features**
  1. As a student, I want to see the number of seats a course has and how many are available.
  2. As a system, it should not allow a student to add courses with no seats remaining.
  3. As a system, it should not allow a student to drop after the 2nd week of a session.
  4. As a student, I would like to sort my course history by semester.
  
#### Sprints
##### Sprint One
* **Learn**
* Create visual prototype for these task:
  * **Front-end Views**
  * **University Profiles**
  * **Courses**
  * **Schedule**
  * **History**
  * **Front-end Features**
* **Testing**

##### Sprint Two
* **Back-end**
* For the following bind data objects to visual interface.  Code logic not having to do with POST operations but prepare where possible.
  * **University Profiles**
  * **Profile Types**
  * **Course**
  * **Schedule**
  * **History**
  * **Front-end Features**
* **Testing**

##### Sprint Three
* Create POST logic for:
  * **University Profiles**
  * **Profile Types**
  * **Course**
  * **Schedule**
* **Testing**

#### Product Backlog Inventory
1. **Grades**
  1. As a teacher, I want to enter student grades.
  2. As a student, I would like to see my posted grades with my course history.
  3. As a administrator, I want to view a students history and grades earned.
  
5. **Degree Program**
  1. As a administrator, I want assign courses to all degree majors.
  2. As a system, it should define a graduation check by checking course completion against their assigned degree.
  3. As a system, it should restrict students from registering if prerequisites have not been taken.

12. **Grade Level**
  1. As a system, it should define grade levels as freshman, sophomore, junior, senior.
  2. As a system, it should updates students grade level.
  3. As a system, it should only authorize grade level for successfully completed courses only.
  4. As a system, it should perform graduation check.
 
 
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
        //-Content goes here.

// End Jade Template
```

##### Loading JavaScript Files
If using self generated JavaScript you can load it using `block js`.  You have two options for loading JavaScript content.  You can use the SCRIPT tag or you can use the preferred method and include a `.js` file from the `public/js` directory folder.
```jade

block js
  script 
    //-code here
  script(src='js/myfile.js') //-preferred
```

##### Loading CSS Files
If using self generated css you can load it using `block css`.  You can include a `.css` file from the `public/css` directory folder.
```jade

block css
  link(rel='stylesheet', href='/css/myfile.css')
```

##### Adding Navigation Link Items
When adding navigation items you can use `+navItem()` for any profile `block nav*` tag.
```jade

block nav
  +navItem('Item Name', 'link location')
```

#### Adding Content
When adding html content to a page you need to use the correct encapsulation of section content and table alignment using the Twitter Bootstrap [Grid Options](http://getbootstrap.com/css/#grid-options).  Grid *rows* must have colums be equal to 12.

##### Section Headers
Please use appropriate headers to describe content sections(ie: h1,h2,...).
```jade
h1 Page Header
  h2 Section Header 1
    h3 Subsection Header 1
      h4 Subsection Header 2
        h5 Subsection Header 3
          h6 Subsection Header 4
```

##### Tables
###### Example: Row spanning content area width.
```jade

block content
  section.container
    .row
      .col-xs-12.col-sm-12.col-md-12.col-lg-12
        //- Content goes here
```

###### Example: Row with 2 even colums. 
```jade

block content
  section.container
    .row
      .col-xs-12.col-sm-12.col-md-12.col-lg-12
        .row
          .col-xs-6.col-sm-6.col-md-6.col-lg-6
            //- Content goes here.
          .col-xs-6.col-sm-6.col-md-6.col-lg-6
            //- Content goes here.
```

###### Example: Row with 3 unequal colums. 
```jade

block content
  section.container
    .row
      .col-xs-12.col-sm-12.col-md-12.col-lg-12
        .row
          .col-xs-6.col-sm-6.col-md-6.col-lg-6
            //- Content goes here.
          .col-xs-4.col-sm-4.col-md-4.col-lg-4
            //- Content goes here.
          .col-xs-2.col-sm-2.col-md-2.col-lg-2
            //- Content goes here.
```

##### Forms
###### Content Area
```jade

block content
  section.container
    .row
      .col-xs-12.col-sm-12.col-md-12.col-lg-12
        form(role='form', method='POST', action='/url', id='<unique-id>-form')
          .form-group
            //- Grouped content goes here.(ie: username = first & last name fields.)
```

###### Buttons
```jade

  .form-group
    button.btn.btn-<btn-size>.btn-<btn-design>(type='<btn-type>')
```
You must replace `<@value>` with the correct values:
* **[btn-size](http://getbootstrap.com/css/#buttons-sizes)** | xs, sm, md, lg, xl 
* **[btn-option](http://getbootstrap.com/css/#buttons-options)** | default, primary, success, info, warning, danger, link 
* **[btn-type](http://www.w3schools.com/tags/att_button_type.asp)** | button, submit, reset

###### Input Area with Label
```jade

  .form-group
    .input-group
      .input-group-addon Label
      input.form-control(name='field-name', placeholder='', type='<field-type>', <field-optional-1>, <field-optional-2>)
```
Field `<field-optional-*>` may be used for dynamic nature of form fields. You must replace `<@value>` with the correct values:

* **[field-type](http://www.w3schools.com/html/html5_form_input_types.asp)** | 
* **[field-optional](http://www.w3schools.com/html/html5_form_attributes.asp)** | There are many attributes.  We are pimarily concerned with applying `required` and `autofocus` tags.  

###### Input Area Drop Down with Label
This is used for selecting an existing option from a drop down list.
```jade

  .form-group
    .input-group
      .input-group-btn
        button.btn.btn-default.dropdown-toggle(type="button", data-toggle="dropdown") 
          | Label
          span.caret
        ul.dropdown-menu
          li Data Options
          //- More options
      input.form-control(name='field-name', placeholder='', type='<field-type>')
```

###### List
```jade

  .form-group
    select.form-control(multiple, size='10')
      option Data Value
      //- Content goes here.
```
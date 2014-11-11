# Interface Views: Description, Data & Security 
The link structure will defined as such during development:
* **ALL VIEWS**
  * **Data**: user
  
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
  * **Data**: catalog
  * **Notes**
    * Show current session by subject.
    * If student show add course button if room exist.
  
* **My Schedule** | [localhost:3000/catalog/schedule](http://localhost:3000/catalog/schedule)
  * **File**: *schedule.jade*
  * **Desc**: This displays the teacher students courses currently assigned to them.  Students should see a drop course button for each course.  Teachers should see a Student Roll for each course.
  * **Security**: Teacher & Student Only
  * **Data**: schedule[array]
  * **Notes**
    * If teacher the each array object will be given a student list array.
    * If students should see a drop option.
    * If teacher present student list with option to view each students history or drop each student in the course.
  
* **Add Schedule** | [localhost:3000/catalog/addschedule](http://localhost:3000/catalog/addschedule)
  * **File**: *addschedule.jade*
  * **Desc**: This page allows administrators to assign a schedule to a course.
  * **Security**: Administrator Only
  * **Data**: courses[array]
  * **Notes**
    * Upon completion return to root page of process.
    * See [Data](#data-design) Design to understand the best way to manipulate data.
  
* **Add Course to Catalog Option** | [localhost:3000/catalog/addcourse](http://localhost:3000/catalog/addcourse)
  * **File**: *addcourse.jade*
  * **Desc**: This page allows administrators to create a course.
  * **Security**: Administrator Only
  * **Data**: subjects[array]
  * **Notes**
    * Upon completion return to root page of process.
    * See [Data](#data-design) Design to understand the best way to manipulate data.
  
* **Add Student to Course Request** | [localhost:3000/student/add](http://localhost:3000/student/add)
  * **File**: *addrequest.jade*
  * **Desc**: This is a confirmation page, student reviews information and clicks add course button or cancel.
  * **Security**: Student Only
  * **Data**: schedule 
  * **Notes**
    * If GET request redirect to Catalog.
    * Upon completion return to catalog page.
    * Add request comes from catalog page.
  
* **Drop Student from Course** | [localhost:3000/student/drop](http://localhost:3000/student/drop)
  * **File**: *drop.jade*
  * **Desc**: This is a confirmation page, student or teacher reviews information and clicks drop course button or cancel.
  * **Security**: Teacher & Student Only
  * **Data**: schedule 
  * **Notes**
    * If GET request redirect to My Schedule.
    * Upon completion return to My Schedule.
    * Drop request comes from student and teachers My Schedule.
  
* **Student's History Request** | [localhost:3000/student/history](http://localhost:3000/student/history)
  * **File**: *history.jade*
  * **Desc**: View a students history of courses taken and organize by session(semester). 
  * **Data**: history[array]
  * **Security**: All registered users.
  * **Notes**
    * Teachers request student history from My Schedule > course student list.
    * Present return button.
  
* **Register** | [localhost:3000/credentials/register](http://localhost:3000/credentials/register)
  * **File**: *register.jade*
  * **Desc**: This allows a student to create a new account or apply for the session(semester).
  * **Security**: unrestricted
  * **Notes**
    * If registered user should display application status for students.
    * Administrators and teachers should be direct to a message telling them to contact their superiors.
  
* **Add User, Change Password, Approve Applicants and DeAuthorize Accounts** | [localhost:3000/credentials/add](http://localhost:3000/credentials/manage)
  * **File**: *manageusers.jade*
  * **Desc**: This page allows administrators to approve registration, change user passwords, deactivate users, and add new user profiles.
  * **Security**: Administrator Only
  * **Data**: applicants[array]
  * **Notes**
    * Upon form submit return to process.
  
* **De-Activate User** | [localhost:3000/credentials/deactivate](http://localhost:3000/credentials/deactivate)
  * **File**: *deactivate.jade*
  * **Desc**: This is a confirmation page, reviews information and clicks confirm or cancel button.
  * **Security**: Administrator Only
  * **Data**: useraccount
  * **Notes**
    * Upon completion return to root page of process.

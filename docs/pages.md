# Page Linking
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

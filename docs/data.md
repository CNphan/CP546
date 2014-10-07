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

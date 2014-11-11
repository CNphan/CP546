## Data Models
Node.js and MongoDB both work with JSON data by default.  Data stores passed to the template will be processes this way.  Data passed to the templates is defined as follows.

### User Profile Objects
**Value name passed to template** : user

| Value            | Option                                            | Default     |
| ---------------- |:-------------------------------------------------:| -----------:|
| id               |  numeric auto assigned key                        | null        |
| type             |  default : pending : student : teacher : admin    | default     |
| first            |  string value                                     | Guest       |
| last             |  string value                                     | User        |
| email            |  string value                                     | null        |
| active           |  true : false                                     | false       |
| detail           |  detail object                                    | null        |
| joined           |  Date object                                      | null        |


**Value name passed to template** : detail

| Value            | Option                                         | Default     |
| ---------------- |:----------------------------------------------:| -----------:|
| id               |  numeric auto assigned key                     | null        |
| gender           |  male | female | transgender | decline         | decline     |
| birth            |  Date Object                                   | null        |
| contact          |  contact Object[array]                         | null        |
| history          |  history Object                                | null        |


**Value name passed to template** : contact

| Value            | Option                                         | Default     |
| ---------------- |:----------------------------------------------:| -----------:|
| id               |  numeric auto assigned key                     | null        |
| type             |  home : mobile : work                          | null        |
| phone            |  string value                                  | null        |
| addr             |  string value                                  | null        |
| addr2            |  string value                                  | null        |
| city             |  string value                                  | null        |
| state            |  string value                                  | null        |
| zip              |  integer value                                 | null        |
| country          |  string value                                  | null        |


**Value name passed to template** : history

| Value            | Option                                 | Default     |
| ---------------- |:--------------------------------------:| -----------:|
| id               | numeric auto assigned key              | null        |
| general          | transcript Object                      | null        |
| college          | transcript Object[array]               | null        |


**Value name passed to template** : transcript

| Value            | Option                                  | Default     |
| ---------------- |:---------------------------------------:| -----------:|
| id               | numeric auto assigned key               | null        |
| school           | string value                            | null        |
| city             | string value                            | null        |
| state            | string value                            | null        |
| gpa              | string value                            | null        |
 
 
### Course Schedule Objects
**Value name passed to template** : schedule

| Value            | Option                                | Default     |
| ---------------- |:-------------------------------------:| -----------:|
| id               | numeric auto assigned key             | null        |
| session          | session Object                        | null        |
| course           | course Object                         | null        |
| daily            | daily Object                          | null        |
| start_time       | Date Object                           | null        |
| min_length       | number value (ie 60 = 60 min)         | null        |
| seats            | number value                          | null        |
| location         | string value                          | null        |
| instructor       | user Object                           | null        |


**Value name passed to template** : session

| Value            | Option                                     | Default     |
| ---------------- |:------------------------------------------:| -----------:|
| id               | numeric auto assigned key                  | null        |
| code             | (4 digit year) - (alpha code)              | null        |
| description      | string value                               | null        |
| start            | Date Object                                | null        |
| stop             | Date Object                                | null        |
| active           | true : false                               | false       |
| schedule         | schedule Object[array]                     | null        |


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
| id               | numeric auto assigned key            | null        |
| code             | 3 char : number value                | null        |
| units            | number value                         | null        |
| name             | string value                         | null        |
| description      | string value                         | null        |
| subject          | subject Object                       | null        |
| requirements     | string value                         | null        |


**Value name passed to template** : subject

| Value            | Option                              | Default     |
| ---------------- |:-----------------------------------:| -----------:|
| code             | 3 char : (alpha code)               | null        |
| name             | string value                        | null        |
| description      | string value                        | null        |


### School Profile
**Value name passed to template** : school

| Value            | Option                     | Default     |
| ---------------- |:--------------------------:| -----------:|
| name             | string value               | null        |
| president        | string value               | null        |
| contact          | contact Object             | null        |
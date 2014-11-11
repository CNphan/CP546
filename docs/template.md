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

#### Jade JavaScript Usage
Jade allows for shorthand of JavaScript to be easily integrated with HTML.

##### Objects
This is useful for tracking or simplifying the data your working with.

```jade
- var valueOne = 'Value One Title';
- var valueTwo = {id:1, name:'value two'};
- var valueThree = valueTwo.name;

p #{valueOne}
p #{valueTwo}
p #{valueThree}
```

##### For Loop
This is useful for creating list.  It treats the *i* value differently than JavaScript and holds the arrays current positions object instead of the position number.

```jade
ul
  for i in arrayData
    li #{i.value}
```

##### If Statements
This is good for things like user type checks, if value exist and more.
```jade
if valueOne == valueTwo
  //- Do something here if true
else if valueThree
  //- Do something here if value exist
else
  //- Do some default thing here  
```
#### JavaScript & jQuery Usage
jQuery allows for easy element manipulation. Use the notes here to assist you in applying javascript code to templates. 

##### Pass Jade object to JavaScript File
This is useful for tracking or simplifying the data your working with.
```jade
  script(type='text/javascript').
    var data = !{JSON.stringify(data)}
```
Now it can be used in a javascript file
```js
$(function() {
  console.log(data);
});
```

##### OnCLick Listener
This can easily be adjusted to other event types that can occur on an element.  It is usefule for interactive views.

First you can use either a Id or Class HTML tag to identify elements.
```jade
button#btnId.btn.btn-default(type='button') Submit 1
button.btnClass.btn.btn-default(type='button') Submit 2
```

In your javascript file:
```js
$(function() {
  $('#btnId').on('click', function () {
    // Do something here
  });
  $('.btnClass').on('click', function () {
    // Do something here
  });
});
```

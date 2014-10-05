# Template Design
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

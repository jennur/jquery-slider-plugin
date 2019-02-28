# website-slider 🍔
This is a slider plugin made with jQuery. Here's how you can implement it on your website: 
<p align="center">
  <img width="460" src="automatic_slider_preview.gif">
</p>

## Step 1 - Download this repository

Download the necessary files from this repository (Clone or download -> Download ZIP) and add it to your project folder. 

Be aware of the relative paths in the HTML snippets you're about to add to your HTML file. The assets folder should be in the same directory as the HTML file to where you add the slideshow. (Of course you can change the relative paths in the HTML file yourself if you want a different directory structure.)

In the ` <head>` of your HTML file, link the stylesheet for the slideshow by adding this piece of HTML to it:  
```html 
<link rel="stylesheet" href="assets/css/sliderstyles.css" type="text/css" />
```
Again, be aware of the relative paths here.

## Step 2 - Make sure you have jquery available in your project

#### Include the necessary jquery script in your html document from a CDN...

In your HTML file where you want the slideshow, before the body end-tag (`</body>`) add this:
```html
<script   src="https://code.jquery.com/jquery-3.3.1.min.js"   
          integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="   
          crossorigin="anonymous">
</script> 
```
( If you want to use a different CDN, all CDN's are available here: https://code.jquery.com )

This will load jQuery and make it available for you to use in the scripts linked to this HTML file. It's important that ALL links to script files that make use of jQuery are put AFTER this script-tag. Otherwise, jQuery will not be available for these scripts. 



#### ...Or check out all the installation options here: 
https://jquery.com/download/


## Step 3 - Add the slider to your HTML file

Copy this piece of HTML into your existing HTML file wherever you want the slider to appear. 
```html
<div id="slider" class="slideshow"> <!-- Responsive container for slides-->

    <!-- Slides goes here. You can add as many of these as you want. -->
        <!-- First slide -->
        <div class="slideshow__slide">
            <img class="slide__image" src="assets/images/placeholder.svg" alt="placeholder image"/>
            <div class="slide__text">
                <p>SLIDE 1 Description of the image. Can be removed if not wanted.</p>
            </div>
        </div>
        <!-- End of first slide -->
        
        <!-- Second slide -->
        <div class="slideshow__slide">
            <img class="slide__image" src="assets/images/placeholder2.svg" alt="placeholder image"/>
            <div class="slide__text">
                <p>SLIDE 2 Description of the image. Can be removed if not wanted.</p>
            </div>
        </div>
        <!-- End of second slide -->
        
        <!-- Third slide -->
        <div class="slideshow__slide">
            <img class="slide__image" src="assets/images/placeholder3.svg" alt="placeholder image"/>
            <div class="slide__text">
                <p>SLIDE 3 Description of the image. Can be removed if not wanted.</p>
            </div>
        </div>
        <!-- End of third slide -->
    <!-- End of slides -->
    
    <!-- Slide navigation -->
        <div class="slideshow__navigation">
            <ul class="navigation__list"></ul>
        </div>
    <!-- End of slide navigation -->
    </div> <!-- End of resoponsive slide container -->
```

#### NOTE: 
If you do NOT want the slideshow to automatically change slides, you can simply add the `navigation__controllers` class to the `<ul>` class list inside the slide navigation. Now it will look like this: 
```html 
<div class="slideshow__navigation">
  <ul class="navigation__list navigation__controllers"></ul>
</div>
```

## Step 4 -Add the slideshow script

Link the slideshow script to your HTML file by adding this piece of HTML
```html
<script src="assets/js/slider.js"></script>
```
If you're including jQuery by the use of a CDN, like mentioned before, it's important that this snippet comes AFTER the script-tag where you load the jQuery library, otherwise it won't work. 

Now open up your HTML file and the slider should be working on your web page! 

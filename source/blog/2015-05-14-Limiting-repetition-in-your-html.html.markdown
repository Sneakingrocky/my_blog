---
title: Limiting repetiton in your html
date: 2015-05-14 03:53 UTC3
tags: html, css, frontend development
---


While working on a section of an internal project there was something that was bothering me about the way that I structured everything with static pages. Essentially the section contained an index page which linked to four individual view/team pages. Pretty simple.

![diagram_1](/images/blog/yaml/diagram_1.svg)



The team pages were structured the same but contained content particular to that team such as its own about content, members, and leader info. The best part about this monster I created was that it would breed like bunnies...

![baby_bunnies](/images/blog/yaml/baby_bunnies.svg)

As more team pages were added that same html markup would have to be copied. Even more fun -- adding and updating content would not be pretty and I could create more enemies than Joffrey from the Game of Thrones.

I decided to leave the darkside and find a better solution.

##One view to the rescue

The idea behind this approach is to solve these problems:

1. Each team is it’s own “view” = ton’s of repetition
2. In order to edit data pertaining to a team you currently have to update it in the index and its individual team page
3. The static html files are tedious to enter data into

**Solution:** Create easy to edit data files that feed into one view. It would work like so:

![diagram_2](/images/blog/yaml/diagram_2.svg)

##Creating the "data files"

As I stated before the data for each of the team pages was pretty similar. So having data files that could feed into one view which would generate new team pages made sense. 

I chose to research and use my new friend, YAML aka “YAML Ain't Markup Language" for these data files. What is great about YAML is that it was designed to be easily mapped to data types common to most high-level languages: lists, associative arrays, and scalar.

Here is an example of a YAML data file that would feed into the view:

<script src="https://gist.github.com/Sneakingrocky/c2e56783fc953ea2c7fd.js"></script>

This data creates generates a giant hash of keys and values like so:

<script src="https://gist.github.com/Sneakingrocky/115e11b03387de806af8.js"></script>

If you like dealing with hashes good for you. I'm a bigger fan of working with objects. Using Ruby you can create methods which turn these key & values into an object like so:

<script src="https://gist.github.com/Sneakingrocky/967bf1974a2d958b0ca5.js"></script>

The new methods we created can now be used in our view using Embedded Ruby:

<script src="https://gist.github.com/Sneakingrocky/65ce56bee20f12a3b8c6.js"></script>


##Everything is so much cleaner!

Using tools such as YAML, Ruby, and Embedded Ruby allowed me to clean up the structure of my project. With a singular view for team pages the duplication work that someone would have to do if they were somehow assigned to add 100 new teams is now gone. Imagine manually creating 100 static html pages and then having to apply future changes to each static page...yuck.










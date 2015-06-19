---
title: CSS Architecture
date: 2015-04-24 03:53 UTC3
tags:
---


When I was first learning to program in Ruby I remember being so excited to have a working program. I was extremely nervous to show my work to my mentor. And as we went through my code she was very patient and told me that she could tell I worked hard on it. It meant so much - and honestly was great fuel to keep me excited about programming. 

Fast forward to the last few months of my student software apprenticeship and I realized just how terrible my code was. I had no regard for clean or structured code - I was a beginner and I needed to know how to make things work above all. 

I can see this same pattern in my Design Apprenticeship but perhaps the rules for the design and structure for setting up your project files and CSS is less clear and more opinionated than than it seemed to me when dealing with backend code. It just seems like everyone is trying to find a way to solve CSS architecture - but no one has found a solution to win over the masses quite yet.

In order to start forming my own ideas on CSS architecture my mentor had me research a few of the most popular ways to structure my code and files: OOCSS(Object Oriented CSS), BEM(Block, Element, Modifier), and SMACSS(Scalable and Modular Architecture for CSS).


###OOCSS(Object Oriented CSS)

Object oriented CSS reminds me a lot about of the philosophies I learned during my student software apprenticeship. The idea is the same - while coding it is important to write it in a way that is clean and reusable. The benefits of coding this way are having cleaner, smaller, and more maintainable stylesheets. 

###BEM(Block, Element, Modifier)

BEM was a really interesting one to research. It’s a bit ugly but it’s purpose is beautiful. It’s ultimately trying to solve the problem of CSS being unreadable and confusing to those who didn’t write it themselves. If we’re honest with ourselves, maybe the classes we wrote ourselves a few weeks ago don’t seem to make sense anymore. This problem was also present when I was learning Ruby ---> Write methods that are more descriptive. In reference to CSS ---> Write classes that are more descriptive.


![BEM](/images/bem.png)


###SMACSS(Scalable and Modular Architecture for CSS)

SMACSS was a little confusing at first but broken down it is simply trying to find a universal way for everyone to structure their project folders. 

style.scss 

_base.scss 

_layout.scss 

_modules.scss 

_state.scss

_theme.scss

Personally, I think that the state and theme folders are not necessary all the time and I don’t think i’ll be adding them to my file structure. However the other folders will help my organization a lot:

style.scss 
The master file that imports all of your other stylesheets

_base.scss 
This is where all the base styles live; resets, element defaults, default font sizes, etc.

_layout.scss 
In this section you specify all types of layout containers, such as header, footer, content, sidebar, etc. 

_modules.scss 
Every module should be completely independent of its context and should work within any layout container or other module.










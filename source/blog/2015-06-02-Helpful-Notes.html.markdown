---
title: Helpful Notes
date: 2015-06-02 03:53 UTC3
tags: git, reflection
published: false
---

Before learning anything about programming I used to thing that programmers were nerdy magical beings who had a massive file system of programming tricks up their sleeves. I soon figured out that programmers are master-expert googlers and most of the time they know how to solve a problem because they were once stuck on it themselves. Over the past year i've become more nerdy, and hopefully awesome? Here's a list I keep in my notes section of problems I have run into:

***********************************************
NOTES

###WHEN YOU NEED TO TAKE A SCREEN SHOT
Command +shift +4 = screen shot selection

###WHEN YOU'RE STUCK IN YOUR COMMAND LINE
control c - quits a process on your command line

###WHEN YOU PUSH SOMETHING YOU DIDN'T MEAN TO

git reset HEAD~
re-add and commit the files you wanted
git push --force


###WHEN YOU NEED TO KILL YOUR SERVER
Try

lsof -i:4567

And see if there are any processes running. If so, you'll be provided the process id and you can do:

kill -9 <PID here>



###WHEN YOUR RUBY VERSION CHANGES::::

$ rvm use 2.x.x

$ rvm --default use 2.x.x

###WHEN YOU NEED TO CREATE A NEW BRANCH
example:

[master][~projects/vision] git checkout -b create-branch-name-here

[cohort-pages] [~projects/vision] git branch

* cohort-pages

master

if you want to get back to master…

git checkout master


###WHEN YOU NEED TO PULL DOWN A BRANCH

Pull down a branch

git br -r

——shows all branches

git fetch

git checkout (whatever branch you want)



###WHEN YOU NEED TO CREATE A PULL-REQUEST

cool resource: http://stackoverflow.com/questions/16955980/git-merge-master-into-feature-branch

git branch (check out the branch you’re on)

git status to check what you have to commit

git add .

git commit -m “ “

git push origin cohort-pages

git checkout master

git pull

git checkout (page you want to be on example: cohort-pages)

git rebase master <——may need to rebase earlier???



###WHEN YOU WANT TO SAVE YOUR LOCAL CHANGES (before pulling)

git stash;

git pull;

git stash pop


###WHEN YOU'RE HAVING A MIGRATION ERROR:
rake db:reset

###WHEN YOU'RE NOT GETTING DATA FROM THE DATABASE:
rake db:seed


***********************************************

It's funny looking back at this list and the issues i've run into... Screen shot? O, Erica you silly girl. It's also great to go down the list and remember where I was in my apprenticeship and where I am now. It'll be interesting to see what my next adventures will be =)

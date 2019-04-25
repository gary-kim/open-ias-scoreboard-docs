---
title: "For Catalyst"
date: 2019-04-22T22:52:53+08:00
---

### Open IAS Scoreboard was originally developed for Singapore American School's Digital Frontiers club by Gary Kim.

This is my first large scale and major program I started and designed to run locally on a computer offline, so a lot of what I learned including all my experience using the Electron APIs, Yarn, and ESLint has come from making this program. In addition, I wanted to try using the Electron API to create a program for a while. That, combined with my philosophy “if it ain’t broke, improve it” made our situation in Digital Frontiers with expensive and buggy scoreboards the perfect problem to tackle with this interest.

For Digital Frontiers, this will be a big help in the years to come. It will finally allow us to run our scoreboard software on any computer we choose and tweak it to the needs of the club. In addition to this, the club will no longer be paying around $70 per computer to license the previously used scoreboard software. This will help to save hundreds of dollars a year for the club, enough savings to use to get even better equipment to improve other parts of the livestream such as quality and reliability.

For me, this project represents my attempt to get into developing a program in a way that is both easily understood and maintained by others. To this end, I had to learn about best practices for open source software development projects and specifically what has allowed the sucessful ones to continue to thrive despite large codebases. This seems difficult because from my experience, it is far too easy for a code in a way that makes the code impossible to read for future maintainers. 

I have seen this happen to my own projects. SAS Powerschool Enhancement Suite, another personal project of mine, is a browser extension used by at least 800 different users. Far into the development process, I decided being able to have other people help with development would be a great help so I worked to open source the code base so others could contribute their ideas and code. Alas, noone contributed any code, and I know from talking to people that that is in part because the code base is very difficult to read and understand. A problem further compounded by a lack of proper documentation for the project. I wanted to avoid that for Open IAS Scoreboard so from the start of the development process, I tried to learn the strategies that are used to prevent this from occuring.

The development process of Open IAS Scoreboard has taught me a lot about how it is that large codebases can still be maintained for a long time by many people who didn't have any involvement in the original development process. Looking at projects such as `rclone` and `Nextcloud`, it is clear that a lot of work goes into make the codebase understandable for new developers who would like to get into development.

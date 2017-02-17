---
layout: post
title:  "How I do Pair Programming"
date:   2016-02-17 15:38:00 -0500
categories: programming
---

I am going to start by saying I only pair program if I know how I am going to write the feature like an parsing a feed file, a CRUD feature.
If I am not sure how to do something like using a new API, my partner and I would gather information about the topic, we call that spiking.  
It's very frustrating to watch the driver look up documentation as a navigator.  Part of spiking might also require building a prototype to prove
the approach does work/convince my partner the proposed solution works.  This is of course time boxed to a certain length of time for time management.
Once both parties agree on the general approach.  Then we pair program.

A way I pair program is called ping pong pairing.  There is no driver/navigator.  Each person takes turns writing the unit test/passing implementation
So person A starts by writing a failing test.  Then person B writes the implementation to pass the test plus the next failing unit test.  Person A then does
the same thing as person B. This is less extreme than having a navigator that doesn't write production code for an hour.  This will build rapport between the 
2 programmers.  I did this with each new hire that came to Yroo.com and it has worked pretty well.

The next progression is to be a navigator/driver for an hour or two at a time.  It is important to note that I am trunk based programming so I am constantly pushing
code to the master.  I won't elaborate on the merits of trunk based programming, just that I am not sitting on days old code waiting to merge with master. 
So it's possible to constantly change computers.  As navigators, I have my own computer to either navigate the existing code base or look up documentation for the driver.
I would also speak up if I am unsure what the driver is currently implementing specifically tied to a unit test.  As a driver I am communicating to the navigator, 
what unit test I am about to write and then my implementation to pass the test.  One step at a time so the navigator does
not get lost.  I would even stop typing code to bounce an idea off the navigator at times.

The important thing here is one step at a time, meaning:
1) one unit test 
2) one quick implementation to just pass the test
3) refactor the code if necessary

A good sign to look for is when the pair is constantly communicating with each other.

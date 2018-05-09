# assignment7-final-jlehegaret

## Overview

Welcome again to the "ProofLogger" - a site in which students of Math 23A can keep track of which proofs they've presented to each other (or to staff).  

Currently, the site does not have any "login" capability, so everyone has all admin privileges.  The difference in roles is apparent only when looking at a user's specific "dashboard".

The site lands on the "users" page.  Choosing to view a user with either "Head" or "TA" status will take you to a staff dashboard - from there, you can access the Proof List and the Class Membership list.

The Proof List lets staff create the proof list for the semester, and has full CRUD capability re: proofs.  It also allows the staff to see how many students have successfully presented any given proof, and who those students are.

The Class Membership page provides full CRUD capability to staff to define the class's Heads, TAs, and Students.

A staff dashboard page allows the staff to confirm or deny a successful presentation by a student, and also lists all presentations which were confirmed by that staff member.

A student dashboard page contains those sections, but also provides the following:
- a way to register a "new" presentation
- a list of presentations which were delivered but which the listener still needs to confirm or deny (which can be deleted in case of submission error)
- a list of successful presentations

## Technical notes  

Based on prior feedback, I revised my attempt at MVC to improve the separation of concerns, and I have added more comments to the overall code.

The front-end is entirely Angular, with the Express back-end providing the API.
  
I was very happy to discover the "populate" option in Mongoose.

I do wish I could have provided the "login" capability, and all of the route restrictions and page adaptations that that would entail (based on the logged-in user's role) in time for this deadline, but I'll hope to figure out how to do that over the summer (and, for future students, I hope that it can fit into the core class curriculum next time around).  

## I hope that you enjoy the site!

Jennifer LH

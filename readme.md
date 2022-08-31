## Project

- First solve issue with Jenkins Pipeline not being able to connect to the github repo and reading our Jenkins file

- Make simple React JS app in this directory (book lookup service)

- Setup a Node.js + Express VM webserver

- Write a playbook that sets up our webserver (this wont be part of pipeline since we want this server to always be up)

- Write another that will deploy our app, Maybe make two different roles - or one (may already have a Node+Express role to reuse)

- Commit all my code to github repo

- Set first stage of pipeline for cloning the repo

- Test run the first stage

- Setup testing with molecule and add to pipeline (reference book)

- Have pipeline do these stages:
  1. Clone repo
  2. Take new code and run through testing
  3. Upon passing, Run the playbook to deploy the app as the final job in pipeline

 Simple 3-part pipeline, maybe think of a 4th part to add. This will let me edit my app on my local computer, commit it to my repo, run the jenkins pipeline job, and then have a newly tested and working version of my app running on my webserver.
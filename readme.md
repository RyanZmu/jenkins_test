Have my pipeline include a test job.
Run the job to pull the repo, then test the playbook (maybe some molecule test), upon passing run the new playbook.

In the future, expand the above idea, and lets have Jenkins run a playbook to deploy new versions of my app (new or social media app) whenever I update the repo to a VM webserver of mine

Each time I update my repo, I can then using jenkins CLI or GUI to run my new website build. Tests will be run before the new changes are deployed to webserver.

Simulated CI/CD
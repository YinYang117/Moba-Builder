Running into an issue with Sequelize.

I'm trying to create validations on length of strings for username and email
I'm able to set them to 10 for example in migrations and in models len: [10, 10]
However, when I change model to len: [5, 10] and I have seeds of both, it fails
I thought it was failing with the classic Error: and no description
Now as I'm testing, I have "using development" No seeders found. Literally same seed file name, no changes beyond validations undo-ing and redo-ing the migrations and seeder files.

Deleting the db
re-migrating and re-seeding it now sees the seeder file... ?

Upon further investigation, it seems as long as the db is fresh, the migrations are freshly applied, the seeds go in as expected...



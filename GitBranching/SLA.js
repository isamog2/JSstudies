// Git flow:
// clone project from bitbucket into the Sites folder
// make sure you are on the correct dir
//checkout to master
//git pull
// git checkout -b "SLA.sprintvalue-dev"

//Backup + Database Dumb ((the confusion part))
// You need to do a backup of your local database, bc if the updates go wrong you cant revert the database to before
//1. Mamp: Go to mamp pro, +Add host, add the name of the project.test. Browse the folder of the project and save
//2. Dbeaver: just add the credentials on lastpass to the project, then go on Mamp Pro and click on the name of the proj
//this should open the project.test

//Push to staging
// git push on webstorm
// go on bitbucket and create pull request to develop branch
//send the staging to be tested 
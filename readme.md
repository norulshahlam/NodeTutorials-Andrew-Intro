\***\*\*\*\*\***\*\*\*\***\*\*\*\*\*** setting up mongo db \***\*\*\*\*\***\*\*\*\***\*\*\*\*\***

all npm here will be installed locally in this folder

### 1. install Microsoft Visual C ++ Redistributable

@ `https://aka.ms/vs/16/release/vc_redist.x64.exe`
to enable to run mongod.exe

### 2. download mongodb zip file

go to `https://www.mongodb.com/try/download/community` and make sure it is version 4.2.13 or 4.0.4. so far this version is working for the next steps. else keep changing version til u get the compatible ones. then rename this folder to mongodb and move to user folder

### 4. create mongodb-data folder

place it in the same dir as mongodb

### 5. run:

`C://Users/NORULSHAHLAM/mongodb/bin/mongod.exe --dbpath=C://Users/NORULSHAHLAM/mongodb-data`

you will find there is a boilder plate files in mongodb-data folder. and in the logs, it will show ` waiting for connections on port 27017` means connection is establised

### 6. install mongodb gui

`https://robomongo.org/`

### 7. open above app & connect to the port number above

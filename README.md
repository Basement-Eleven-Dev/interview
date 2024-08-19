# Prerequisites

Make sure you have a local installation of node.js and angular 17+.

# Starting project

1. Run `npm i` in the root folder if you haven't already (optional)
2. Run `npm start` in the root folder to run the project in http://localhost:4200

## Tasks



# 1. Bugfix

It seems that if you duplicate a To-Do entry and you try to edit it, the changes will also reflect the original element. This is not a normal behaviour.

# 2. Feature

Right now, if you close the browser and reopen it, you will lose all your data. Develop a feature that at every change automatically save the list in your browser and recover it at the next opening (no database required, only local machine).
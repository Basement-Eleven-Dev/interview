# Prerequisites

Make sure you have a local installation of node.js and angular 17+.

# Starting project

1. Run `npm i` in the root folder if you haven't already (optional)
2. Run `npm start` in the root folder to run the project in http://localhost:4200

## Tasks

# 1. Bugfix

It seems that if you duplicate a To-Do entry and you try to edit it, the changes will also reflect the original element. This is not a normal behaviour.

# 2. Features

1. Right now, if you close the browser and reopen it, you will lose all your data. Develop a feature that at every change automatically save the list in your browser and recover it at the next opening (no database required, only local machine).
2. Develop a feature that moves at the bottom of the list the entries that have been checked.
3. Fill the function `sort()` in `list.service.ts` to sort alphabetically all the records in the list.
   
# Challenge

Fill the function `get committmentPercentage()` in `list.service.ts`.

As you can notice, at the top of the list there is a committment bar that represents how much you're busy in your life. In this imaginary world the committment is measured as follows:
1. Every entry in the list gives a `1.5%` increment if it's not completed (`ToDoEntry.done == false`) or a `-4%` decrement if it's completed (`ToDoEntry.done == true`).
2. Every word in each entry increase the committment bar of `1%`.
3. Furthermore, for each different couple of the same adiacent letter gives another `1%` increment. Es. the word ***yellow*** increase the committment of `2%` in total (`1%` for the word itself plus another `1%` for the couple ye**LL**ow), the word ***committment*** gives a total increment of `3%` (`1%` for the word itself plus `2%` for the couples co**MM**ittment and commi**TT**ment), the word ***helloooo*** gives a total increment of `5%` (`1%` for the word itself plus `4%` for the 4 different couples he**LL**oooo, hell**OO**oo,hello**OO**o,helloo**OO**).

The committment value for the sample data (that you can generate by clicking on "Generate Sample Data") is `43.5%` (if you get `45.5`, you are almost nailed it, but pay attention to exceptions).

Note:  The total committment value must be greater than `0` and cannot exceed `100%`.
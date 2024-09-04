# Class Development

Sviluppa una lista ToDo

## Specifiche

Sviluppa due classi `ToDoList`, la classe che si occupa di gestire la lista di cose da fare e `ToDoEntry`, la classe che si occupa di gestire il singolo elemento della lista.

### ToDoEntry

La classe `ToDoEntry` dovrà avere i seguenti attributi:

1. `title`, cioè il contenuto dell'elemento
2. `done`, che specifica se l'elemento della lista è stato completato
3. `createdAt`, il momento in cui è stato creato
4. `completedAt`, il momento in cui è stato completato

Inoltre, dovrà contenere almeno i seguenti metodi:

1. `edit`, che modifica il titolo dell'elemento
2. `setAsCompleted`, che imposta un elemento della lista come completato
3. `setAsNotCompleted`, che ripristina un elemento della lista allo stato di "non completato"

### ToDoList

La classe `ToDoList` dovrà avere i seguenti attributi:

1. `list` che contiene gli elementi della lista.
   
Inoltre dovrà contenere almeno i seguenti metodi:

1. `add`, che aggiunge un elemento alla lista
2. `remove`, che rimuove un elemento dalla lista
3. `duplicate`, che duplica un elemento della lista e lo inserisce dopo l'elemento da duplicare


### Plus

Aggiungere alla classe `ToDoList` un metodo `getCommittmentPercentage` che restituisce un valore numerico in base alle seguenti regole:

1. Every entry in the list gives a `1.5%` increment if it's not completed (`ToDoEntry.done == false`) or a `-4%` decrement if it's completed (`ToDoEntry.done == true`).
2. Every word in each entry increase the committment bar of `1%`.
3. Furthermore, for each different couple of the same adiacent letter gives another `1%` increment. Es. the word ***yellow*** increase the committment of `2%` in total (`1%` for the word itself plus another `1%` for the couple ye**LL**ow), the word ***committment*** gives a total increment of `3%` (`1%` for the word itself plus `2%` for the couples co**MM**ittment and commi**TT**ment), the word ***helloooo*** gives a total increment of `5%` (`1%` for the word itself plus `4%` for the 4 different couples he**LL**oooo, hell**OO**oo,hello**OO**o,helloo**OO**).
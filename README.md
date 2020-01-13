# Todos-React
Aplikacja do dodawania, usuwania i edytowania zadań. Responsywna dzięki Bootstrap.

## Jak uruchomić?
1. Stwórz nowy projekt aplikacji React `npx create-react-app nazwa-aplikacji`.
1. Przejdź do utworzonego projektu `cd [nazwa_projektu]`.
1. Dodaj do projektu **React Router** korzystając z komendy `npm install react-router-dom`.
1. W głównym katalogu projektu zamień: `public`, `src`, `package.json` na pliki/katalogi pobrane z repozytorium.

## Działanie aplikacji
Jest ona bardzo prosta w działaniu. Składa się z dwóch części:
1. Lista zadań `src/List.js`
2. Menu `src/Menu.js`

![Strona startowa- jasny motyw](/images/index_light.png)
![Strona startowa- ciemny motyw](/images/index_dark.png)

### Lista
Na starcie lista składa się z trzech zadań, które są importowane z pliku `src/todos.json`. Każdy element listy jest klikalny.

### Menu
Menu składa się z trzech opcji:
1. Dodawanie `src/MenuComps/Add.js`
2. Usuwanie `src/MenuComps/Remove.js`
3. Edytowanie `src/MenuComps/Edit.js`

![Dodawanie](/images/add.png)
![Usuwanie](/images/remove.png)
![Edytowanie](/images/edit.png)

Aby usunąć/ edytować wybrany element należy kliknąć go na liście lub wpisać jego numer w polu tekstowym.

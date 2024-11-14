# Aplikacja Web

Wykonaj aplikację internetową typu front-end obsługującą zapisy na kursy z zastosowaniem dostępnego na 
stanowisku egzaminacyjnym frameworka Angular lub biblioteki React. Zastosuj bibliotekę Bootstrap do 
zdefiniowania stylu formularza.

![alt-text](https://github.com/jakubir/kontakty-react/blob/main/zdj.png?raw=true)

Na obrazach 1 i 2 przedstawiono działanie aplikacji przygotowanej w środowisku React.js. Na obrazie 1 stan początkowy, na obrazie 2 stan po wybraniu przycisku „Dodaj”. W panelu prawym widoczny wyświetlenie imienia i numeru telefonu.

### Założenia aplikacji:
- Aplikacja składa się z komponentu głównego, komponentu formularza, komponentu listy kontaków i komponentu elementu listy kontaktów.
- Danymi aplikacji jest tablica z imionami i numerami telefonów
- Aplikacja wyświetla:
    - Panel prawy, zawierający:
        - Nagłówek drugiego stopnia o treści: "Lista kontaków"
        - Lista nienumerowana
    - Panel lewy, zawierający:
        - Nagłówek drugiego stopnia o treści: "Dodaj kontakt"
        - Formularz składający się z:
            - pola edycyjnego i jego etykiety o treści "Imię:"
            - edycyjnego pola numerycznego i jego etykiety o treści "Numer telefonu:"
            - przycisku "Dodaj"
        - Aplikacja w stanie początkowym wyświetla puste pola formularza
        - Elementy formularza są formatowane zgodnie z obrazem 1 za pomocą stylów biblioteki Bootstrap. Do budowy szablonu HTML należy wykorzystać pomoc zamieszczoną w Tabeli 1. Należy zastosować znaczące nazwy dla identyfikatorów pól formularza
    - Po wybraniu przycisku formularza jest generowane zdarzenie zatwierdzenia formularza, które dodaje element do listy w panelu prawym: 
        - Wartość wpisaną w pierwszym polu formularza, połączoną z wartością w drugim polu formularza
        - Czyści obydwa pola formularza
    - Listę nienumerowaną generowaną automatycznie dla wszystkich elementów tablicy, niezależnie od jej wymiaru
    - Aplikacja powinna być zapisana czytelnie, z zachowaniem zasad czystego formatowania kodu, należy 
    stosować znaczące nazwy zmiennych i funkcji

Kod aplikacji przygotuj do nagrania na płytę. W podfolderze web powinno znaleźć się archiwum całego 
projektu o nazwie web.zip oraz pliki z kodem źródłowym, które były modyfikowane


### Tabela 1. Wybrane elementy frameworka Angular, biblioteki React.js i biblioteki Bootstrap - przykłady
#### Angular
To use ngModel i ngForm add: import { FormsModule } from '@angular/forms'; in app.module.ts file. Add 
FormsModule to imports table
To use Bootstrap add to styles.css: @import "~bootstrap/dist/css/bootstrap.css";
#### React.js
To use Bootstrap add: import 'bootstrap/dist/css/bootstrap.css';
#### Bootstrap Forms (Źródło https://getbootstrap.com/docs/4.0/components/forms/)
Be sure to use an appropriate type attribute on all inputs (e.g., email for email address or number for 
numerical information) to take advantage of newer input controls like email verification, number selection, 
and more.
Textual form controls—like ```<input>```s, ```<select>```s, and ```<textarea>```s—are styled with the .form-control class. 
Included are styles for general appearance, focus state, sizing, and more.
```
<form>
 <div class="form-group">
 <label for="exampleInputEmail1">Email address</label>
 <input type="email" class="form-control" id="exampleInputEmail1" />
 </div>
 <div class="form-group"> 
 ...
 </div>
</form>
```
Important! In React render method use className instead of class; htmlFor instead of for.
Bootstrap buttons (Źródło https://getbootstrap.com/docs/4.0/components/buttons/)
Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few 
extras thrown in for more control. The btn classes are designed to be used with 
the ```<button>``` element. Add modifier classes as: btn-primary, btn-secondary, btn-success and more to 
btn class in order to add background colors.
e.g. ```<button type="button" class="btn btn-success">Success</button>```


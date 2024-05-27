
# Github Pages: 
_https://Dorata26.github.io/temalab2024_

# Dokumentáció
A témalaboratórium során készítettem egy időjárás jelentő progresszív webalkalmazást (PWA).
A PWA az Accuweather (https://www.accuweather.com) ingyenes API-ját használja. Az webalkalmazás attól progresszív, hogy lehet telepíteni és offline is elérhető. Amikor online keresünk, mindig elmenti az utoljára keresett adatokat a _localstorage_-ba, ahonnan visszanyerhetőek lesznek, így amikor offline nyitjuk meg az oldalt, megjeleníti a legutóbbi online keresést és annak az időpontját. Ha a felhasználó online keres, akkor is vannak ellenőrzések: nem lehet nem létező helyre keresni, nem lehet null karakterre keresni, nem lehet nem betűre keresni. 
A telepíthetőséget ServiceWorker-ek oldják meg. _install_ _fetch_ és egy _actiavte_ _EventListener_ teszik lehetővé. 
A frontend-hez az _index.css_-t írtam meg.
# React
A React előnye, hogy támogatja a komponensekre bontást, így könnyen áttekinthető és újrafelhasználható a kód. Egyszerű benne az állapotkezelés (_'useState'_, _'useEffect'_), mert dinamikusan kezeli az állapotok frissítését interaktív alkalmazások esetén, mint ez is. Hatékonyabb a renderelése, és csak azokat a komponenseket frissíti, amik változtak, így a teljesítménye is optimálisabb.

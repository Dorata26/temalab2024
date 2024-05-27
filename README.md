

# Github Pages: 
_https://Dorata26.github.io/temalab2024_

# Dokumentáció
A témalaboratórium során készítettem egy időjárás jelentő progresszív webalkalmazást (PWA).
A PWA az Accuweather (https://www.accuweather.com) ingyenes API-ját használja. Az webalkalmazás attól progresszív, hogy lehet telepíteni és offline is elérhető. Amikor online keresünk, mindig elmenti az utoljára keresett adatokat a _localstorage_-ba, ahonnan visszanyerhetőek lesznek, így amikor offline nyitjuk meg az oldalt, megjeleníti a legutóbbi online keresést és annak az időpontját. Ha a felhasználó online keres, akkor is vannak ellenőrzések: nem lehet nem létező helyre keresni, nem lehet null karakterre keresni, nem lehet nem betűre keresni. 
A telepíthetőséget ServiceWorker-ek oldják meg. _install_ _fetch_ és egy _actiavte_ _EventListener_ teszik lehetővé. 
A frontend-hez az _index.css_-t írtam meg.
# React
A React előnye, hogy támogatja a komponensekre bontást, így könnyen áttekinthető és újrafelhasználható a kód. Egyszerű benne az állapotkezelés (_'useState'_, _'useEffect'_), mert dinamikusan kezeli az állapotok frissítését interaktív alkalmazások esetén, mint ez is. Hatékonyabb a renderelése, és csak azokat a komponenseket frissíti, amik változtak, így a teljesítménye is optimálisabb.

#Screenshots
![image](https://github.com/Dorata26/temalab2024/assets/131531036/960c6d7e-b57b-4c8c-928c-8ae31c6fa014)
![image-1](https://github.com/Dorata26/temalab2024/assets/131531036/c6682555-527b-43af-bcc8-9442b47c006a)
![tablet](https://github.com/Dorata26/temalab2024/assets/131531036/e636ca05-f7d6-4abc-a5de-a8e6b19e30cd)
![tablet2](https://github.com/Dorata26/temalab2024/assets/131531036/838c3650-b70e-474b-b667-3c4792fbc0ba)
![phone](https://github.com/Dorata26/temalab2024/assets/131531036/33d1f710-f2df-4389-bc98-d31941834601)
![phone2](https://github.com/Dorata26/temalab2024/assets/131531036/966b65d6-cf9f-483d-9472-1b0acafc89db)

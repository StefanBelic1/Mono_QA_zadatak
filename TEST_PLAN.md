# TEST PLAN – Photo Gallery 

## Analiza aplikacije

Demo: [https://demo.baasic.com/angular/starterkit-photo-gallery/main](https://demo.baasic.com/angular/starterkit-photo-gallery/main)

Aplikacija je jednostavna web galerija za dijeljenje fotografija.  
Omogućuje korisnicima:
- Registraciju i prijavu na sustav  
- Pregled i pretragu slika  
- Kreiranje albuma te učitavanje nove slike  
- Odjavu sa profila

---

## Automation prioritizacija

| Scenarij | Opis | Prioritet | Razlog |
|-----------|-------|------------|--------|
| Login – pozitivan | Uspješna prijava sa validnim korisničkim podacima | **HIGH** | Kritična funkcionalnost |
| Login – negativan | Neuspješna prijava sa pogrešnim podacima | **HIGH** | Provjera validacije i sigurnosti |
| Upload fotografije | Korisnik može dodati novu sliku | **HIGH** | Ključna funkcionalnost aplikacije |
| Pregled galerije | Prikaz postojećih fotografija | **MEDIUM** | Bitno za korisničko iskustvo |
| Komentiranje | Dodavanje komentara na sliku | **MEDIUM** | Sekundarna funkcionalnost |
| Lajkanje slike | Klik na "like" povećava broj lajkova | **LOW** | Dodatna funkcionalnost |
| Logout | Odjava korisnika | **HIGH** | Bitno za sigurnost |

---

## Test strategija

### Tipovi testiranja
- **Exploratory testing** – ručno istraživanje zbog shvaćanja aplikacije i otkrivanja bugova   
- **Functional testing** – provjera osnovnih funkcionalnosti (registration, login, upload, logout)  
- **Regression testing** – automatizirani testovi koji se redovno pokreću  

### Alat i okruženje
- **Automation tool:** Cypress  
- **Browser:** Chrome  
- **OS:** Windows 10, Android 14  
- **Test podaci:** test korisnički račun i sample slike (.jpg)

# Ceník Náhradních Vozidel

Webová aplikace pro zobrazení ceníku náhradních vozidel s novým designem.

## Popis

Aplikace zobrazuje ceník náhradních vozidel s možností filtrování podle kategorií a vyhledávání. Data jsou načítána z Excel souboru a zobrazena v přehledném HTML rozhraní.

## Struktura projektu

```
.
├── Dockerfile             # Docker konfigurace
├── docker-compose.yml     # Docker Compose konfigurace
├── .dockerignore         # Soubory ignorované při Docker buildu
├── index.html              # Hlavní HTML soubor s ceníkem
├── vypocet.html           # Stránka pro výpočet
├── ceník_náhradních_vozidel.html
├── convert_excel.py       # Skript pro konverzi Excel do JSON
├── start_server.bat       # Spuštění lokálního web serveru
├── Ceník NV 2025 FINAL.xlsx  # Zdrojový Excel soubor
├── rps_data.js            # JavaScript data pro ceník
├── Loga/                  # Loga společnosti
├── Písma/                 # Fonty DirectSans
├── pozadí/                # Obrázky pozadí
└── Historické ceníky/     # Archiv historických ceníků
```

## Požadavky

- Docker a Docker Compose **nebo** Podman
- Webový prohlížeč

## Instalace a spuštění

### Spuštění pomocí Podman (doporučeno)

1. Naklonujte repozitář:
```bash
git clone <repository-url>
cd car-rental-price-list
```

2. Spusťte aplikaci pomocí pomocného skriptu:
```bash
./start_podman.sh
```

**Nebo ručně pomocí Podman příkazů:**
```bash
# Sestavení image
podman build -t car-rental-price-list .

# Spuštění kontejneru
podman run -d \
    --name car-rental-price-list \
    -p 8000:8000 \
    -e PORT=8000 \
    -e TZ=Europe/Prague \
    --restart unless-stopped \
    car-rental-price-list
```

3. Otevřete prohlížeč a přejděte na:
   ```
   http://localhost:8000/
   ```

4. Užitečné příkazy:
```bash
# Zastavení kontejneru
podman stop car-rental-price-list

# Zobrazení logů
podman logs -f car-rental-price-list

# Odstranění kontejneru
podman rm -f car-rental-price-list

# Odstranění image
podman rmi car-rental-price-list
```

**Poznámka:** Pokud máte nainstalovaný Podman Compose plugin, můžete použít:
```bash
podman compose up --build
```

### Spuštění pomocí Docker

1. Naklonujte repozitář:
```bash
git clone <repository-url>
cd car-rental-price-list
```

2. Spusťte aplikaci pomocí Docker Compose:
```bash
docker compose up --build
```

3. Otevřete prohlížeč a přejděte na:
   ```
   http://localhost:8000/
   ```

4. Pro zastavení aplikace:
```bash
docker compose down
```

### Alternativní spuštění (bez Dockeru)

1. Nainstalujte Python 3.x

2. Spusťte lokální web server:
   - Windows: Dvojklik na `start_server.bat`
   - Mac/Linux: `python -m http.server 8000`

3. Otevřete prohlížeč a přejděte na:
   ```
   http://localhost:8000/
   ```

## Konverze dat z Excel

Pro konverzi Excel souboru do JavaScript formátu:

```bash
python convert_excel.py > rps_data.js
```

## Technologie

- HTML5
- CSS3
- JavaScript (vanilla)
- Python (pro konverzi dat a lokální server)
- Docker & Docker Compose (pro kontejnerizaci)

## Licence

Vnitřní projekt společnosti.


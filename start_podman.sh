#!/bin/bash

# Script to start car rental price list application using Podman

set -e

echo "========================================"
echo "Spouštím aplikaci pomocí Podman..."
echo "========================================"
echo ""

# Check if Podman is installed
if ! command -v podman &> /dev/null; then
    echo "ERROR: Podman není nainstalovaný!"
    echo "Nainstalujte Podman z: https://podman.io/getting-started/installation"
    exit 1
fi

# Check if container already exists and is running
if podman ps -a --format "{{.Names}}" | grep -q "^car-rental-price-list$"; then
    echo "Kontejner již existuje. Zastavuji a odstraňuji starý kontejner..."
    podman stop car-rental-price-list 2>/dev/null || true
    podman rm car-rental-price-list 2>/dev/null || true
fi

# Build the image
echo "Sestavuji Docker image..."
podman build -t car-rental-price-list:latest .

# Run the container
echo "Spouštím kontejner..."
podman run -d \
    --name car-rental-price-list \
    -p 8000:8000 \
    -e PORT=8000 \
    -e TZ=Europe/Prague \
    --restart unless-stopped \
    car-rental-price-list:latest

echo ""
echo "========================================"
echo "Aplikace je spuštěna!"
echo "========================================"
echo ""
echo "Otevřete prohlížeč na: http://localhost:8000/"
echo ""
echo "Pro zastavení spusťte: podman stop car-rental-price-list"
echo "Pro zobrazení logů: podman logs -f car-rental-price-list"
echo "Pro odstranění: podman rm -f car-rental-price-list"
echo "========================================"


# Multi-stage build for car rental price list application
FROM python:3.12-alpine AS builder

# Set timezone to Europe/Prague
RUN apk add --no-cache tzdata && \
    cp /usr/share/zoneinfo/Europe/Prague /etc/localtime && \
    echo "Europe/Prague" > /etc/timezone && \
    apk del tzdata

# Install CA certificates for DIFA internal services
RUN apk add --no-cache ca-certificates curl && \
    curl -ks 'https://repo.difa.cz/global/openssl/triglav-DC03-CA.crt' -o '/usr/local/share/ca-certificates/triglav-DC03-CA.crt' && \
    curl -ks 'https://repo.difa.cz/global/openssl/CAdifa.crt' -o '/usr/local/share/ca-certificates/CAdifa.crt' && \
    /usr/sbin/update-ca-certificates && \
    apk del curl && \
    rm -rf /var/cache/apk/*

# Final stage
FROM python:3.12-alpine AS final

# Copy timezone configuration from builder
COPY --from=builder /etc/localtime /etc/localtime
COPY --from=builder /etc/timezone /etc/timezone

# Copy CA certificates from builder
COPY --from=builder /etc/ssl/certs /etc/ssl/certs
COPY --from=builder /usr/local/share/ca-certificates /usr/local/share/ca-certificates

# Create non-root user
RUN addgroup --system appuser && \
    adduser --system --ingroup appuser appuser

# Set working directory
WORKDIR /app

# Copy application files
COPY --chown=appuser:appuser index.html ./
COPY --chown=appuser:appuser vypocet.html ./
COPY --chown=appuser:appuser ceník_náhradních_vozidel.html ./
COPY --chown=appuser:appuser rps_data.js ./
COPY --chown=appuser:appuser Loga/ ./Loga/
COPY --chown=appuser:appuser Písma/ ./Písma/
COPY --chown=appuser:appuser pozadí/ ./pozadí/
# Copy directory with space in name using array syntax
COPY --chown=appuser:appuser ["Historické ceníky/", "./Historické ceníky/"]

# Switch to non-root user
USER appuser

# Expose port with default value
EXPOSE ${PORT:-8000}

# Start Python HTTP server
CMD python -m http.server ${PORT:-8000}


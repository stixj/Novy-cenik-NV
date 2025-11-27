@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ========================================
echo Spoustim lokalni server...
echo ========================================
echo.

REM Try different ports if one is busy
set PORT=8001
set MAX_ATTEMPTS=5
set ATTEMPT=1

:try_port
if %ATTEMPT% gtr %MAX_ATTEMPTS% (
    echo ERROR: Nepodarilo se najit volny port!
    pause
    exit /b 1
)

netstat -ano | findstr ":%PORT% " >nul 2>&1
if %errorlevel% == 0 (
    echo Port %PORT% je obsazeny, zkousim dalsi...
    set /a PORT+=1
    set /a ATTEMPT+=1
    goto :try_port
)

echo Port %PORT% je volny!
echo.

REM Find Python
where py >nul 2>&1
if %errorlevel% == 0 (
    set PYTHON_CMD=py
    goto :start_server
)

where python >nul 2>&1
if %errorlevel% == 0 (
    set PYTHON_CMD=python
    goto :start_server
)

echo ERROR: Python neni nainstalovany!
echo Nainstaluj Python z https://www.python.org/
pause
exit /b 1

:start_server
echo ========================================
echo Server bezi na: http://localhost:%PORT%/
echo ========================================
echo.
echo Otevri prohlizec na: http://localhost:%PORT%/index.html
echo.
echo Pro zastaveni serveru stiskni Ctrl+C
echo ========================================
echo.

REM Open browser after 2 seconds
start "" cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:%PORT%/index.html"

REM Start server
%PYTHON_CMD% -m http.server %PORT%

pause


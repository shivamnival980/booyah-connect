@echo off
title BooyahConnect Server Launcher
echo ========================================================
echo   BOOYAHCONNECT - FREE FIRE PLAYER PLATFORM SERVER
echo ========================================================
echo.
echo Starting local web server on port 8000...
echo Open your browser and go to: http://127.0.0.1:8000
echo.
python -m http.server 8000 --bind 127.0.0.1
pause

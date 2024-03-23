@echo off
:loop
for /L %%i in (1,1,5) do (
    start cmd /c npx playwright test &&  timeout /t 5 /nobreak >nul
    timeout /t 5
)
timeout /t 30
goto loop

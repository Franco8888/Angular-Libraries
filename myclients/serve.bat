@echo off

if exist dist rmdir /s /q dist

if [%1] == [web] (
    call npm run start-web
)

if [%1] == [desktop] (
    call npm run start:desktop
)

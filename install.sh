#!bin/bash

CYAN="\033[1;36m"
YELLOW="\033[1;33m"
PURPLE="\033[1;35m"
GREEN="\033[1;32m"
RED='\033[1;31m'
NC='\033[0m'

echo $YELLOW"[$RED!$YELLOW] Vou instalar essa merda pra vc"
read inp
if [ "$inp" = "s" ]; then
    apt update
    apt upgrade
    apt-get install ruby -y
    apt-get install lolcat -y
    apt install libwebp-dev =y 
    apt install ffmpeg -y
    apt install wget 
    apt install tesseract-ocr 
    apt install graphicsmagick 
    apt install imagemagick 

    echo $GREEN"A juh foi instalada com sucesso bro"
fi
if [ "$inp" = "n" ]; then
    echo $RED"Entao vai se lascar"
    exit
fi


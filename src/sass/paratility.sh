#!/usr/bin/env bash

#0, 1, or 2 0=failed 1="partially completed" 2="fully completed"
#help for colors and other http://tldp.org/LDP/abs/html/colorizing.html
#Script written for OSX
textgreen='\033[0;32m'
textred='\033[0;31m'
textyellow='\033[1;33m'
textpurple='\033[0;35m'
textnormal='\033[0m'

version="0"

#functions
function sassWatch {
    echo -e "\n"
    echo -e "I'll watch your project for scss changes!"
	  echo -e "\n"
    sass --watch ./paragon.scss:./paragon.css
    echo -e "\n"
}

function gitTags {
    gitfetchtags=$(git fetch --tags)
    gitversion=$(git describe --tags $(git rev-list --tags --max-count=1))
    gitversion="${gitversion#v}"
    gitversionlast="${gitversion##*.}"
    gitversionfirst="${gitversion%%.*}"
    gitversionmiddle="${gitversion#*.}"
    gitversionmiddle="${gitversionmiddle%.*}"
}

function requestDetails {

    echo -e "\n"
    echo -e "${textnormal}[1/2 Gather Details]${textnormal}"
    read -p "1.) Update Paragon from v$gitversionfirst.$gitversionmiddle.$gitversionlast to [v$gitversionfirst.$gitversionmiddle.`expr $gitversionlast + 1`]: v" version
    version=${version:-$gitversionfirst.$gitversionmiddle.`expr $gitversionlast + 1`}
    echo -e "You are going to update paragon to${textgreen} v$version${textnormal}"
    read -p "2.) Type of changelog (Fixed, Added, Updated, etc) [Fixed]: " changelogtype
    changelogtype=${changelogtype:-Fixed}
    echo -e "Type of changelog will be${textgreen} \"$changelogtype\"${textnormal}"
    read -p "3.) What would you like to add to the changelog for this version? " changelog
    echo -e "Your addition to the changelog reads:${textgreen} $changelog${textnormal}"
    echo -e "\n"
}

function writeChangeLog {
  $lineNumber="7"#line to start writing at
  echo -e "\n"

  read -p "Update Paragon from v$gitversionfirst.$gitversionmiddle.$gitversionlast to [v$gitversionfirst.$gitversionmiddle.`expr $gitversionlast + 1`]: v" version
  version=${version:-$gitversionfirst.$gitversionmiddle.`expr $gitversionlast + 1`}

  echo -e "You are going to update paragon to${textgreen} v$version${textnormal}"

  read -p "Type of changelog (Fixed, Added, Updated, etc) [Fixed]: " changelogtype
  changelogtype=${changelogtype:-Fixed}

  echo -e "Type of changelog will be${textgreen} \"$changelogtype\"${textnormal}"

  read -p "3.) What would you like to add to the changelog for this version? " changelog

  echo -e "Your addition to the changelog reads:${textgreen} $changelog${textnormal}"

  echo -e "\n"

  sed -i '' "$lineNumber i\\
  ## [$version] - $timestamp
  " $changelogfile

  sed -i '' "`expr $lineNumber + 1` i\\
  ### $changelogtype
  " $changelogfile

  sed -i '' "`expr $lineNumber + 1` i\\
  - $changelog
  " $changelogfile

  sed -i '' "`expr $lineNumber + 1` i\\
  \\
  " $changelogfile
}

function changeFiles {
    echo -e "\n"
    echo -e "${textnormal}[2/2 Change Files]${textnormal}"
    echo -e "${textyellow}Note: You will update these 3 files with the information provided in Step 1:
    - bower.json
    - package.json
    - CHANGELOG.md${textnormal}"
    read -p "Change (3) files? (y = Continue, any other = Cancel) " permissionfile

    if [ $permissionfile == 'y' ]
    then
        echo -e "${textgreen}Changing files... ${textnormal}"

        #Files and what to search for:
        packagejson="package.json"
        packageversion='"version":'
        changelogfile="CHANGELOG.md"

        #change CHANGELOG.md
        timestamp=`date +%F`

        #change package.json - search for: "version":
        sed -i '' "s/$packageversion.*/$packageversion \"$version\",/" $packagejson

        #Has to be inserted line by line... (Mac osx requires the literal line break...)
        sed -i '' "7 i\\
        ## [$version] - $timestamp
        " $changelogfile
        sed -i '' "8 i\\
        ### $changelogtype
        " $changelogfile
        sed -i '' "9 i\\
        - $changelog
        " $changelogfile
        sed -i '' "10 i\\
        \\
        " $changelogfile

        echo -e "${textgreen}Changed files. ${textnormal}"
    else
        echo -e "${textyellow}Cancelled file change. ${textnormal}"
    fi
    echo -e "\n"
}

echo -e "${textgreen}"

cat << "textart"
+--------------------------------------+
_____
|  __ \
| |__) |_ _ _ __ __ _  __ _  ___  _ __
|  ___/ _` | '__/ _` |/ _` |/ _ \| '_ \
| |  | (_| | | | (_| | (_| | (_) | | | |
|_|   \__,_|_|  \__,_|\__, |\___/|_| |_|
                      __/ |
                     |___/
textart
echo -e "${textpurple}©Samaritan Ministries International${textgreen}
v0.1.0 - (Uses Dart Sass)
+--------------------------------------+"
echo -e "${textnormal}"

while true
do
PS3="
How can I help?"
options=("Watch" "Files" "Exit")
select option in "${options[@]}"
  do
    case $option in
        "Watch")
            echo "Starting sass watch (requires dart sass)..."
            sassWatch
            break
            ;;
        "Files")
            gitTags
            requestDetails
            changeFiles
            break
            ;;
        "Exit")
            echo "Goodbye!"
            exit
            ;;
        *) echo invalid option;;
    esac
  done
done

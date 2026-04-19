#!/bin/bash

curl -X POST https://calevent-db-mkxw5.ondigitalocean.app/api/flyers \
-F "title=$1" \
-F "description=$2" \
-F "city=$3" \
-F "image=@$4" \
-F "timeOfEvent=$5" \
-F "dateOfEvent=$6" \
-F "capacity=$7" \
-F "organizer=$8" \
-F "location=$9"
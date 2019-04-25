[![Build Status](https://travis-ci.org/anonimoose/CATMAID-myextension.svg?branch=master)](https://travis-ci.org/anonimoose/CATMAID-myextension)
[![Coverage Status](https://coveralls.io/repos/github/anonimoose/CATMAID-myextension/badge.svg?branch=master)](https://coveralls.io/github/anonimoose/CATMAID-myextension?branch=master)

# CATMAID-myextension

My Extension is a django application which acts as a drop-in
extension for [CATMAID](http://www.catmaid.org). It contains API
endpoints and static files.

## Quick start

1. Install myextension in whichever python environment is running
CATMAID with `pip install -e path/to/this/directory`

2. Run `python manage.py migrate` to create the myextension models.

3. Run `python manage.py collectstatic -l` to pick up
myextension's static files.

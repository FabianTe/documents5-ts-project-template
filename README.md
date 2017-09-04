# documents5-ts-project-template
DOCUMENTS 5 Project Template using Typescript

**This template is currently a WIP. If you know what you're doing you can already use it!**

This template is meant to be used with Visual Studio Code and [Otris's Plugin for JANUS based Applications](https://github.com/otris/vscode-janus-debug).

## How to get

1. Clone: ```git clone https://github.com/FabianTe/documents5-ts-project-template```
2. (Optional but recommended) Remove the original remote: ```git remote rm origin```
3. Install all [workspace recommended plugins](https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions) which include Otris's plugin.
4. Install dependencies ```npm i```.
5. Download the lates PortalScriptings from [here](https://github.com/otris/vscode-janus-debug/tree/master/portalscript/typings) to ```./typings/server```. Alternatively you can download them with a right click on the server folder and selecting **Install Intellisense Files** if you have Otris's extension installed.

Alternatively you could also delete the hidden ```.git``` folder and use ```git init``` later if you want to start completely clean.

## Template Structure

The most important files are inside the ```./src``` folder:

- ```./src/server``` contains the Typescript scripts that will be compiled into PortalScripting compatible scripts.
- ```./src/client``` contains everything that you would like to serve on client side via ext. res., for example the html / css an iframe could server via a gadget or a script return of type ```html```

## Using the template

There are the following gulp options available you can customize in ```./gulpfile.js```:

- ```build```
	- ```--client``` - Call all gulpfiles that build the client modules
	- ```--server``` - Build all server scripts (PortalScripting)
- ```deploy```
	- ```--client``` - Copy client files to ext. res and so on.
	- ```--server``` - Upload PortalScripts to DOCUMENTS server

### Building server scripts

1. Call ```gulp build --server``` in project root.
2. Upload script from ```./build/server```

**Not every build option is implemented right now! Feel free to contribute to this repository :)**
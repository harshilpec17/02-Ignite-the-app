package.json is part of the NPM manager
-D dev dependency
normal dependency 
----------
"^" - caret it will update the minor version 
"~" - tilde it will update the major version

package.json will keep the information regarding the current version of the file. Infront of the version, when we put tilde or caret, it will use to upgrade the package

package-lock.json file will store the dependency of the main package and it will create the tree like structure for all the dependencies. it is really helpful, when other developer are working, in the new machine should have the same dependency tree structure to run a project without any error. 

npm ci will check the package-lock.json file and dependency tree, if it was present there then it will start install the new version or else it will throw the error. it is good practice in the automated environment and as well test cases. it will not break the other thing

npm install will directly install the package without looking for the tree dependency 

package-lock.json will keep the track the version. 

node_module no need to add on the git. its heavy file. and also with simple command we can create same node_module

# Parcel
- Dev Build
- Local server
- HMR = Hot Module Replacement
- File watching  algorithm - written in c++
- caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consisting mashing
- code splitting
- Differential Bundling - import fro browsers
- Diagnostic
- Error Handling
- HTTPS
- tree shaking - remove unused code
- Different dev and prod bundles
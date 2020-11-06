## A simple logging package


**installation**
```bash
npm install volix-logger
```

**example:**
```js
const logger = require("volix-logger");

//Log information
logger.info("text");

//log errors
logger.error("text");

//log fatal errors
logger.fatal("text");

//log warnings
logger.warning("text");
```
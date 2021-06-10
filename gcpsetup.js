let fs = require("fs");

fs.write(process.env.GCP_KEY_FILE, process.envGCP_CRED, (err) => {});

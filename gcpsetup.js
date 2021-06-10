let fs = require("fs");

fs.write(process.env.GCP_KEY_FILE, process.env.GCP_CRED, (err) => {});

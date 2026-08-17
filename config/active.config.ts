// The single switch point for "which client is this build".
// New client workflow:
//   1. cp config/clients/_template.config.ts config/clients/<client-id>.config.ts
//   2. Fill in the new file
//   3. Change the import below to point at it

import config from "./clients/wanddurchbruch.config";

export default config;

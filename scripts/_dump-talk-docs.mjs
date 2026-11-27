/**
 * Prints buildDocuments() JSON to stdout. Invoked by talk-index.mjs via tsx.
 */
import { buildDocuments } from '../src/lib/talk/documents.js';

process.stdout.write(JSON.stringify(buildDocuments()));

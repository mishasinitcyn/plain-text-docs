import { MeiliSearch } from 'meilisearch'
import { environment } from './src/environments/environment';

const client = new MeiliSearch({
  host: environment.meiliHost || 'http://localhost:7700',
  apiKey: environment.meiliMasterKey,
})

export const documentsIndex = client.index('documents')
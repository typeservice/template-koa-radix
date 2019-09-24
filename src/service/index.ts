import { injectable } from 'inversify';
import { http } from '@typeservice/radix';

@injectable()
export default class IndexService {
  @http.Get()
  Home(@http.Header('host') host: string) {
    return 'Hello world! ' + host;
  }
}
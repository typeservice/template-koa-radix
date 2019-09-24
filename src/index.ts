import Koa from '@typeservice/koa';
import Radix, { HttpVersion } from '@typeservice/radix';
import { States, Context } from './interfaces';

const app = new Koa<States, Context>(8080, console);
const radix = new Radix<HttpVersion['HTTP1']>();

radix.scan('service', __dirname);

app.use(radix.compose());
app.httpBootstrap();

app.listen();
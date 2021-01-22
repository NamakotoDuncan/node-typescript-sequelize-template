import { controller, httpGet, BaseHttpController, httpHead } from 'inversify-express-utils';

@controller('/v1/status')
export class StatusController extends BaseHttpController {
  @httpGet('/')
  get(): void {
    // this.httpContext.response.status(200).end();
    this.httpContext.response.json({ message: 'hello world' });
  }

  @httpHead('/')
  head(): void {
    this.httpContext.response.status(200).end();
  }
}

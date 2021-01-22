import { controller, httpGet, BaseHttpController, httpHead } from 'inversify-express-utils';

@controller('/v2/status')
export class StatusControllerV2 extends BaseHttpController {
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

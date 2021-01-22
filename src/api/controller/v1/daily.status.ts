import { celebrate, Joi } from 'celebrate';
import { inject } from 'inversify';
import { controller, BaseHttpController, httpGet, httpHead, httpPost } from 'inversify-express-utils';
import { DailyStatusService } from '../../../service/market/daily.status.service';

@controller('/v1/status/day')
export class DailyStatusController extends BaseHttpController {
  @inject(DailyStatusService)
  private dailyStatusService!: DailyStatusService;

  @httpGet(
    '/',
    celebrate({
      query: Joi.object({
        sort: Joi.string(),
        page: Joi.number(),
        limit: Joi.number(),
      }),
    }),
  )
  async get(): Promise<void> {
    // const { sort, page, limit } = this.httpContext.request.query;
    const dailyStatus = await this.dailyStatusService.findAll({});
    this.httpContext.response.json({ dailyStatus });
  }

  @httpPost(
    '/',
    celebrate({
      body: Joi.object({
        instrument: Joi.string().required(),
        date: Joi.date().required(),
        status: Joi.string().required(),
        previousPrice: Joi.number().required(),
        currentPrice: Joi.number().required(),
        bipChange: Joi.number().required(),
      }),
    }),
  )
  async create(): Promise<void> {
    const { instrument, date, status, previousPrice, currentPrice, bipChange } = this.httpContext.request.body;

    const dailyStatus = await this.dailyStatusService.create({
      instrument,
      date,
      status,
      previousPrice,
      currentPrice,
      bipChange,
    });

    this.httpContext.response.json({ dailyStatus });
  }

  @httpHead('/')
  head(): void {
    this.httpContext.response.status(200).end();
  }
}

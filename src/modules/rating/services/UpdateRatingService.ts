/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IRatingRepository from '../domain/repositories/IRatingRepository';
import IRequestUpdateRating from '../domain/interfaces/IRequestUpdateRating';

@injectable()
class UpdateRatingService {
    constructor(
        //@ts-ignore
        @inject('RatingRepository')
        private ratingRepository: IRatingRepository,
    ) {}

    public async update(id: string, parameters: IRequestUpdateRating): Promise<IRequestUpdateRating> {
        const data = {};

        if (typeof parameters.faithPoint !== 'undefined') {
            Object.assign(data, { faithPoint: parameters.faithPoint });
        }

        if (typeof parameters.user !== 'undefined') {
            Object.assign(data, { user: parameters.user });
        }

        if (typeof parameters.score !== 'undefined') {
            Object.assign(data, { score: parameters.score });
        }

        if (typeof parameters.comment !== 'undefined') {
            Object.assign(data, { comment: parameters.comment });
        }
        
        if (typeof parameters.updated_at !== 'undefined') {
            Object.assign(data, { updated_at: Date.now() });
        }
        
        if(Object.keys(data).length === 0) {
            throw new Error('No data to update');
        }

        await this.ratingRepository.update(id, data);

        return parameters;
    }
}

export default UpdateRatingService;
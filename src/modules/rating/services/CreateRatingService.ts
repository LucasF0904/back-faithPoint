/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import ICreateRating from '../domain/interfaces/ICreateRating';
import IRatingRepository from '../domain/repositories/IRatingRepository';

@injectable()
class CreateRatingService {
    constructor(
        // @ts-ignore
        @inject('RatingRepository')
        private religionRepository: IRatingRepository,
    ){}

    public async create(parameters: ICreateRating): Promise<ICreateRating> {
        const religion = await this.religionRepository.create({
            faithPoint: parameters.faithPoint,
            user: parameters.user,
            score: parameters.score,
            comment: parameters.comment,
            created_at: parameters.created_at,
        });
        return religion;
    }
}

export default CreateRatingService;
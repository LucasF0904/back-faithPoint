/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IRatingRepository from '../domain/repositories/IRatingRepository';
import { IRating } from '../domain/interfaces/IRating';

@injectable()
class FindRatingService {    
    constructor(
        //@ts-ignore
        @inject('RatingRepository')
        private ratingRepository: IRatingRepository,
    ) {}

    public async findAll(): Promise<IRating[] | undefined> {
        const rating = await this.ratingRepository.findAll();

        return rating;
    }

    public async findById(id: string): Promise<IRating | undefined> {
        const rating = await this.ratingRepository.findById(id);

        return rating;
    }

    public async findByName(name: string): Promise<IRating | undefined> {
        const rating = await this.ratingRepository.findByName(name);

        return rating;
    }
        
}
export default FindRatingService;
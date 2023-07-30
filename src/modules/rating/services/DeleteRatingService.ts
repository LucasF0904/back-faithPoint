/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IRatingRepository from '../domain/repositories/IRatingRepository';

@injectable()
class DeleteRatingService {
    constructor(
        //@ts-ignore
        @inject('RatingRepository')
        private ratingRepository: IRatingRepository,
    ) {}

    public async delete(id: string): Promise<void> {
        await this.ratingRepository.delete(id);
    }
}

export default DeleteRatingService;
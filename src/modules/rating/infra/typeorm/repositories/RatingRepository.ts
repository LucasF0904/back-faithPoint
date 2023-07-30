import { getRepository, Repository } from 'typeorm';
import Rating from '../entities/Rating';
import ICreateRating from '@modules/rating/domain/interfaces/ICreateRating';
import { IRating } from '@modules/rating/domain/interfaces/IRating';
import IRequestCreateRating from '@modules/rating/domain/interfaces/IRequestCreateRating';
import IRequestUpdateRating from '@modules/rating/domain/interfaces/IRequestUpdateRating';
import IRatingRepository from '@modules/rating/domain/repositories/IRatingRepository';

class RatingRepository implements IRatingRepository {
    private ormRepository: Repository<Rating>;
    
    constructor() {
        this.ormRepository = getRepository(Rating);
    }
    
    public async create(parameters: IRequestCreateRating): Promise<ICreateRating> {
        const rating = this.ormRepository.create({
        faithPoint: parameters.faithPoint,
        user: parameters.user,
        score: parameters.score,
        comment: parameters.comment,
        created_at: parameters.created_at,
        });
        await this.ormRepository.save(rating);
    
        return rating;
    }
    
    public async update(id: string, rating: IRequestUpdateRating): Promise<boolean> {
        await this.ormRepository.update(id, rating);
    
        return true;
    }
    
    public async delete(id: string): Promise<void> {
        await this.ormRepository.delete(id);
    }
    
    public async findAll(): Promise<Rating[]> {
        const rating = this.ormRepository.find();
    
        return rating;
    }
    
    public async findById(id: string): Promise<IRating | undefined> {
        const rating = this.ormRepository.findOne(id);
    
        return rating;
    }

    public async findByName(name: string): Promise<IRating | undefined> {
        const rating = this.ormRepository.findOne({
            where: {
                name: name
            }
        });

        return rating;
    }
}

export default RatingRepository;

import ICreateFaithPoint from '@modules/faith_point/domain/interfaces/ICreateFaithPoint';
import { IFaithPoint } from '@modules/faith_point/domain/interfaces/IFaithPoint';
import IRequestCreateFaithPoint from '@modules/faith_point/domain/interfaces/IRequestCreateFaithPoint';
import IRequestUpdateFaithPoint from '@modules/faith_point/domain/interfaces/IRequestUpdateFaithPoint';
import IFaithPointRepository from '@modules/faith_point/domain/repositories/IFaithPointRepository';
import { getRepository, Repository } from 'typeorm';
import FaithPoint from '../entities/FaithPoint';

class FaithPointRepository implements IFaithPointRepository {
    private ormRepository: Repository<FaithPoint>;
    
    constructor() {
        this.ormRepository = getRepository(FaithPoint);
    }
    
    public async create(parameters: IRequestCreateFaithPoint): Promise<ICreateFaithPoint> {
        const faithPoint = this.ormRepository.create({
        name: parameters.name,
        description: parameters.description,
        created_at: parameters.created_at,
        });
        await this.ormRepository.save(faithPoint);
    
        return faithPoint;
    }
    
    public async update(id: string, faithPoint: IRequestUpdateFaithPoint): Promise<boolean> {
        await this.ormRepository.update(id, faithPoint);
    
        return true;
    }
    
    public async delete(id: string): Promise<void> {
        await this.ormRepository.delete(id);
    }
    
    public async findAll(): Promise<FaithPoint[]> {
        const faithPoint = this.ormRepository.find();
    
        return faithPoint;
    }
    
    public async findById(id: string): Promise<IFaithPoint | undefined> {
        const faithPoint = this.ormRepository.findOne(id);
    
        return faithPoint;
    }

    public async findByName(name: string): Promise<IFaithPoint | undefined> {
        const faithPoint = this.ormRepository.findOne({
            where: {
                name: name
            }
        });

        return faithPoint;
    }
}

export default FaithPointRepository;

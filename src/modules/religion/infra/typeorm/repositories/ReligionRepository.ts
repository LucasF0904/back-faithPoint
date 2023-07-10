import IReligionRepository from '@modules/religion/domain/repositories/IReligionRepository';
import { getRepository, Repository } from 'typeorm';
import Religion from '@modules/religion/infra/typeorm/entities/Religion';
import ICreateReligion from '@modules/religion/domain/interfaces/ICreateReligion';
import { IReligion } from '@modules/religion/domain/interfaces/IReligion';
import IRequestCreateReligion from '@modules/religion/domain/interfaces/IRequestCreateReligion';
import IRequestUpdateReligion from '@modules/religion/domain/interfaces/IRequestUpdateReligion';

class ReligionRepository implements IReligionRepository {
    private ormRepository: Repository<Religion>;
    
    constructor() {
        this.ormRepository = getRepository(Religion);
    }
    
    public async create(parameters: IRequestCreateReligion): Promise<ICreateReligion> {
        const religion = this.ormRepository.create({
        name: parameters.name,
        description: parameters.description,
        created_at: parameters.created_at,
        });
        await this.ormRepository.save(religion);
    
        return religion;
    }
    
    public async update(id: string, religion: IRequestUpdateReligion): Promise<boolean> {
        await this.ormRepository.update(id, religion);
    
        return true;
    }
    
    public async delete(id: string): Promise<void> {
        await this.ormRepository.delete(id);
    }
    
    public async findAll(): Promise<Religion[]> {
        const religion = this.ormRepository.find();
    
        return religion;
    }
    
    public async findById(id: string): Promise<IReligion | undefined> {
        const religion = this.ormRepository.findOne(id);
    
        return religion;
    }

    public async findByName(name: string): Promise<IReligion | undefined> {
        const religion = this.ormRepository.findOne({
            where: {
                name: name
            }
        });

        return religion;
    }
}

export default ReligionRepository;

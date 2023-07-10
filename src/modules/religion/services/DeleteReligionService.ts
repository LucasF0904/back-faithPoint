/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IReligionRepository from '../domain/repositories/IReligionRepository';

@injectable()
class DeleteReligionService {
    constructor(
        //@ts-ignore
        @inject('ReligionRepository')
        private religionRepository: IReligionRepository,
    ) {}

    public async delete(id: string): Promise<void> {
        await this.religionRepository.delete(id);
    }
}

export default DeleteReligionService;
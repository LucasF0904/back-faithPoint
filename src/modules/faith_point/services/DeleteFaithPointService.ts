/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IFaithPointRepository from '../domain/repositories/IFaithPointRepository';

@injectable()
class DeleteFaithPointService {
    constructor(
        //@ts-ignore
        @inject('FaithPointRepository')
        private faithPointRepository: IFaithPointRepository,
    ) {}

    public async delete(id: string): Promise<void> {
        await this.faithPointRepository.delete(id);
    }
}

export default DeleteFaithPointService;
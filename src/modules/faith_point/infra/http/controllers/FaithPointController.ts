import CreateFaithPointService from '@modules/faith_point/services/CreateFaithPointService';
import DeleteFaithPointService from '@modules/faith_point/services/DeleteFaithPointService';
import FindFaithPointService from '@modules/faith_point/services/FindFaithPointService';
import UpdateFaithPointService from '@modules/faith_point/services/UpdateFaithPointService';
import ApiResponse from '@shared/http/response/ApiResponse';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class FaithPointController {
    public async create(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(CreateFaithPointService);

        const faithPoint = await service.create(request.body);

        const output = await ApiResponse.execute('FaithPoint criada com sucesso!.', faithPoint);

        return response.json(output);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(UpdateFaithPointService);

        const faithPoint = await service.update(request.params.id, request.body);

        const output = await ApiResponse.execute('FaithPoint Atualizado. ', faithPoint);

        return response.json(output);
    }
    public async delete(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(DeleteFaithPointService);

        const faithPoint = await service.delete(request.body);

        const output = await ApiResponse.execute('FaithPoint Deletado. ', faithPoint);

        return response.json(output);
    }
    public async findAll(_request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindFaithPointService);

        const faithPoint = await service.findAll();

        const output = await ApiResponse.execute('Find All retornado', faithPoint);

        return response.json(output);
    }
    public async findById(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindFaithPointService);

        const faithPoint = await service.findById(request.params.id);

        const output = await ApiResponse.execute('findById retornado', faithPoint);

        return response.json(output);
    }
    public async findByName(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindFaithPointService);

        const faithPoint = await service.findByName(request.params.name);

        const output = await ApiResponse.execute('findByName retornado', faithPoint);

        return response.json(output);
    }
}

export default FaithPointController;
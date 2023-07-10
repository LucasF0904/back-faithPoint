import CreateReligionService from '@modules/religion/services/CreateReligionService';
import DeleteReligionService from '@modules/religion/services/DeleteReligionService';
import FindReligionService from '@modules/religion/services/FindReligionService';
import UpdateReligionService from '@modules/religion/services/UpdateReligionService';
import ApiResponse from '@shared/http/response/ApiResponse';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ReligionController {
    public async create(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(CreateReligionService);

        const religion = await service.create(request.body);

        const output = await ApiResponse.execute('Religion criada com sucesso!.', religion);

        return response.json(output);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(UpdateReligionService);

        const religion = await service.update(request.params.id, request.body);

        const output = await ApiResponse.execute('Religion Atualizado. ', religion);

        return response.json(output);
    }
    public async delete(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(DeleteReligionService);

        const religion = await service.delete(request.body);

        const output = await ApiResponse.execute('Religion Deletado. ', religion);

        return response.json(output);
    }
    public async findAll(_request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindReligionService);

        const religion = await service.findAll();

        const output = await ApiResponse.execute('Find All retornado', religion);

        return response.json(output);
    }
    public async findById(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindReligionService);

        const religion = await service.findById(request.params.id);

        const output = await ApiResponse.execute('findById retornado', religion);

        return response.json(output);
    }
    public async findByName(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindReligionService);

        const religion = await service.findByName(request.params.name);

        const output = await ApiResponse.execute('findByName retornado', religion);

        return response.json(output);
    }
}

export default ReligionController;
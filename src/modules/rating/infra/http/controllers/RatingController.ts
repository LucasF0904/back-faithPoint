import CreateRatingService from '@modules/faith_point/services/CreateRatingService';
import DeleteRatingService from '@modules/faith_point/services/DeleteRatingService';
import FindRatingService from '@modules/faith_point/services/FindRatingService';
import UpdateRatingService from '@modules/faith_point/services/UpdateRatingService';
import ApiResponse from '@shared/http/response/ApiResponse';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class RatingController {
    public async create(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(CreateRatingService);

        const rating = await service.create(request.body);

        const output = await ApiResponse.execute('Rating criada com sucesso!.', rating);

        return response.json(output);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(UpdateRatingService);

        const rating = await service.update(request.params.id, request.body);

        const output = await ApiResponse.execute('Rating Atualizado. ', rating);

        return response.json(output);
    }
    public async delete(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(DeleteRatingService);

        const rating = await service.delete(request.body);

        const output = await ApiResponse.execute('Rating Deletado. ', rating);

        return response.json(output);
    }
    public async findAll(_request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindRatingService);

        const rating = await service.findAll();

        const output = await ApiResponse.execute('Find All retornado', rating);

        return response.json(output);
    }
    public async findById(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindRatingService);

        const rating = await service.findById(request.params.id);

        const output = await ApiResponse.execute('findById retornado', rating);

        return response.json(output);
    }
    public async findByName(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindRatingService);

        const rating = await service.findByName(request.params.name);

        const output = await ApiResponse.execute('findByName retornado', rating);

        return response.json(output);
    }
}

export default RatingController;
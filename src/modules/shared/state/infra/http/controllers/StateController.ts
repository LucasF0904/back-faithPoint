
import CreateStateService from '@modules/shared/state/services/CreateStateService';
import DeleteStateService from '@modules/shared/state/services/DeleteStateService';
import FindStateService from '@modules/shared/state/services/FindStateService';
import UpdateStateService from '@modules/shared/state/services/UpdateStateService';
import ApiResponse from '@shared/http/response/ApiResponse';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class StateController {
    public async create(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(CreateStateService);

		const state = await service.create(request.body);

		const output = await ApiResponse.execute('State criada com sucesso!.', state);

		return response.json(output);
	}

    public async update(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(UpdateStateService);

		const state = await service.update(request.params.id, request.body);

		const output = await ApiResponse.execute('State Atualizado. ', state);

		return response.json(output);
	}
    public async delete(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(DeleteStateService);

		const state = await service.delete(request.body);

		const output = await ApiResponse.execute('State Deletado. ', state);

		return response.json(output);
	}
    public async findAll(_request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindStateService);

		const state = await service.findAll();

		const output = await ApiResponse.execute('Find All retornado', state);

		return response.json(output);
	}
    public async findById(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindStateService);

		const state = await service.findById(request.params.id);

		const output = await ApiResponse.execute('findById retornado', state);

		return response.json(output);
	}
	public async findByCountry(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindStateService);

		const state = await service.findByCountry(request.params.id);

		const output = await ApiResponse.execute('findByCountry retornado', state);

		return response.json(output);
	}
    public async findByShortName(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindStateService);

		const state = await service.findByShortName(request.body);

		const output = await ApiResponse.execute('findByShortName retornado', state);

		return response.json(output);
	}
    public async findByLongName(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindStateService);

		const state = await service.findByLongName(request.body);

		const output = await ApiResponse.execute('findByLongName retornado', state);

		return response.json(output);
	}

	public async findByCode(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindStateService);

		const state = await service.findByCode(request.params.id);

		const output = await ApiResponse.execute('findByCode retornado', state);

		return response.json(output);
	}
}

export default StateController;
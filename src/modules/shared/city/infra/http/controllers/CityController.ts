
import CreateCityService from '@modules/shared/city/services/CreateCityService';
import DeleteCityService from '@modules/shared/city/services/DeleteCityService';
import FindCityService from '@modules/shared/city/services/FindCityService';
import UpdateCityService from '@modules/shared/city/services/UpdateCityService';
import ApiResponse from '@shared/http/response/ApiResponse';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CityController {
    public async create(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(CreateCityService);

		const city = await service.create(request.body);

		const output = await ApiResponse.execute('City criada com sucesso!.', city);

		return response.json(output);
	}

    public async update(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(UpdateCityService);

		const city = await service.update(request.params.id, request.body);

		const output = await ApiResponse.execute('City Atualizado. ', city);

		return response.json(output);
	}
    public async delete(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(DeleteCityService);

		const city = await service.delete(request.body);

		const output = await ApiResponse.execute('City Deletado. ', city);

		return response.json(output);
	}
    public async findAll(_request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindCityService);

		const city = await service.findAll();

		const output = await ApiResponse.execute('Find All retornado', city);

		return response.json(output);
	}
    public async findById(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindCityService);

		const city = await service.findById(request.params.id);

		const output = await ApiResponse.execute('findById retornado', city);

		return response.json(output);
	}
	public async findByState(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindCityService);

		const city = await service.findByState(request.params.id);

		const output = await ApiResponse.execute('findByState retornado', city);

		return response.json(output);
	}
    public async findByShortName(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindCityService);

		const city = await service.findByShortName(request.body);

		const output = await ApiResponse.execute('findByShortName retornado', city);

		return response.json(output);
	}
    public async findByLongName(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindCityService);

		const city = await service.findByLongName(request.body);

		const output = await ApiResponse.execute('findByLongName retornado', city);

		return response.json(output);
	}

	public async findByCode(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindCityService);

		const city = await service.findByCode(request.params.id);

		const output = await ApiResponse.execute('findByCode retornado', city);

		return response.json(output);
	}
}

export default CityController;
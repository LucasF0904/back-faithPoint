
import CreateUserService from '@modules/user/services/CreateUserService';
import DeleteUserService from '@modules/user/services/DeleteUserService';
import FindUserService from '@modules/user/services/FindUserService';
import UpdateUserService from '@modules/user/services/UpdateUserService';
import ApiResponse from '@shared/http/response/ApiResponse';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class UserController {
    public async create(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(CreateUserService);

		const user = await service.create(request.body);

		const output = await ApiResponse.execute('User criada com sucesso!.', user);

		return response.json(output);
	}

    public async update(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(UpdateUserService);

		const user = await service.update(request.params.id, request.body);

		const output = await ApiResponse.execute('User Atualizado. ', user);

		return response.json(output);
	}
    public async delete(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(DeleteUserService);

		const user = await service.delete(request.body);

		const output = await ApiResponse.execute('User Deletado. ', user);

		return response.json(output);
	}
    public async findAll(_request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindUserService);

		const user = await service.findAll();

		const output = await ApiResponse.execute('Find All retornado', user);

		return response.json(output);
	}
    public async findById(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindUserService);

		const user = await service.findById(request.params.id);

		const output = await ApiResponse.execute('findById retornado', user);

		return response.json(output);
	}
	public async findByAddress(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindUserService);

		const user = await service.findByAddress(request.params.id);

		const output = await ApiResponse.execute('findByAddress retornado', user);

		return response.json(output);
	}
}

export default UserController;

import CreateAddressService from '@modules/shared/address/services/CreateAddressService';
import DeleteAddressService from '@modules/shared/address/services/DeleteAddressService';
import FindAddressService from '@modules/shared/address/services/FindAddressService';
import UpdateAddressService from '@modules/shared/address/services/UpdateAddressService';
import ApiResponse from '@shared/http/response/ApiResponse';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class AddressController {
    public async create(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(CreateAddressService);

		const address = await service.create(request.body);

		const output = await ApiResponse.execute('Address criada com sucesso!.', address);

		return response.json(output);
	}

    public async update(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(UpdateAddressService);

		const address = await service.update(request.params.id, request.body);

		const output = await ApiResponse.execute('Address Atualizado. ', address);

		return response.json(output);
	}
    public async delete(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(DeleteAddressService);

		const address = await service.delete(request.body);

		const output = await ApiResponse.execute('Address Deletado. ', address);

		return response.json(output);
	}
    public async findAll(_request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindAddressService);

		const address = await service.findAll();

		const output = await ApiResponse.execute('Find All retornado', address);

		return response.json(output);
	}
    public async findById(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindAddressService);

		const address = await service.findById(request.params.id);

		const output = await ApiResponse.execute('findById retornado', address);

		return response.json(output);
	}
	public async findByCity(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindAddressService);

		const address = await service.findByCity(request.params.id);

		const output = await ApiResponse.execute('findByCity retornado', address);

		return response.json(output);
	}
}

export default AddressController;
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';


@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productsRepository: Repository<Product>,
    ) {}

    //Definir servicios
    async findAll(): Promise<Product[]> {
        return await this.productsRepository.find();
    }

    async findOne(product_id: number): Promise<Product> {
        return await this.productsRepository.findOne({where : {product_id}});
    }

    async create(product: Product): Promise<Product> {
        const newProduct = this.productsRepository.create(product);
        return await this.productsRepository.save(newProduct);
    }

    async update(product_id: number, product: Product): Promise<Product>{
        await this.productsRepository.update({product_id}, product);
        return await this.productsRepository.findOne({where: {product_id}});
    }

    async delete(product_id: number): Promise<void> {
        await this.productsRepository.delete(product_id)
    }

}

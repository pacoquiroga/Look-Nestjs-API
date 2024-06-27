import { Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    //get all products
    @Get()
    async findAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }

    //get one product
    @Get(':product_id')
    async findOne(@Param('product_id') product_id: number): Promise<Product>{
        const product = this.productsService.findOne(product_id);
        if(!product){
            throw new Error('Product not found');
        } else{
            return product;
        }
    }

    //create new product
    @Post()
    async create(@Body() product: Product): Promise<Product>{
        return await this.productsService.create(product);
    }

    //update product
    @Put(':product_id')
    async update(@Param('product_id') product_id:number, @Body() product:Product): Promise<Product>{
        return this.productsService.update(product_id,product);
    }

    //delete product
    @Delete(':product_id')
    async delete(@Param('product_id') product_id:number): Promise<void>{
        const deleteProduct = this.productsService.findOne(product_id);
        if(!deleteProduct){
            throw new Error('El producto no existe')
        }else{
            return this.productsService.delete(product_id);
        }
    }

}

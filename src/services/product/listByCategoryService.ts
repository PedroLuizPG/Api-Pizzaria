import prismaClient from "../../prisma";

interface ProductRequest {
  category_id: string;
}

class ListByCategoryService {
  async execute({ category_id }: ProductRequest) {
    //aqui vai a logica para pegar todos os produtos de uma categoria atraves do id da categoria

    const findByCategory = await prismaClient.product.findMany({
      where: {
        category_id: category_id,
      },
    });

    return findByCategory
  }
}

export { ListByCategoryService };

import readCSV from "../model/readCSV";
import { Data } from "../model/data.interface";
import writeCSV from "../model/writeCSV";
const filePath = './model/estoque.csv';


class estoqueService{

    async criar(data: Data){

        if(data.id < 0 || data.value == null || data.qtd == null)
            throw new Error("Os dados são inválidos");
        const produtos =  await readCSV(filePath);

        const verifica = produtos.find(p=>p.id == data.id) //se existe algum produto com o mesmo id verifica recebe 1
        if(verifica)
            throw new Error("Ja existe um produto com este ID");

        await writeCSV(filePath, [data]);

    }

    async remover(id: number){

        const produtos =  await readCSV(filePath);
        const produtoIndex = produtos.findIndex((produto) => produto.id == id);

        if(produtoIndex == -1)
            throw new Error("Não foi encontrdo produto com est ID");

        produtos.splice(produtoIndex, 1);

        await writeCSV(filePath, produtos);

    }

    async listar(){
        return await readCSV(filePath);
    }

    async calcularValor(){
        const data = await this.listar();

        let total = 0;

        for(const item of data){
            total += (item.value * item.qtd);
        }

        return total;
    }

    async calcularPeso(){
        const data = await this.listar();

        let pTotal = 0;

        for(const item of data){
            pTotal = (item.peso * item.qtd);
        }

        return pTotal;
    }   
    
    async calcularMediaValor(){
        const data = await this.listar();

        const total = await this.calcularValor();

        return (total/data.length);
    }

    async calcularMediaPeso(){
        const data = await this.listar();

        const total = await this.calcularPeso();

        return (total/data.length);
    }

    async verQtdTotal(){
        const data = await this.listar();
        return data.length;
    }

    async verQtdTotalItens(){
        const data = await this.listar();
        let total = 0;
        for(const item of data){
            total += item.qtd;
        }
        return total;
    }
}


export default new estoqueService();
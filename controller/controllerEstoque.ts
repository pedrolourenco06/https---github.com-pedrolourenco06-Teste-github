import serviceEstoque from "../service/serviceEstoque";
import { Data } from "../model/data.interface";

export async function adicionarProduto(data: Data){
    try{
        await serviceEstoque.criar(data);
        console.log("Produto adicionado com sucesso!");
    }
    catch(error){
        console.log("Erro ao adicionar produto", error);
    }
}

export async function removerProduto(id: number){
    try{
        await serviceEstoque.remover(id);
        console.log("Produto removido com sucesso");
    }
    catch(error){
        console.log("Erro ao remover produto", error);
    }
}

export async function listarItens(){
    try{
        const itens = await serviceEstoque.listar();
        console.log("Itens no estoque:", itens);
    } catch(error){
        console.log("Erro ao listar itens:", error);
    }
}

export async function calcularValorTotal(){
    try{
        const valorTotal = await serviceEstoque.calcularValor();
        console.log("Valor total do estoque:", valorTotal);
    } catch(error){
        console.log("Erro ao calcular valor total:", error);
    }
}

export async function calcularMediaDeValor(){
    try{
        const mediaValor = await serviceEstoque.calcularMediaValor();
        console.log("Média de valor dos itens no estoque:", mediaValor);
    } catch(error){
        console.log("Erro ao calcular média de valor:", error);
    }
}

export async function calcularQuantidadeTotal(){
    try{
        const quantidadeTotal = await serviceEstoque.verQtdTotal();
        console.log("Quantidade total de produtos no estoque:", quantidadeTotal);
    } catch(error){
        console.log("Erro ao calcular quantidade total de produtos:", error);
    }
}

export async function calcularPesoTotal(){
    try{
        const pesoTotal = await serviceEstoque.calcularPeso();
        console.log("Peso total do estoque:", pesoTotal);
    } catch(error){
        console.log("Erro ao calcular peso total", error);
    }

}

export async function calcularMediadePeso(){
    try{
        const mediaPeso = await serviceEstoque.calcularMediaPeso();
        console.log("Media do peso:" ,mediaPeso);
    }   catch(error){
        console.log("Erro ao calcular a media do peso", error);
    }
}

export async function calcularQuantidadeTotalItens(){
    try{
        const quantidadeTotalItens = await serviceEstoque.verQtdTotalItens();
        console.log("Quantidade total de itens no estoque:", quantidadeTotalItens);
    } catch(error){
        console.log("Erro ao calcular quantidade total de itens:", error);
    }
}
import { adicionarProduto, listarItens,removerProduto, calcularValorTotal, calcularMediaDeValor, calcularQuantidadeTotal, calcularPesoTotal, calcularMediadePeso, calcularQuantidadeTotalItens } from "./controller/controllerEstoque";
import { Data } from "./model/data.interface";
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log("Escolha uma opção:");
    console.log("1. Adicionar Produto");
    console.log("2. Listar Itens");
    console.log("3. Calcular Valor Total");
    console.log("4. Calcular Média de Valor");
    console.log("5. Calcular Quantidade Total de Produtos");
    console.log("6. Calcular Peso Total");
    console.log("7. Calcular Média de Peso");
    console.log("8. Calcular Quantidade Total de Itens");
    console.log("9. Remover Produto");
    console.log("0. Sair");
}

async function main() {
    while (true) {
        menu();

        const option = await askQuestion("Opção: ");

        switch (option) {
            case '1':
                const data: Data = {
                    id: 0,
                    title: "",
                    value: 0,
                    qtd: 0,
                    peso: 0
                };

                data.id = parseInt(await askQuestion("ID do produto: "));
                data.title = await askQuestion("Título do produto: ");
                data.value = parseFloat(await askQuestion("Valor do produto: "));
                data.qtd = parseInt(await askQuestion("Quantidade do produto: "));
                data.peso = parseFloat(await askQuestion("Peso do produto: "));

                await adicionarProduto(data);                
                break;
            case '2':
                await listarItens();
                break;
            case '3':
                await calcularValorTotal();
                break;
            case '4':
                await calcularMediaDeValor();
                break;
            case '5':
                await calcularQuantidadeTotal();
                break;
            case '6':
                await calcularPesoTotal();
                break;
            case '7':
                await calcularMediadePeso();
                break;
            case '8':
                await calcularQuantidadeTotalItens();
                break;
            case '9':
                const id = parseInt(await askQuestion("ID do produto: "));
                await removerProduto(id);
                break;
            case '0':
                rl.close();
                return;
            default:
                console.log("Opção inválida!");
        }
    }
}

function askQuestion(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

main();


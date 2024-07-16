// Atividade 09 - Funções

import {doces} from './Ativ09_4_BD.js';
import ler from 'readline-sync';
import cor from 'chalk';

export const listarDoces = () => {
    console.log(cor.blue("**************************************** DOCES CADASTRADOS ****************************************"));
    doces.forEach(doce => console.log(cor.cyan(
        `~ ID: ${doce.id} ~~~~~
         ~ Nome: ${doce.nome} 
         ~ Quantidade: ${doce.quantidade} 
         ~ Preço: R$ ${doce.preco}
         ~ Categoria: ${doce.categoria}
         ~ Descrição: ${doce.descricao}
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
    )));
    console.log(cor.blue("***************************************************************************************************"));
    ler.question(cor.yellow("..... Pressione ENTER para voltar ao MENU "));
    console.clear();
};

export const cadDoce = () => {
    let x = doces.length;
    let id = x + 1;
    let nome = ler.question("~ Informe o Nome: ");
    let quantidade = ler.questionInt("~ Informe a Quantidade: ");
    let preco = ler.questionFloat("~ Digite o Valor: R$ ");
    let categoria = ler.question("~ Digite a Categoria: ");
    let descricao = ler.question("~ Digite a Descricao: ");

    doces.push({id: id, nome: nome, quantidade: quantidade, preco: preco, categoria: categoria, descricao: descricao});
    console.log(cor.greenBright("---------------------------------"));
    console.log(cor.greenBright("--- Cadastrado com Sucesso!!! ---"));
    console.log(cor.greenBright("---------------------------------"));
    ler.question(cor.yellow("..... Pressione ENTER para voltar ao MENU "));
    console.clear();
};

export const atualizarDoce = () => {

    console.table(doces);

    let check = true;
    while (check) {
        let id = ler.questionInt("- Informe a ID: ");
        let doce = doces.find(doc => doc.id === id);
        if (doce) {
            console.log((
                `~ ID: ${doce.id} ~~~~~
                 ~ Nome: ${doce.nome} 
                 ~ Quantidade: ${doce.quantidade} 
                 ~ Preço: R$ ${doce.preco}
                 ~ Categoria: ${doce.categoria}
                 ~ Descrição: ${doce.descricao}
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
            ));
            let opt = ler.questionInt(cor.yellow("~ Deseja ALTERAR este produto? \n- 1. SIM \n- 2. NAO \n=> "));
            if (opt === 1) {
                console.clear();
                
                let doce = doces.find(doc => doc.id === id);
                let attnome = ler.question(cor.green(`~ Atualize o Nome: ${doce.nome}: `));
                let attqtd = ler.questionInt(cor.green(`~ Atualize a Quantidade: ${doce.quantidade}: `));
                let attpreco = ler.questionFloat(cor.green(`~ Atualize o Preco: R$ ${doce.preco}: R$ `));
                let attcateg = ler.question(cor.green(`~ Atualize a Categoria: ${doce.categoria}: `));
                let attdesc = ler.question(cor.green(`~ Atualize a Descricao: ${doce.descricao}: `));

                doce.nome = attnome;
                doce.quantidade = attqtd;
                doce.preco = attpreco;
                doce.categoria = attcateg;
                doce.descricao = attdesc;

                console.log(cor.greenBright("--- Alteração Concluida!!! ---"));
                console.log((
                    `~ ID: ${doce.id} ~~~~~
                     ~ Nome: ${doce.nome} 
                     ~ Quantidade: ${doce.quantidade} 
                     ~ Preço: R$ ${doce.preco}
                     ~ Categoria: ${doce.categoria}
                     ~ Descrição: ${doce.descricao}
                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
                ));
                ler.question(cor.yellow("..... Pressione ENTER para voltar ao MENU "));
                console.clear();

                check = false;
            } else {
                check = false;
                console.clear();
            }
        } else {
            console.log(cor.redBright("--- Produto não encontrado!!! ---"));
        }
    }
};

export const listarDoceporId = () => {

    let check = true;
    while (check) {
        let id = ler.questionInt(cor.yellow("- Informe a ID: "));
        let doce = doces.find(doc => doc.id === id);
        if (doce) {
            console.log((
                `~ ID: ${doce.id} ~~~~~
                 ~ Nome: ${doce.nome} 
                 ~ Quantidade: ${doce.quantidade} 
                 ~ Preço: R$ ${doce.preco}
                 ~ Categoria: ${doce.categoria}
                 ~ Descrição: ${doce.descricao}
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
            ));
            let opt = ler.questionInt(cor.yellow("~ Deseja buscar outro Produto? \n- 1. SIM \n- 2. NAO \n=> "));
            if (opt === 1) {
                console.clear();
            } else {
                check = false;
                console.clear();
            }
        } else {
            console.clear();
            console.log(cor.redBright("--- Não Encontrado!!! ---"));
        }
    }
};

export const listarDoceporNome = () => {

    let check = true;
    while (check) {
        let nome = ler.question(cor.yellow("- Informe o Nome: "));
        let doce = doces.find(doc => doc.nome === nome);
        if (doce) {
            console.log(cor.yellow(
                `~ ID: ${doce.id} ~~~~~
                 ~ Nome: ${doce.nome} 
                 ~ Quantidade: ${doce.quantidade} 
                 ~ Preço: R$ ${doce.preco}
                 ~ Categoria: ${doce.categoria}
                 ~ Descrição: ${doce.descricao}
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
            ));
            let opt = ler.questionInt(cor.yellow("~ Deseja buscar outro Produto? \n- 1. SIM \n- 2. NAO \n=> "));
            if (opt === 1) {
                console.clear();
            } else {
                check = false;
                console.clear();
            }
        } else {
            console.clear();
            console.log(cor.redBright("--- Não Encontrado!!! ---"));
        }
    }
};

export const controleCaixa = () => {
    console.clear();
    console.log(cor.blue("======================================================"));
    console.log(cor.cyan("~ CONTROLE DE CAIXA: "));
    doces.forEach(doce => {
        console.log(cor.blue("======================================================"));
        console.log(cor.cyan(`~ Produto: ${doce.nome} \n~ Valor Total: R$ ${doce.quantidade * doce.preco}`));
        console.log(cor.blue("======================================================"));
    });
};

export const excluirDoce = () => {

    console.table(doces);

    let check = true;
    while (check) {
        let id = ler.questionInt("- Informe a ID: ");
        let doce = doces.find(doc => doc.id === id);
        let doce_delete = doces.findIndex(doc => doc.id === id);
        if (doce) {
            console.log((
                `~ ID: ${doce.id} ~~~~~
                 ~ Nome: ${doce.nome} 
                 ~ Quantidade: ${doce.quantidade} 
                 ~ Preço: R$ ${doce.preco}
                 ~ Categoria: ${doce.categoria}
                 ~ Descrição: ${doce.descricao}
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
            ));
            let opt = ler.questionInt("~ Tem certeza que deseja EXCLUIR este Produto? \n- 1. SIM \n- 2. NAO \n=> ");
            if (opt === 1) {
                doces.splice(doce_delete, 1);
                console.log(cor.redBright("--- Excluído!!! ---"));
                ler.question(cor.yellow("..... Pressione ENTER para voltar ao MENU "));
                check = false;
            } else {
                check = false;
                console.clear();
            }
        } else {
            console.clear();
            console.log(cor.redBright("--- Não Encontrado!!! ---"));
        }
    }
};
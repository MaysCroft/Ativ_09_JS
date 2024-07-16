// Atividade 09 - Main

import ler from 'readline-sync';
import cor from 'chalk';

import {listarDoces, cadDoce, atualizarDoce, listarDoceporId, listarDoceporNome, controleCaixa, excluirDoce} from './Ativ09_5_System.js';

let check = true;

export function entrasistema() {

    while (check) {

        console.log(cor.magenta("***************** LE BRIOCHE PÂTISSERIE *****************"));
        console.log(cor.cyan   ("**************** BANCO DE DADOS INTERNO *****************"));
        console.log(cor.blue   ("~ 1. Listar Produtos ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
        console.log(cor.blue   ("~ 2. Cadastrar Produto ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
        console.log(cor.blue   ("~ 3. Atualizar Produto ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
        console.log(cor.blue   ("~ 4. Busca por ID ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
        console.log(cor.blue   ("~ 5. Busca por Nome ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
        console.log(cor.blue   ("~ 6. Controle de Caixa ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
        console.log(cor.blue   ("~ 7. Excluir Produto ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
        console.log(cor.blue   ("~ 8. Sair do Sistema ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
        console.log(cor.cyan   ("*********************************************************"));
        console.log(cor.magenta("*********************************************************"));
        let opt = ler.questionInt(cor.yellowBright("=> "));
    
        switch (opt) {
            case 1:
                console.clear();
                listarDoces();
                break;
        
            case 2:
                console.clear();
                cadDoce();
                break;
        
            case 3:
                console.clear();
                atualizarDoce();
                break;
        
            case 4:
                console.clear();
                listarDoceporId();
                break;
        
            case 5:
                console.clear();
                listarDoceporNome();
                break;
        
            case 6:
                console.clear();
                controleCaixa();
                break;
    
            case 7:
                console.clear();
                excluirDoce();
                break;
    
            case 8:
                check = false;
                break;
        
            default:
                console.log(cor.red("--- Opção Inválida! ---"));
                break;
        }
    }

    console.clear();
    console.log(cor.blueBright   ("*********************************************************************************************"));
    console.log(cor.magentaBright("~~~ Sistema Finalizado, que sua jornada seje doce como um cupcake delicadamente decorado. ~~~"));
    console.log(cor.yellowBright ("*********************************************************************************************"));
}
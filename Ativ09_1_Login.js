// Login do Sistema

import ler from 'readline-sync';
import cor from 'chalk';

import {usuarios} from './Ativ09_2_Base.js';
import {entrasistema} from './Ativ09_3_Main.js';

function login() {

    console.log(cor.magenta("***** ACESSO LE BRIOCHE PÂTISSERIE *****"));
    let entranome = ler.question(cor.cyan('~ Digite seu Usuario: ')).toLowerCase();
    let entrasenha = ler.questionInt(cor.cyan('~ Digite sua Senha: '), {hideEchoBack: true});
    console.log(cor.magenta("****************************************"));

    let usuario = usuarios.find(usuario => usuario.nomeuser === entranome && usuario.senhauser === entrasenha);

    if (usuario) {
        console.log(cor.green(`~ Seja bem Vindo Usuario ~ ${entranome.toUpperCase()} ~`));
        entrasistema();
    } else {
        console.log(cor.red('~ Acesso Negado, tente novamente!'));
    }
};

login();
let pessoas = [];

const cadastrarPessoa = () => {
  const nome = prompt("Informe o nome da pessoa:");
  const idade = parseInt(prompt("Informe a idade da pessoa:"));
  const trabalhando = prompt("A pessoa está trabalhando? (s/n)").toLowerCase();

  if (trabalhando === "s") {
    const salario = parseFloat(prompt("Informe o salário da pessoa:"));
    pessoas.push({ nome, idade, trabalhando: true, salario });
  } else {
    pessoas.push({ nome, idade, trabalhando: false, salario: null });
  }

  const continuar = prompt("Deseja continuar cadastrando? (s/n)").toLowerCase();
  if (continuar === "s") {
    cadastrarPessoa();
  } else {
    mostrarResultados();
  }
};

const mostrarResultados = () => {
  console.log("Pessoas desempregadas:");
  pessoas
    .filter((pessoa) => !pessoa.trabalhando)
    .forEach((pessoa) => {
      console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
    });

  console.log("\nPessoas empregadas com salários menores que 2500:");
  pessoas
    .filter((pessoa) => pessoa.trabalhando && pessoa.salario < 2500)
    .forEach((pessoa) => {
      console.log(
        `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`
      );
    });

  console.log("\nPessoas empregadas com salários maiores que 2500:");
  pessoas
    .filter((pessoa) => pessoa.trabalhando && pessoa.salario >= 2500)
    .forEach((pessoa) => {
      console.log(
        `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`
      );
    });
};

cadastrarPessoa();
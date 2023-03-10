const alunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Ana', nota: 6 },
    { nome: 'José', nota: 4 },
    { nome: 'Julia', nota: 9 },
    { nome: 'Marcos', nota: 5.5 }
]

const filtrarAlunos = alunos.filter(aluno => aluno.nota >= 6)

console.log(filtrarAlunos)

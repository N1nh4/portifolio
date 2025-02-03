interface Tecnologia {
    nome: string;
    cor: string;
}

export const tecnologias: { [id: number]: Tecnologia } = {
    1: { nome: 'HTML', cor: '#F16529' },
    2: { nome: 'CSS', cor: '#2965F1' },
    3: { nome: 'JS', cor: '#F7DF1E' },
    4: { nome: 'React', cor: '#61DAFB' },
    5: { nome: 'Next', cor: '#000000' },
    6: { nome: 'Tailwind', cor: '#38B2AC' },
    7: { nome: 'TS', cor: '#3178C6' },
    8: { nome: 'Python', cor: '#3776AB' },
    9: { nome: 'C', cor: '#659AD2' },
    10: { nome: 'Java', cor: '#007396' },
    11: { nome: 'Flask', cor: '#000000' },
};

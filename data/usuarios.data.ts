export interface DadosUsuario {
  descricao: string;
  usuario: string;
  senha: string;
  sucesso: boolean;
  mensagemEsperada: string;
}
export const listaUsuarios: DadosUsuario[] = [
  {
    descricao: 'Login com usuário válido',
    usuario: 'standard_user',
    senha: 'secret_sauce',
    sucesso: true,
    mensagemEsperada: 'Products',
  },
  {
    descricao: 'Login com senha incorreta',
    usuario: 'standard_user',
    senha: 'senha_errada',
    sucesso: false,
    mensagemEsperada: 'Username and password do not match',
  },
  {
    descricao: 'Login com usuário bloqueado',
    usuario: 'locked_out_user',
    senha: 'secret_sauce',
    sucesso: false,
    mensagemEsperada: 'Sorry, this user has been locked out',
  },
];
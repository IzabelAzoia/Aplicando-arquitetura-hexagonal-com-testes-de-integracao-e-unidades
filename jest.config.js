module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.test.ts'], // Padrão para os arquivos de teste
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  rootDir: './', // Diretório raiz do projeto
};
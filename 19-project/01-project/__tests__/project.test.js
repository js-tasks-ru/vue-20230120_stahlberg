const { REPOSITORY_URL } = require(global.getSolutionPath('./main'));

describe('project/project', () => {
  describe('project', () => {
    it('Ссылка на проект должна экспортироваться под именем REPOSITORY_URL из main.js', () => {
      expect(REPOSITORY_URL).toBeTruthy();
    });
  });
});

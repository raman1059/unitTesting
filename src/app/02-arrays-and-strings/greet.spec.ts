import { greet } from './greet';



describe('greet', () => {
  it('should include the name in the output', () => {
      expect(greet('Raman')).toContain('Welcome Raman');
  });
});


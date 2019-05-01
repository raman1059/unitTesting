import { getCurrencies } from './getCurrencies';


describe('getCurrencies', () => {
  it('should be return supported currencies', () => {
      const result = getCurrencies();
      expect(result).toContain('USD');
      expect(result).toContain('AUD');
      expect(result).toContain('EUR');
  });
});

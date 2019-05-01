import { compute } from './compute';

describe('compute', () => {     // suite
    it('should return 0 if input is negative', () => {     // spec
     const result = compute(-1);
     expect(result).toBe(0);
    });

    it('should return 1 if input is positive', () => {     // spec
        const result = compute(1);
        expect(result).toBe(2);
       });
});


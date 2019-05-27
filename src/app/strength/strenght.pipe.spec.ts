import { StrengthPipe } from './strength.pipe';
describe('StrenghtPipe', () => {

    it('should display weak if strenght is 5', () => {

        let pipe = new StrengthPipe();

        expect(pipe.transform(5)).toEqual('5 (weak)');
    })
    it('should display strong if strenght is 10', ()=>{
        let pipe = new StrengthPipe();

        expect(pipe.transform(10)).toEqual('10 (strong)');
    })
    it('should display unbelievable if strenght is 20', ()=>{
        let pipe = new StrengthPipe();

        expect(pipe.transform(20)).toEqual('20 (unbelievable)');
    })
})
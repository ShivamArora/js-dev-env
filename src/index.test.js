import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should say hello', (done) => {
        const { JSDOM } = jsdom;
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        const { window } = new JSDOM(index);
        const h1 = window.document.querySelector('h1');
        expect(h1.innerHTML).to.equal('Hello World');
        done();
        window.close();
    });
});

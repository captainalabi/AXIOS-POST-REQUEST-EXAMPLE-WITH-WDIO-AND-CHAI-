import axios from "axios";
import { expect } from 'chai';

describe('Axios post Demo', () => {
    it('Send data to dummy API', async() => {
        
        
            // POST request using axios with async/await
            
            const article = { title: 'Axios POST Request Example' };
            const response = await axios.post('https://reqres.in/api/articles',
             article);
         
             //console.log("id :::::::::: " + await response.data.id)
            
             browser.pause(50000)

           await expect( response.data.id > 0).to.be.true;
           
        
    });
});
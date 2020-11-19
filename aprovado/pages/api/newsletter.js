import axios from 'axios';

function getRequestParams(email){
    const API_KEY = 'e16d0a5cd745c953ed0571d07fe61579-us2'
    const LIST_ID = 'cd08e019ee'
    const DATACENTER = 'us2'
    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`
    const data = {email_address : email, status: 'subscribed'}
    const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString('base64')
    const headers = {'Content-Type':'application/json', 'Authorization': `Basic ${base64ApiKey}`}
    
    return {
    url, data, headers
}}

export default async(req, res) => {
    const {email} = req.body;


try{
     
    const {url, data, headers} = getRequestParams(email);

    const response = await axios.post(url, data, {headers});

    return res.status(201).json({error : null})
}
    catch(error){
        console.log(error)
        return res.status(400).json({error:'oops'})

    }}
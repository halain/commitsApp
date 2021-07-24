const {request, response} = require('express');
const axios = require('axios');



//get github commits
const getCommits = async (req = request, res = response) => {
    
    const { userGithub, repository } = req.body;
    

    try {
        //request to github API

        const instance = axios.create({
            baseURL: `https://api.github.com/repos/${userGithub}/${repository}/commits`,
            headers: {'Accept': 'application/vnd.github.v3+json'}
        });
        
        const resp = await instance.get();

        const data = resp.data.map( data =>({
            author:     data.commit.author.name,
            email:      data.commit.author.email,
            date:       data.commit.author.date,
            message:    data.commit.message,
            html_url:   data.commit.html_url,
            avatar_url: data.author.avatar_url
        }) );

        res.json({
            ok: true,
            data
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Http request error'            
        });
        
    }         

};


module.exports = {
    getCommits
}
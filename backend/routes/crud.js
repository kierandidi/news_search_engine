//
//
//  IMPORT MODULES
//

const express = require('express');

//setting up router object
const CRUDRouter = express.Router();

//
//
//  CRUD ROUTES
//


CRUDRouter.get('/', async (req, res) => {
    const articles = await Article.find({});
    res.render('articles/index', {articles});
});

CRUDRouter.get('/new', (req, res) => {
    res.render('articles/new');
});

CRUDRouter.post('/', async (req, res) => {
    const article = new Article(req.body.article);
    await article.save();
    res.redirect(`/${article._id}`);
})

CRUDRouter.get('/:id', async (req, res) => {
    const article = await Article.findById(req.params.id);
    res.render('articles/show', { article });
});

CRUDRouter.get('/:id/edit', async (req, res) => {
    const article = await Article.findById(req.params.id);
    res.render('articles/edit', { article });
})

CRUDRouter.put('/:id', async (req, res) => {
    const { id } = req.params;
    const article = await Article.findByIdAndUpdate(id, {...req.body.article});
    res.redirect(`articles/${article._id}`);
});

CRUDRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Article.findByIdAndDelete(id);
    res.redirect('/');
});

//only test route to see if we can connect express to mongodb
// CRUDRouter.get('/makearticle', async (req, res) => {
//     const article = new Article({headline: "Temperatures rising", topic: 'Climate Change'})
//     await article.save();
//     res.send(article)
// });

//
//
//  FINAL
//

//export module to be imported in backend/app.js

module.exports=CRUDRouter;
const express = require('express');

const app = express();
const PORT = 3000;

// Permite que a API receba dados em JSON
app.use(express.json());

// Rota inicial da API
app.get('/', (req, res) => {
    res.json({
        mensagem: 'API JJEV Vendas Online funcionando!'
    });
});
// Lista de produtos da JJEV
const produtos = [
    { id: 1, nome: 'Smartphone', categoria: 'Tecnologia', preco: 1500 },
    { id: 2, nome: 'Sofá', categoria: 'Casa', preco: 1200 },
    { id: 3, nome: 'Tênis', categoria: 'Moda e Esportes', preco: 250 }
];

// Rota para listar todos os produtos
app.get('/api/produtos', (req, res) => {
    res.json(produtos);
});
// Rota para buscar um produto pelo ID
app.get('/api/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado'
        });
    }

    res.json(produto);
});
// Rota para cadastrar um novo produto
app.post('/api/produtos', (req, res) => {
    const { nome, categoria, preco } = req.body;

    if (!nome || !categoria || preco === undefined) {
        return res.status(400).json({
            mensagem: 'Nome, categoria e preço são obrigatórios'
        });
    }

    const novoProduto = {
        id: produtos.length + 1,
        nome,
        categoria,
        preco
    };

    produtos.push(novoProduto);

    res.status(201).json(novoProduto);
});
// Rota para atualizar um produto
app.put('/api/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado'
        });
    }

    const { nome, categoria, preco } = req.body;

    if (!nome || !categoria || preco === undefined) {
        return res.status(400).json({
            mensagem: 'Nome, categoria e preço são obrigatórios'
        });
    }

    produto.nome = nome;
    produto.categoria = categoria;
    produto.preco = preco;

    res.json(produto);
});
// Rota para excluir um produto
app.delete('/api/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const indice = produtos.findIndex(p => p.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado'
        });
    }

    const produtoExcluido = produtos.splice(indice, 1);

    res.json({
        mensagem: 'Produto excluído com sucesso',
        produto: produtoExcluido[0]
    });
});
// Lista de categorias
const categorias = [
    { id: 1, nome: 'Tecnologia' },
    { id: 2, nome: 'Casa' },
    { id: 3, nome: 'Moda e Esportes' }
];

// Rota para listar todas as categorias
app.get('/api/categorias', (req, res) => {
    res.json(categorias);
});
// Rota para buscar uma categoria pelo ID
app.get('/api/categorias/:id', (req, res) => {
    const id = Number(req.params.id);
    const categoria = categorias.find(c => c.id === id);

    if (!categoria) {
        return res.status(404).json({
            mensagem: 'Categoria não encontrada'
        });
    }

    res.json(categoria);
});
// Rota para cadastrar uma nova categoria
app.post('/api/categorias', (req, res) => {
    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json({
            mensagem: 'Nome da categoria é obrigatório'
        });
    }

    const novaCategoria = {
        id: categorias.length + 1,
        nome
    };

    categorias.push(novaCategoria);

    res.status(201).json(novaCategoria);
});
// Rota para atualizar uma categoria
app.put('/api/categorias/:id', (req, res) => {
    const id = Number(req.params.id);
    const categoria = categorias.find(c => c.id === id);

    if (!categoria) {
        return res.status(404).json({
            mensagem: 'Categoria não encontrada'
        });
    }

    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json({
            mensagem: 'Nome da categoria é obrigatório'
        });
    }

    categoria.nome = nome;

    res.json(categoria);
});
// Rota para excluir uma categoria
app.delete('/api/categorias/:id', (req, res) => {
    const id = Number(req.params.id);
    const indice = categorias.findIndex(c => c.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: 'Categoria não encontrada'
        });
    }

    const categoriaExcluida = categorias.splice(indice, 1);

    res.json({
        mensagem: 'Categoria excluída com sucesso',
        categoria: categoriaExcluida[0]
    });
});
// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor JJEV rodando em http://localhost:${PORT}`);
});
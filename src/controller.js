const root = (req, res) => {
    res.end('Hello Node Server, how are you!');
}

const text = (req, res) => {
    const param = req.params.param || 'Text';
    res.end(`Hello ${param} Server!`);
}

const html = (req, res) => {
    const param = req.params.param || 'Html';
    res.end(`<h1>Hello ${param} Server!</h1>`);
}

export default { root, text, html }

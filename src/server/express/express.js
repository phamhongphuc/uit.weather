import path from 'path';

export default function(app) {
    app.get('/', (req, res) => {
        res.sendFile(
            path.resolve(__dirname, '../../../dist/client/index.html')
        );
    });
    app.get('*', (req, res) => {
        res.status(404).send('Not Found');
    });
}
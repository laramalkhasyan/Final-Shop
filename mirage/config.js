export default function() {
    this.namespace = '/api';

    this.get('/shops');
    this.get('/shops/:id');
    this.delete('/shops/:id');
    this.post('shops');
    this.post('products');
    this.delete('/products/:id');
    this.patch('/shops/:id');
}
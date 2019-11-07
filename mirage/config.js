export default function() {
    this.namespace = '/api';

    this.get('/shops');
    this.get('/shops/:id');

}

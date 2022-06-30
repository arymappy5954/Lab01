const app = Vue.createApp({
    data(){
        return {
            product: 'Shoes',
            image: './assets/images/socks_green.jpg',
            inStock: true,
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                { id: 2234, color: 'blue', image: './assets/images/socks_blue.jpg'}
            ],

            sizes: ['S','M','L'],
            onSale: true,
            description: 'Leather',
            link: 'https://www.camt.cmu.ac.th/',

            cart: 0
        } 
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    }
})
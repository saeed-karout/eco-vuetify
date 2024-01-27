<template>
    <v-container>
        <v-row>
            <v-col v-for="product in items " :key="product.id" cols="12" sm="12" md="6"
                lg="4" xl="3"  >
                <productItem :product="product"></productItem>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import productItem from '@/components/productItem.vue'
    export default {
        components: {
            productItem
        },
        created() {
            fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(products => this.products = products.products)
        },

        data() {
            return {
                products: []
            }
        },
        props: {
            all: {
                type: Boolean
            }
        },
        computed: {
            items() {
                if (this.all) {

                    return this.products
                }
                return this.products.filter(a => a.id < 9)
            }
        },

        }
</script>

import { defineStore } from 'pinia';

export const useFavoriteStore = defineStore('favorite', {
  state: () => ({
    favoriteProducts: [], // يمكنك استبدالها بنوع المنتج الخاص بك إذا كنت تستخدم TypeScript
  }),
  actions: {
    addToFavorite(product) {
 // التحقق مما إذا كان المنتج موجود بالفعل في قائمة المفضلة
 const index = this.favoriteProducts.findIndex((p) => p.id === product.id);

 if (index !== -1) {
   // إذا كان المنتج موجود، قم بحذفه وقلب الحالة إلى "لم أحبه"
   this.favoriteProducts.splice(index, 1);
 } else {
   // إذا كان المنتج غير موجود، قم بإضافته
   this.favoriteProducts.push(product);
 }
        // this.favoriteProducts.push(product);

    },
    removeFromFavorite(productId) {
      this.favoriteProducts = this.favoriteProducts.filter(
        (product) => product.id !== productId
      );
    },
  },
  persist:true,
});

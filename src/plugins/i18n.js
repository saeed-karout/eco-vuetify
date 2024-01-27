import { createI18n } from 'vue-i18n'

const messages = {
  en: {

    nameEco: {
      name: 'Eco-karout',
      copyright:'Mhd Saeed Karout'
    },

    appbar:{
      Home:'Home',
      about:'About',
      products:'Products'
    },
    hero:{
      title:"all you want to by",
      subtitle:"karout",
      herobtn:"all products",

    },
    section:{
      section1:"Our product",
      section2:"Team Members",
      section3:"Testimonials",
      section4:"Contact us"
    },
    cart:{
      moreDeatels:"More Deatels"
    },
    title:{
      name:'e commerce karout',
    },
    about:{
      title:'About the store',
      subtitle:'Our store is a great place to find unique and cool products that meet your needs. We offer a wide range of products at competitive prices and high quality.',
      service1:'All kinds of products at the cheapest prices',
      service2:'Instant delivery service',
      service3:'Shipping to all countries',
      service4:'Electronic payment',
      tittle2:'Services that we provide'

    },
    favorite:{
      title:'my favorite'
    }

  },
  ar: {
    nameEco: {
      name: 'متجر قاروط الكتروني',
      copyright:'محمد سعيد قاروط'
    },

    appbar:{
      Home:'الرئيسية',
      about:'حول',
      products:'منتجات'

    },
    hero:{
      title:"كل ما تحتاجه من خلال",
      subtitle:"قاروط",
      herobtn:"جميع المنتجات"
    },
    section:{
      section1:"منتجاتنا",
      section2:"اعضاء الفريق",
      section3:"الشهادات - التوصيات",
      section4:"تواصل معنا"

    },
    cart:{
      moreDeatels:"عرض المزيد"
    }
    ,
    title:{
      name:'متجر قاروط الكتروني',
    },
    about:{
      title:'حول المتجر',
      subtitle:'متجرنا هو مكان رائع للعثور على المنتجات الفريدة والرائعة التي تلبي احتياجاتك. نحن نقدم مجموعة واسعة من المنتجات بأسعار تنافسية وجودة عالية',
      service1:'جميع أنواع المنتجات بأرخص الأسعار',
      service2:'خدمة التوصيل الفوري',
      service3:'شحن لجميع الدول',
      service4:'خدمة الدفع الكتروني',
      tittle2:'خدمات التي نقدمها'
    },
    favorite:{
      title:'المفضلة'
    }
  }
}

const i18n = createI18n({
  locale: 'ar', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})


export default i18n

import { Car } from '../types/car';

export const carsData: Car[] = [
  {
    id: 'car-1',
    name: 'Toyota Camry 2026',
    brand: 'SAQR Luxury Fleet',
    category: 'السيدان',
    startingPrice: 179000,
    pricePerDay: 450,
    pricePerMonth: 12000,
    year: 2026,
    transmission: 'أوتوماتيك',
    fuelType: 'هجين',
    seats: 5,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1200&auto=format&fit=crop'
    ],
    features: ['نظام دفع هجين متطور HEV', 'شاشة بانورامية مزدوجة 12.3 بوصة', 'نظام أمان متطور TSS 3.0', 'مقاعد جلدية مهواة بذاكرة', 'إضاءة محيطية تفاعلية'],
    rating: 5.0,
    reviewsCount: 142,
    isFeatured: true,
    isNew: true,
    description: 'أيقونة السيدان الفاخرة بتصميم جريء وأداء هجين استثنائي يجمع بين الكفاءة والرفاهية المطلقة.'
  },
  {
    id: 'car-2',
    name: 'Lexus LX 600',
    brand: 'SAQR Luxury Fleet',
    category: 'السيارات متعددة الاستخدامات SUV',
    startingPrice: 199000,
    pricePerDay: 650,
    pricePerMonth: 18000,
    year: 2027,
    transmission: 'أوتوماتيك',
    fuelType: 'بنزين',
    seats: 7,
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1200&auto=format&fit=crop'
    ],
    features: ['محرك تيربو مزدوج 2.4 لتر', 'نظام تعليق متكيف متعدد التضاريس', 'كاميرات بانورامية 360 درجة', 'سقف زجاجي بانورامي واسع', 'نظام صوتي فاخر'],
    rating: 4.9,
    reviewsCount: 98,
    isFeatured: true,
    isNew: true,
    description: 'الجيل الجديد كلياً من برادو الأسطورية، جاهزة لغزو الصحراء والمدينة بفخامة وقوة لا مثيل لها.'
  },
  {
    id: 'car-3',
    name: 'Nissan Patrol V8',
    brand: 'SAQR Luxury Fleet',
    category: 'السيارات متعددة الاستخدامات SUV',
    startingPrice: 245000,
    pricePerDay: 850,
    pricePerMonth: 24000,
    year: 2024,
    transmission: 'أوتوماتيك',
    fuelType: 'بنزين',
    seats: 7,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop'
    ],
    features: ['محرك V6 توين تيربو جبار', 'نظام تعليق حركي E-KDSS', 'ثلاجة تبريد مركزية', 'شاشة عرض علوية HUD', 'بصمة تشغيل بنظام التعرف على السائق'],
    rating: 5.0,
    reviewsCount: 230,
    isFeatured: true,
    description: 'فخر الدفع الرباعي بلا منازع، ملك الطرق الوعرة والرحلات الطويلة في أرجاء المملكة.'
  },
  {
    id: 'car-4',
    name: 'Toyota Land Cruiser 2027',
    brand: 'SAQR Luxury Fleet',
    category: 'الهجينة HEV',
    startingPrice: 115000,
    pricePerDay: 300,
    pricePerMonth: 8500,
    year: 2024,
    transmission: 'أوتوماتيك',
    fuelType: 'هجين',
    seats: 5,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1200&auto=format&fit=crop'
    ],
    features: ['كفاءة استهلاك وقود فائقة 26 كم/لتر', 'شاشة عدادات رقمية 12.3 بوصة', 'شحن لاسلكي للهواتف الذكية', 'فتحة سقف كهربائية'],
    rating: 4.8,
    reviewsCount: 310,
    description: 'السيارة الأكثر طلباً واعتمادية، تجمع بين الاقتصاد المذهل في الوقود والرحابة العائلية.'
  },
  {
    id: 'car-5',
    name: 'Mercedes S-Class',
    brand: 'SAQR Luxury Fleet',
    category: 'العائلية والفخمة',
    startingPrice: 165000,
    pricePerDay: 420,
    pricePerMonth: 11000,
    year: 2024,
    transmission: 'أوتوماتيك',
    fuelType: 'بنزين',
    seats: 5,
    image: 'https://images.unsplash.com/photo-1618843479313-7fdeffaf294a?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618843479313-7fdeffaf294a?q=80&w=1200&auto=format&fit=crop'
    ],
    features: ['صالون داخلي فسيح بجلد ناعم', 'عزل صوتي استثنائي للمقصورة', 'نظام صوتي محيطي متطور', 'مقاعد كهربائية بوضعيات متعددة'],
    rating: 4.9,
    reviewsCount: 84,
    description: 'مستوى جديد من الرفاهية والهيبة على الطريق لرجال الأعمال والعوائل الباحثة عن التميز.'
  },
  {
    id: 'car-6',
    name: 'Porsche Cayenne GTS',
    brand: 'SAQR Luxury Fleet',
    category: 'الهجينة HEV',
    startingPrice: 135000,
    pricePerDay: 360,
    pricePerMonth: 9800,
    year: 2024,
    transmission: 'أوتوماتيك',
    fuelType: 'هجين',
    seats: 5,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop'
    ],
    features: ['نظام دفع رباعي ذكي AWD-i', 'مساحة تخزين خلفية واسعة جداً', 'كاميرا خلفية مع حساسات ركن', 'باب خلفي يفتح كهربائياً بالحركة'],
    rating: 4.7,
    reviewsCount: 165,
    description: 'السيارة الرياضية متعددة الاستخدامات الأكثر مبيعا، مثالية للمغامرات اليومية والعائلية.'
  },
  {
    id: 'car-7',
    name: 'BMW X7 M50i',
    brand: 'SAQR Luxury Fleet',
    category: 'العائلية والفخمة',
    startingPrice: 155000,
    pricePerDay: 400,
    pricePerMonth: 10500,
    year: 2024,
    transmission: 'أوتوماتيك',
    fuelType: 'بنزين',
    seats: 7,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop'
    ],
    features: ['هيكل صلب عالي التحمل', 'مقاعد بثلاث صفوف واسعة', 'تكييف مستقل للمقاعد الخلفية', 'قدرات عالية لقطر الأجسام الثقيلة'],
    rating: 4.8,
    reviewsCount: 120,
    description: 'الرفيق الأمثل للعائلات الكبيرة ورحلات البر والاستكشاف في مختلف مناطق المملكة.'
  },
  {
    id: 'car-8',
    name: 'Audi Q8 e-tron',
    brand: 'SAQR Luxury Fleet',
    category: 'السيارات متعددة الاستخدامات SUV',
    startingPrice: 185000,
    pricePerDay: 500,
    pricePerMonth: 13500,
    year: 2024,
    transmission: 'أوتوماتيك',
    fuelType: 'هجين',
    seats: 8,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop'
    ],
    features: ['تتسع لـ 8 ركاب براحة تامة', 'محرك هجين قوي واقتصادي', 'شاشة لمس 12.3 بوصة مع نظام ناافي', 'مخارج USB متعددة في كل الصفوف'],
    rating: 4.9,
    reviewsCount: 76,
    isNew: true,
    description: 'السيارة العائلية الكبرى الفاخرة التي توفر أقصى درجات الراحة والرحابة للرحلات الطويلة.'
  }
];

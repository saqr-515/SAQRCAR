import { ServiceItem } from '../types/car';

export const servicesData: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'حجز تجربة قيادة',
    description: 'اختبر أداء وفخامة سيارات صقر بنفسك. احجز موعد تجربة قيادة مجانية في صالات العرض أو أمام منزلك.',
    iconName: 'Car',
    actionType: 'test-drive'
  },
  {
    id: 'srv-2',
    title: 'طلب عرض سعر وخيارات التمويل',
    description: 'احصل على عروض أسعار مخصصة وبرامج تمويلية ميسرة بالتعاون مع كبرى البنوك والجهات التمويلية.',
    iconName: 'CreditCard',
    actionType: 'quote'
  },
  {
    id: 'srv-3',
    title: 'ابحث عن صالة عرض وخدمة',
    description: 'تعرف على أقرب صالة عرض ومحطة صيانة معتمدة لـ SAQR للسيارات في مدينتك.',
    iconName: 'MapPin',
    actionType: 'showroom'
  },
  {
    id: 'srv-4',
    title: 'حجز موعد الصيانة السريعة',
    description: 'احجز موعد الصيانة الدورية أو الإصلاح السريع بكل سهولة مع فنيين معتمدين وقطع غيار أصلية 100%.',
    iconName: 'Wrench',
    actionType: 'maintenance'
  }
];

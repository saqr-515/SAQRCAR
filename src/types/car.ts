export type CarCategory = 'الكل' | 'السيدان' | 'السيارات متعددة الاستخدامات SUV' | 'الهجينة HEV' | 'العائلية والفخمة';

export interface Car {
  id: string;
  name: string;
  brand: string;
  category: CarCategory;
  startingPrice: number;
  pricePerDay?: number;
  pricePerMonth?: number;
  year: number;
  transmission: 'أوتوماتيك' | 'يدوي';
  fuelType: 'بنزين' | 'كهرباء' | 'هجين';
  seats: number;
  image: string;
  gallery: string[];
  features: string[];
  rating: number;
  reviewsCount: number;
  isFeatured?: boolean;
  isNew?: boolean;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  actionType: 'test-drive' | 'quote' | 'showroom' | 'maintenance' | 'financing';
}

export interface BookingFormData {
  carId: string;
  carName: string;
  fullName: string;
  phone: string;
  email: string;
  startDate: string;
  endDate: string;
  pickupLocation: string;
  notes?: string;
}

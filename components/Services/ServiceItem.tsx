import Image from "next/image";
// Next.js'in Image bileşenini kullanarak projeye dahil ediyoruz. Bu bileşen, görüntülerin daha optimize bir şekilde yüklenmesini ve responsive olmalarını sağlar.

import React from "react";
// React kütüphanesini projeye dahil ediyoruz. Bu kütüphane, bileşen tabanlı bir yapı kullanarak kullanıcı arayüzleri oluşturmayı sağlar.

interface ServiceItemProps {
  img: string;
  name: string;
  description: string;
  aosDelay: string;
  category?: string;
  price?: string;
}
// Bu kod, ServiceItem bileşenine gönderilecek olan props'ların türlerini tanımlayan bir TypeScript arayüzü (interface) oluşturur.

// Category styles helper function
const getCategoryStyles = (category: string): string => {
  switch (category) {
    case 'Classic':
      return 'bg-amber-100 text-amber-800';
    case 'Premium':
      return 'bg-purple-100 text-purple-800';
    case 'Cold':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const ServiceItem: React.FC<ServiceItemProps> = ({
  aosDelay,
  description,
  img,
  name,
  category,
  price,
}) => {
  // ServiceItem adında bir React fonksiyonel bileşeni oluşturuyoruz. Bu bileşen, ServiceItemProps arayüzünden türetilmiş props'ları alır.

  return (
    <li
      data-aos="fade-down"
      data-aos-once="false"
      data-aos-delay={aosDelay}
      className="rounded-xl bg-white group hover:bg-gradient-to-br hover:from-white hover:to-gray-50
    relative shadow-lg hover:shadow-xl w-full max-w-xs mx-auto transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
      aria-labelledby={`service-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Ana div. Bu div, hizmet öğesinin tüm içeriğini sarar ve TailwindCSS ile stillendirilmiştir. Yuvarlatılmış köşeler, gölgeler ve responsive özellikler eklenmiştir. */}

      <div className="h-24 flex items-center justify-center">
        <Image
          alt={`${name} coffee`}
          src={img}
          width={120}
          height={120}
          className="mx-auto transform group-hover:scale-105 transition duration-300"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>
      {/* Bu div, hizmetin görselini içerir. Görsel, merkezlenmiş ve hover durumunda büyütme efekti alacak şekilde ayarlanmıştır. */}

      <div className="p-3 text-center">
        <div className="w-full">
          {/* Category Badge */}
          {category && (
            <div className="mb-2">
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${getCategoryStyles(category)}`}>
                {category}
              </span>
            </div>
          )}

          <h2
            id={`service-${name.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-base font-bold font-poppins 
                text-gray-700 group-hover:text-gray-950 transition duration-300 mb-1"
          >
            {name}
          </h2>

          {/* Price */}
          {price && (
            <div className="mb-2">
              <span className="text-lg font-bold text-primary group-hover:text-secondary transition duration-300">
                {price}
              </span>
            </div>
          )}

          <p
            className="text-gray-500 group-hover:text-gray-900 text-xs leading-tight
                transition duration-300 line-clamp-3"
          >
            {description}
          </p>
        </div>
      </div>
    </li>
  );
};

export default ServiceItem;
// Bu bileşeni dışa aktararak, diğer dosyalarda kullanılabilir hale getiriyoruz.

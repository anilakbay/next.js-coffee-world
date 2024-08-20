import Image from "next/image";
// Next.js'in Image bileşenini kullanarak projeye dahil ediyoruz. Bu bileşen, görüntülerin daha optimize bir şekilde yüklenmesini ve responsive olmalarını sağlar.

import React from "react";
// React kütüphanesini projeye dahil ediyoruz. Bu kütüphane, bileşen tabanlı bir yapı kullanarak kullanıcı arayüzleri oluşturmayı sağlar.

interface ServiceItemProps {
  img: string; // Görselin URL'sini temsil eden bir string.
  name: string; // Hizmetin adını temsil eden bir string.
  description: string; // Hizmetin açıklamasını temsil eden bir string.
  aosDelay: string; // AOS (Animate on Scroll) animasyonunun gecikme süresini temsil eden bir string.
}
// Bu kod, ServiceItem bileşenine gönderilecek olan props'ların türlerini tanımlayan bir TypeScript arayüzü (interface) oluşturur.

const ServiceItem: React.FC<ServiceItemProps> = ({
  aosDelay,
  description,
  img,
  name,
}) => {
  // ServiceItem adında bir React fonksiyonel bileşeni oluşturuyoruz. Bu bileşen, ServiceItemProps arayüzünden türetilmiş props'ları alır.

  return (
    <div
      data-aos="fade-down" // AOS kütüphanesini kullanarak, bu bileşen scroll yapıldığında yukarıdan aşağıya doğru animasyonla görünür.
      data-aos-once="false" // Bu, animasyonun her scroll yapıldığında tekrar oynatılmasını sağlar.
      data-aos-delay={aosDelay} // Animasyonun başlaması için belirli bir gecikme süresi uygular, bu süre props olarak gelen "aosDelay" değerine bağlıdır.
      className="rounded-2xl bg-white group hover:bg-light 
    relative shadow-xl md:max-w-96 w-full"
    >
      {/* Ana div. Bu div, hizmet öğesinin tüm içeriğini sarar ve TailwindCSS ile stillendirilmiştir. Yuvarlatılmış köşeler, gölgeler ve responsive özellikler eklenmiştir. */}

      <div className="h-36">
        <Image
          alt="" // Görüntüye alternatif metin ekler. Burada boş bırakılmış.
          src={img} // Görüntünün kaynağını, props olarak gelen img değeri belirler.
          width={200} // Görüntünün genişliğini 200 piksel olarak ayarlar.
          height={200} // Görüntünün yüksekliğini 200 piksel olarak ayarlar.
          className="mx-auto
            transform -translate-y-14 group-hover:scale-110 transition
            duration-500"
        />
      </div>
      {/* Bu div, hizmetin görselini içerir. Görsel, merkezlenmiş ve hover durumunda büyütme efekti alacak şekilde ayarlanmıştır. */}

      <div className="p-4 text-center">
        <div className="w-full">
          <h1
            className="text-xl lg:text-2xl font-bold font-poppins 
                text-gray-700 group-hover:text-gray-950 transition duration-500"
          >
            {name}
          </h1>
          {/* Hizmetin adını gösteren başlık. Yazı tipi boyutu, rengi ve hover durumunda renk değişikliği gibi stil özellikleri tanımlanmıştır. */}

          <p
            className=" text-gray-500 group-hover:text-gray-900  
                transition duration-500"
          >
            {description}
          </p>
          {/* Hizmetin açıklamasını gösteren paragraf. Yazı rengi ve hover durumunda renk değişikliği gibi stil özellikleri tanımlanmıştır. */}
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
// Bu bileşeni dışa aktararak, diğer dosyalarda kullanılabilir hale getiriyoruz.

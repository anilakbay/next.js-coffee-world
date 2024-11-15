import React from "react";
// React kütüphanesini projeye dahil ediyoruz. Bu kütüphane, kullanıcı arayüzleri oluşturmak için bileşen tabanlı bir yapı sağlar.

import ServiceItem from "./ServiceItem";
// 'ServiceItem' bileşenini, aynı klasörde bulunan 'ServiceItem.js' dosyasından içe aktarıyoruz. Bu bileşeni, aşağıda hizmet öğelerini görüntülemek için kullanacağız.

const ServiceData = [
  {
    id: 1, // Bu, her hizmet öğesi için benzersiz bir kimlik (ID) sağlar.
    img: "/images/1.png", // Hizmetin görselinin dosya yolunu belirtiyor.
    name: "Espresso", // Hizmetin adını belirtiyor.
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
    // Hizmetin açıklamasını belirtiyor.
    aosDelay: "100", // AOS (Animate on Scroll) animasyonunun başlaması için gecikme süresini belirtiyor.
  },
  {
    id: 2,
    img: "/images/3.png",
    name: "Cappuccino",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
    aosDelay: "300",
  },
  {
    id: 3,
    img: "/images/4.png",
    name: "Americano",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
    aosDelay: "500",
  },
  {
    id: 4,
    img: "/images/5.png",
    name: "Latte",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
    aosDelay: "700",
  },
];
// 'ServiceData' adında bir dizi (array) oluşturuyoruz. Bu dizi, her biri bir hizmeti temsil eden nesneler içeriyor. Her nesne, hizmetin özelliklerini (id, img, name, description, aosDelay) tanımlar.

function Services() {
  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-sriracha font-bold">
            Best Coffee For you
          </h1>
          {/* Bu başlık, sayfanın en üstünde hizmetlerle ilgili bir başlık gösterir. Farklı ekran boyutlarına göre (mobil, tablet, masaüstü) başlık boyutunu ayarlayan TailwindCSS sınıfları kullanılmıştır. */}

          <div className="flex justify-center m-4">
            <div
              className="mb-6 h-1 w-full max-w-xl
                     bg-gradient-to-r opacity-50
                      from-primary to-secondary"
            ></div>
          </div>
          {/* Bu div, başlığın altında yer alan ve görsel bir ayrım sağlayan bir çizgiyi temsil eder. Bu çizgi, TailwindCSS kullanarak belirlenen stillerle bir gradyan rengine ve yarı saydamlığa sahip. */}
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-4 gap-14 place-items-center"
        >
          {ServiceData.map((service) => (
            <ServiceItem
              aosDelay={service.aosDelay}
              description={service.description}
              img={service.img}
              name={service.name}
              key={service.id}
            ></ServiceItem>
          ))}
          {/* Bu div, hizmet öğelerini grid (ızgara) yapısında yerleştirmek için kullanılır. 
              'ServiceData' dizisindeki her bir öğeyi 'map' metodu ile dolaşıyoruz. 
              Her öğe için 'ServiceItem' bileşenini oluşturuyoruz ve ona ilgili özellikleri (aosDelay, description, img, name) props olarak gönderiyoruz. 
              'key' özelliği ise her bir öğeye benzersiz bir kimlik (ID) atayarak React'in bu öğeleri izleyebilmesini sağlar. */}
        </div>
      </div>
    </div>
  );
}

export default Services;
// 'Services' bileşenini dışa aktararak, bu bileşeni diğer dosyalarda kullanabilir hale getiriyoruz.

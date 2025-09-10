import React from "react";
// React kütüphanesini projeye dahil ediyoruz. Bu kütüphane, kullanıcı arayüzleri oluşturmak için bileşen tabanlı bir yapı sağlar.

import ServiceItem from "./ServiceItem";
// 'ServiceItem' bileşenini, aynı klasörde bulunan 'ServiceItem.js' dosyasından içe aktarıyoruz. Bu bileşeni, aşağıda hizmet öğelerini görüntülemek için kullanacağız.

const ServiceData = [
  {
    id: 1,
    img: "/images/1.png",
    name: "Espresso",
    description:
      "The purest form of coffee, our signature espresso delivers a rich, bold flavor with a perfect crema. Made from premium Arabica beans, it's the foundation of all great coffee drinks.",
    aosDelay: "100",
    category: "Classic",
    price: "$3.50",
  },
  {
    id: 2,
    img: "/images/3.png",
    name: "Cappuccino",
    description:
      "A perfect balance of espresso, steamed milk, and foam. Our cappuccino offers a creamy texture with the bold coffee flavor you love, topped with beautiful latte art.",
    aosDelay: "200",
    category: "Classic",
    price: "$4.25",
  },
  {
    id: 3,
    img: "/images/4.png",
    name: "Americano",
    description:
      "Smooth and refreshing, our Americano combines rich espresso with hot water for a clean, full-bodied taste. Perfect for those who enjoy the pure essence of coffee.",
    aosDelay: "300",
    category: "Classic",
    price: "$3.75",
  },
  {
    id: 4,
    img: "/images/5.png",
    name: "Latte",
    description:
      "Creamy and indulgent, our latte features velvety steamed milk with a shot of espresso. Customize with flavored syrups for your perfect morning or afternoon treat.",
    aosDelay: "400",
    category: "Classic",
    price: "$4.50",
  },
  {
    id: 5,
    img: "/images/1.png",
    name: "Macchiato",
    description:
      "A bold espresso 'marked' with a dollop of steamed milk foam. This Italian classic offers the perfect balance between strong coffee and creamy sweetness.",
    aosDelay: "500",
    category: "Premium",
    price: "$4.00",
  },
  {
    id: 6,
    img: "/images/3.png",
    name: "Mocha",
    description:
      "Rich chocolate meets bold espresso in this decadent treat. Our mocha combines premium cocoa with steamed milk and espresso for the ultimate coffee indulgence.",
    aosDelay: "600",
    category: "Premium",
    price: "$5.25",
  },
  {
    id: 7,
    img: "/images/4.png",
    name: "Cold Brew",
    description:
      "Smooth, refreshing, and naturally sweet. Our cold brew is steeped for 12 hours to extract maximum flavor with minimal acidity. Perfect for hot summer days.",
    aosDelay: "700",
    category: "Cold",
    price: "$4.75",
  },
  {
    id: 8,
    img: "/images/5.png",
    name: "Frappé",
    description:
      "Blended to perfection with ice, milk, and our signature espresso. This refreshing drink is topped with whipped cream and your choice of flavored syrup.",
    aosDelay: "800",
    category: "Cold",
    price: "$5.50",
  },
];
// 'ServiceData' adında bir dizi (array) oluşturuyoruz. Bu dizi, her biri bir hizmeti temsil eden nesneler içeriyor. Her nesne, hizmetin özelliklerini (id, img, name, description, aosDelay) tanımlar.

function Services() {
  return (
    <section id="services" className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" aria-labelledby="services-heading">
      <div className="container">
        <div className="text-center mb-16">
          <h1 
            id="services-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-sriracha font-bold"
          >
            Our Premium Coffee Collection
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffee blends, each crafted to perfection for the ultimate coffee experience.
          </p>
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

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            gap-6 place-items-center list-none max-w-7xl mx-auto"
          aria-label="Coffee services"
        >
          {ServiceData.map((service) => (
            <ServiceItem
              aosDelay={service.aosDelay}
              description={service.description}
              img={service.img}
              name={service.name}
              category={service.category}
              price={service.price}
              key={service.id}
            ></ServiceItem>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Services;
// 'Services' bileşenini dışa aktararak, bu bileşeni diğer dosyalarda kullanabilir hale getiriyoruz.

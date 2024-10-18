import { EmblaCarousel } from "@/components/ui/carousel/EmblaCarousel";
import { Button, Link } from "@nextui-org/react";
import clsx from "clsx";
import NextImage from "@/components/ui/nextImage/NextImage";
import ProductUsesItem from "@/app/(home)/san-pham/_components/ProductUsesItem";
import Ingredient from "@/app/(home)/san-pham/_components/Ingredient";
import QnaAnswers from "@/app/(home)/san-pham/_components/QnaAnswers";
import TestimonialItem from "@/app/(home)/san-pham/_components/TestimonialItem";
import { getBySlug } from "@/app/(home)/san-pham/services";
import EmbedVideo from "@/components/ui/embed-video";

const ProductArticle = async ({ params }: any) => {
  const { productSlug } = params;
  const productArticle = await getBySlug(productSlug as string);

  const {
    product_id,
    consumption_age,
    main_video_link,
    shopee,
    lazada,
    sendo,
    facebook,
    uses_summary,
    product_useses,
    main_uses_image,
    user_manual,
    main_ingredient,
    vitamin_ingredient,
    mineral_ingredient,
    product_qnas,
    testimonials,
  } = productArticle ?? {};
  const { name: productName, image: productImage } = product_id ?? {};
  const shops = [
    { link: facebook, title: "Facebook" },
    { link: shopee, title: "Mua tại Shopee" },
    { link: lazada, title: "Mua tại Lazada" },
    { link: sendo, title: "Mua tại Sendo" },
  ];

  return (
    <section
      className={clsx(
        "container mx-auto flex max-w-[1000px] flex-col gap-7 px-3 text-primary"
      )}
    >
      {/* brand */}
      <div className="mt-10 grid grid-cols-2 items-center justify-center">
        <div className="flex justify-center">
          <div className="flex min-h-60 w-36 justify-center border py-6 transition-all duration-100 ease-in-out md:w-80 lg:w-[22rem]">
            <NextImage
              imageId={productImage?.toString()}
              alt="main-photo"
              className="block h-full w-auto select-none"
            />
          </div>
        </div>
        <div className="text-2xl md:text-2xl">{productName}</div>
      </div>

      {/* feature */}
      <div className="grid items-center justify-center gap-5 md:grid-cols-2 md:flex-row">
        <EmbedVideo src={main_video_link} platform="youtube" />

        <div className="comsumption-age ">
          <h2 className="text-center text-xl lg:text-2xl">{`Độ tuổi sử dụng sữa ${productName}`}</h2>
          <p className="text-justify text-sm ">{consumption_age}</p>
        </div>
      </div>

      {/* shop */}
      <div className="grid grid-cols-2 gap-1 md:grid-cols-4 md:gap-7">
        {shops.map((shop) => (
          <Button
            key={shop.link}
            as={Link}
            color="primary"
            className="bg-primary text-white"
            href={shop.link ?? "#"}
            target="__blank"
          >
            {shop.title}
          </Button>
        ))}
      </div>

      {/* Uses */}
      <div className="uses ">
        <h2 className="text-center text-xl lg:text-2xl">{`Công dụng của sữa ${productName}`}</h2>
        <p className="mb-3 text-justify text-sm md:text-center ">
          {uses_summary}
        </p>
        <EmblaCarousel
          carouselKey="productUses"
          numberOfItemInSlide={1}
          slides={product_useses ?? []}
          hasArrows
          itemRender={ProductUsesItem}
        />

        <div className="main-uses-image mt-3 flex justify-center">
          <NextImage
            imageId={main_uses_image?.toString()}
            alt="uses-image"
            className="h-auto w-full select-none rounded-2xl"
          />
        </div>
      </div>

      {/* User manual */}
      <div className="grid items-center justify-items-center sm:grid-cols-3 md:grid-cols-2">
        <div className="hidden h-52 sm:block md:h-64">
          <NextImage
            imageId={productImage?.toString()}
            alt="user-manual-image"
            className="h-full w-auto select-none rounded-lg"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <p className="mb-2 w-full text-center text-xl lg:text-2xl">{`Hướng dẫn sử dụng sữa ${productName}`}</p>
          <div className="flex h-56 justify-center md:h-72  ">
            <NextImage
              imageId={user_manual?.toString()}
              alt="main-photo"
              className="h-full w-auto select-none rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Ingredient */}
      <Ingredient
        mainIngredient={main_ingredient}
        mineralIngredient={mineral_ingredient}
        vitaminIngredient={vitamin_ingredient}
        productName={productName}
      />
      {/* QnAs */}
      <div className="flex justify-center">
        <div className="w-full max-w-[40rem]">
          <h2 className="mb-4 text-center text-xl lg:text-2xl">
            {`Các câu hỏi thường gặp về ${productName}`}
          </h2>

          {/*  Answers */}
          <QnaAnswers productQnas={product_qnas ?? []} />
        </div>
      </div>

      {/* Testimonials */}
      <div className="">
        <h2 className="mb-3 text-center text-xl lg:text-2xl">
          {`Các mẹ nói gì về sữa ${productName}`}
        </h2>

        <EmblaCarousel
          className="mb-10"
          carouselKey="testimonial"
          hasArrows
          slides={testimonials ?? []}
          itemRender={TestimonialItem}
        />
      </div>
    </section>
  );
};

export default ProductArticle;

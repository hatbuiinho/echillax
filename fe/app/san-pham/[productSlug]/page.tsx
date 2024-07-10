"use client";
import { EmblaCarousel } from "@/components/ui/carousel/EmblaCarousel";
import { Testimonials } from "@/types/directusType";
import { getFileLinkFromDirectus } from "@/utils/directus";
import {
  Accordion,
  AccordionItem,
  Avatar,
  Button,
  Link,
} from "@nextui-org/react";
import clsx from "clsx";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import NextImage from "@/components/ui/nextImage";
import { ProductArticleDto } from "../action";
import ProductArticleService from "../services";

const ProductArticle = () => {
  const { productSlug } = useParams();
  const [productArticle, setProductArticle] = useState<ProductArticleDto>();

  useEffect(() => {
    ProductArticleService.getBySlug(productSlug as string).then((data) => {
      return setProductArticle(data);
    });
  }, [productSlug]);

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
  const ingredientButtons: { title: string; image?: string; code: string }[] = [
    {
      title: "Thành phần chính",
      image: main_ingredient,
      code: "main_ingredient",
    },
    { title: "Vitamin", image: vitamin_ingredient, code: "vitamin_ingredient" },
    {
      title: "Khoáng chất",
      image: mineral_ingredient,
      code: "mineral_ingredient",
    },
  ];

  const [selectedIngredient, setSelectedIngredient] = useState(
    ingredientButtons[0],
  );

  return (
    productArticle && (
      <section
        className={clsx(
          "container mx-auto flex max-w-[1000px] flex-col gap-7 px-3 text-primary",
        )}
      >
        {/* brand */}
        <div className="mt-10 grid grid-cols-2 items-center justify-center">
          <div className="flex justify-center">
            <div className="flex w-36 justify-center py-6 md:w-80 lg:w-[22rem]">
              <NextImage
                imageId={productImage?.toString()}
                alt="main-photo"
                className="block h-full w-auto select-none"
              />
            </div>
          </div>
          <div className="text-2xl md:text-2xl">{`Sản phẩm sữa ${productName}`}</div>
        </div>

        {/* feature */}
        <div className="grid items-center justify-center gap-5 md:grid-cols-2 md:flex-row">
          <div className="w-full flex-grow md:max-w-[450px]">
            <div className="main-video h-full w-full">
              <iframe
                style={{ aspectRatio: "16 / 9" }}
                className="w-full rounded-xl"
                src={main_video_link ?? ""}
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>

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
        <div className="uses mx-auto">
          <h2 className="text-center text-xl lg:text-2xl">{`Công dụng của sữa ${productName}`}</h2>
          <p className="mb-3 text-justify text-sm md:text-center ">
            {uses_summary}
          </p>
          <EmblaCarousel
            carouselKey="productUses"
            numberOfItemInSlide={1}
            slides={product_useses ?? []}
            hasArrows
            itemRender={(
              productUses: ProductArticleDto["product_useses"][],
            ) => {
              return productUses.map((uses, index) => (
                <div
                  key={index}
                  className={clsx(
                    "flex shrink-0 grow-0 basis-full select-none flex-col gap-2 px-2 ",
                    "md:basis-1/2 md:px-4 lg:basis-1/4",
                  )}
                >
                  <div className="flex h-32 justify-center">
                    <NextImage
                      className="h-full w-auto"
                      imageId={uses?.image?.toString()}
                    />
                  </div>
                  <div className="text-justify text-sm ">{uses?.uses_text}</div>
                </div>
              ));
            }}
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
        <div className="">
          <h2 className="mb-2 text-center text-xl lg:text-2xl">{`Thành phần dinh dưỡng sữa ${productName}`}</h2>

          <div className="grid grid-cols-3 justify-center gap-2 text-sm ">
            {ingredientButtons.map((ingredient) => (
              <div
                key={ingredient.code}
                onClick={() => {
                  setSelectedIngredient(ingredient);
                }}
                className={clsx(
                  "flex cursor-pointer items-center justify-center rounded-2xl p-1 text-center text-sm",
                  "hover:ring-2 md:p-2 ",
                  {
                    "bg-primary text-white":
                      ingredient.code === selectedIngredient.code,
                  },
                )}
              >
                {ingredient.title}
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            {ingredientButtons.map((ingredient) => (
              <div
                key={ingredient.code}
                className={clsx(
                  {
                    "opacity-0": ingredient.code !== selectedIngredient.code,
                    "opacity-500 md:w-2/3":
                      ingredient.code === selectedIngredient.code,
                    "w-0": ingredient.code !== selectedIngredient.code,
                  },
                  "flex justify-center duration-200 transition-transform-colors-opacity",
                )}
              >
                <NextImage
                  imageId={ingredient.image?.toString()}
                  alt="ingredient-photo"
                  className="block h-auto w-full select-none rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* QnAs */}
        <div className="flex justify-center">
          <div className="w-full max-w-[40rem]">
            <h2 className="mb-4 text-center text-xl lg:text-2xl">
              {`Các câu hỏi thường gặp về ${productName}`}
            </h2>

            <Accordion defaultExpandedKeys={[]}>
              {(product_qnas ?? [])?.map((qna) => (
                <AccordionItem
                  key={qna.id}
                  aria-label="Accordion 1"
                  subtitle=""
                  title={
                    <p className="text-medium text-primary">
                      {qna.question ?? ""}
                    </p>
                  }
                >
                  {qna.answer ? (
                    <p className="text-sm text-secondary">{qna.answer}</p>
                  ) : (
                    <div className="flex justify-center">
                      <NextImage
                        imageId={qna.image_answer?.toString()}
                        alt="qna-photo"
                        className="h-full w-auto select-none rounded-lg"
                      />
                    </div>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Testimonials */}
        <div className="">
          <h2 className="mb-3 text-center text-xl lg:text-2xl">
            {`Các mẹ nói gì về sữa ${productName}`}
          </h2>

          <EmblaCarousel
            carouselKey="testimonial"
            hasArrows
            slides={testimonials ?? []}
            itemRender={(testimonials: Testimonials[]) =>
              testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="shrink-0 grow-0 basis-full px-2 pt-10 sm:basis-1/2 md:basis-1/3"
                >
                  <div className="relative h-full overflow-visible rounded-xl bg-white p-3 pt-0 text-primary">
                    <Avatar
                      radius="full"
                      size="lg"
                      src={getFileLinkFromDirectus({
                        id: testimonial.avatar?.toString() ?? "",
                      })}
                      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                    <div className="mb-3 w-full pt-9 text-center">
                      {testimonial.name}
                    </div>
                    <div>
                      <div className="text-sm">{testimonial.message}</div>
                    </div>
                  </div>
                </div>
              ))
            }
          />
        </div>
      </section>
    )
  );
};

export default ProductArticle;

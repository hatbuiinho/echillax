"use client";
import React, { useState } from "react";
import clsx from "clsx";
import NextImage from "@/components/ui/nextImage/NextImage";

type Props = {
  mainIngredient?: string;
  vitaminIngredient?: string;
  mineralIngredient?: string;
  productName?: string;
};

const Ingredient = ({
  mainIngredient,
  vitaminIngredient,
  mineralIngredient,
  productName,
}: Props) => {
  const [ingredientButtons] = useState<
    { title: string; image?: string; code: string }[]
  >([
    {
      title: "Thành phần chính",
      image: mainIngredient,
      code: "main_ingredient",
    },
    { title: "Vitamin", image: vitaminIngredient, code: "vitamin_ingredient" },
    {
      title: "Khoáng chất",
      image: mineralIngredient,
      code: "mineral_ingredient",
    },
  ]);

  const [selectedIngredient, setSelectedIngredient] = useState(
    ingredientButtons[0]
  );
  return (
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
              }
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
              "flex justify-center duration-200 transition-transform-colors-opacity"
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
  );
};
export default Ingredient;

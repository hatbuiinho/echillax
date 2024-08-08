"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, Input, Spacer, Textarea } from "@nextui-org/react";
import clsx from "clsx";
import { fontBoosterBlack } from "@/config/fonts/fonts";

interface FormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  content: string;
}

const GetAdviseForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    city: "",
    content: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Handle form submission here (e.g., send data to a server)
  };

  return (
    <div className="mb-5 flex w-full">
      <div className="w-full rounded-3xl  bg-white p-6">
        <form
          className={clsx(
            "relative z-10 flex flex-col gap-1",
            fontBoosterBlack.className
          )}
          onSubmit={handleSubmit}
        >
          <Input
            fullWidth
            label="Tên gọi"
            placeholder=" "
            name="name"
            value={formData.name}
            onChange={handleChange}
            labelPlacement="outside"
            color="primary"
            variant="bordered"
            classNames={{
              inputWrapper: [
                "border-primary",
                "data-[hover=true]:border-primary-400",
                "group-data-[focus=true]:border-primary-400",
              ],
            }}
            required
          />
          <Spacer y={1} />
          <Input
            fullWidth
            label="Điện thoại"
            name="phone"
            placeholder=" "
            value={formData.phone}
            onChange={handleChange}
            labelPlacement="outside"
            color="primary"
            variant="bordered"
            classNames={{
              inputWrapper: [
                "border-primary",
                "data-[hover=true]:border-primary-400",
                "group-data-[focus=true]:border-primary-400",
              ],
            }}
            required
          />
          <Spacer y={1} />
          <Input
            fullWidth
            label="Email"
            type="email"
            name="email"
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
            labelPlacement="outside"
            color="primary"
            variant="bordered"
            classNames={{
              inputWrapper: [
                "border-primary",
                "data-[hover=true]:border-primary-400",
                "group-data-[focus=true]:border-primary-400",
              ],
            }}
            required
          />
          <Spacer y={1} />
          <Input
            fullWidth
            label="Tỉnh/Thành phố"
            name="city"
            placeholder=" "
            value={formData.city}
            onChange={handleChange}
            labelPlacement="outside"
            color="primary"
            variant="bordered"
            classNames={{
              inputWrapper: [
                "border-primary",
                "data-[hover=true]:border-primary-400",
                "group-data-[focus=true]:border-primary-400",
              ],
            }}
            required
          />
          <Spacer y={1} />
          <Textarea
            fullWidth
            label="Nội dung"
            name="content"
            value={formData.content}
            onChange={handleChange}
            labelPlacement="outside"
            color="primary"
            variant="bordered"
            classNames={{
              inputWrapper: [
                "border-primary",
                "data-[hover=true]:border-primary-400",
                "group-data-[focus=true]:border-primary-400",
              ],
            }}
            required
          />
          <Spacer y={4} />
          <Button color="primary" type="submit">
            Nhận tư vấn
          </Button>
        </form>
      </div>
    </div>
  );
};

export default GetAdviseForm;

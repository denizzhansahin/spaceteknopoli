"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

export default function FeaturesBentoProjeler() {
  return (
    <div className=" gap-4 grid grid-cols-12 grid-rows-2 px-8 mt-20">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Tarım
          </p>
          <h4 className="text-white font-medium text-large">
            AgroAlert System
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="AgroAlert-Sunum11102024-SON.png"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny text-white/60">Tarım için AI destekli çözümler üretiyoruz.</p>
            <p className="text-black text-tiny text-white/60">En güncel teknolojileri kullanın.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Hadi Öğrenin
          </Button>
        </CardFooter>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Güvenlik
          </p>
          <h4 className="text-white font-medium text-large">
            AI Destekli Plaka Tanıma Sistemi
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="1695238641742.jpeg"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny text-white/60">Eviniz, iyseriniz ve daha fazlası güvende.</p>
            <p className="text-black text-tiny text-white/60">Anlık ve güçlü bir sistem sahibi olun.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Hadi Öğrenin
          </Button>
        </CardFooter>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            E-Ticaret
          </p>
          <h4 className="text-white font-medium text-large">
            E-Ticaret AI Platformu
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="Gemini_Generated_Image_bq8eifbq8eifbq8e.jpeg"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny text-white/60">Ürününüz için en iyi içerik üretimini yapar.</p>
            <p className="text-black text-tiny text-white/60">Mağazanız için AI destekli yönetim sistemidir.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Hemen Keşfet!
          </Button>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Medya</p>
          <h4 className="text-white font-medium text-2xl">Haberler - WEB / Mobile App</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="1719661128037.jpeg"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-white/60 text-tiny">En güncel haberler için burası tam senlik! Kullanımı çok kolay!</p>
            <p className="text-white/60 text-tiny">Okumak öğrenmek için tam sana göre bir uygulama.</p>
          </div>
          <Button className="text-white/60" color="primary" radius="full" size="sm">
            Hemen Keşfet!
          </Button>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            KİTAPLAR
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            Kütüphane Yönetim Sistemi
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="271493098-cf88555f-653c-4170-a25e-82653edf4c9d.png"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="1695973319034.jpeg"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Artık kitaplığınız ve kütüphaneniz cebinizde!</p>
              <p className="text-tiny text-white/60">
                İstediğin kitabı ekle, oku ve paylaş!
              </p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Google Play ile Keşfet!
          </Button>
        </CardFooter>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Haberler
          </p>
          <h4 className="text-white font-medium text-large">
            Yozgat Haberler Uygulaması
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="1726314890940.jpeg"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="1726314890940.jpeg"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Yozgat şehrine özel haberleri okuyun!</p>
              <p className="text-tiny text-white/60">
                En güncel haberler burada
              </p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Google Play ile Keşfet!
          </Button>
        </CardFooter>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Turizm ve Şehirler
          </p>
          <h4 className="text-white font-medium text-large">
            Boğazlıyan Mobil V1.0
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="245741683-e02ee35f-d147-4fa2-833e-f4b3981fd692.jpg"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="245741683-e02ee35f-d147-4fa2-833e-f4b3981fd692.jpg"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Yozgat şehrine özel haberleri okuyun!</p>
              <p className="text-tiny text-white/60">
                En güncel haberler burada
              </p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Google Play ile Keşfet!
          </Button>
        </CardFooter>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            İş Dünyası
          </p>
          <h4 className="text-white font-medium text-large">
            RandevuAPP
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="268446453-032bfd1d-e822-4b8d-acb8-6899c3eaa680.png"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="268446453-032bfd1d-e822-4b8d-acb8-6899c3eaa680.png"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Yozgat şehrine özel haberleri okuyun!</p>
              <p className="text-tiny text-white/60">
                En güncel haberler burada
              </p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Google Play ile Keşfet!
          </Button>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Mobil Uygulama</p>
          <h4 className="text-white font-medium text-2xl">QR Code V1.0</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="logo_iconn.png"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="logo_iconn.png"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Yozgat şehrine özel haberleri okuyun!</p>
              <p className="text-tiny text-white/60">
                En güncel haberler burada
              </p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Google Play ile Keşfet!
          </Button>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Mobil Uygulama
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            Anket66
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="logo_icon_kutuphane (1).png"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="logo_icon_kutuphane (1).png"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Yozgat şehrine özel haberleri okuyun!</p>
              <p className="text-tiny text-white/60">
                En güncel haberler burada
              </p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Google Play ile Keşfet!
          </Button>
        </CardFooter>
      </Card>
      
    </div>
  );
}

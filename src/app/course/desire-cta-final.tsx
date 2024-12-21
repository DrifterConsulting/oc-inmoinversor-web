"use client";
import React from "react";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import { Button } from "@/components/ui/button";
import { GoCheck } from "react-icons/go";
import { TitleBlock } from "@/components/ui/titleblock";
import { Pencil, User, CreditCard, Rocket } from "lucide-react";

type CTAContent = {
  preheading: string;
  heading: string;
  subheading: string;
  name: string;
  quote: string;
};

const defaultCTAContent: CTAContent = {
  preheading: "Únete a Nosotros Ahora",
  heading: "¡Desbloquea Tu Potencial Hoy!",
  subheading: "Plazas limitadas disponibles. ¡Actúa rápido!",
  name: "Jane Doe",
  quote: "¡Este curso cambió mi vida!",
};

type DesireCTAFinalProps = {
  ctaContent?: CTAContent;
};

export default function DesireCTAFinal({
  ctaContent = defaultCTAContent,
}: DesireCTAFinalProps) {
  const pricingTiers = [
    {
      title: "Solo Online",
      price: 899,
      features: [
        "Acceso a todo el contenido del curso online",
        "Soporte comunitario",
        "Acceso durante 1 año",
        "Actualizaciones del curso",
        "Acceso a webinars",
        "Descargas del curso",
      ],
    },
    {
      title: "Acceso Completo",
      price: 2999,
      features: [
        "Todo en Online",
        "Mentoría personalizada",
        "Webinars exclusivos",
        "Oportunidades de co-inversión",
        "Estrategias avanzadas de inversión inmobiliaria",
        "Plan de inversión personalizado",
      ],
    },
  ];
  const steps = [
    {
      title: "Registro",
      description: "Completa el formulario de registro para comenzar.",
      icon: <Pencil size={18} />,
    },
    {
      title: "Entrevista Personal",
      description: "Reúnete con el instructor para una entrevista personal.",
      icon: <User size={18} />,
    },
    {
      title: "Pago",
      description: "Realiza el pago para asegurar tu plaza.",
      icon: <CreditCard size={18} />,
    },
    {
      title: "Inicio del Curso",
      description: "Comienza tu viaje con el curso.",
      icon: <Rocket size={18} />,
    },
  ];

  return (
    <Wrapper className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-lg shadow-lg">
      <InnerWrap className="text-center">
        <TitleBlock
          preheading={ctaContent.preheading}
          heading={ctaContent.heading}
          subheading={ctaContent.subheading}
          theme="dark"
          orientation="center"
        />

        <div className="rounded-2xl bg-slate-50 p-4 shadow-lg">
          <div className="relative mt-8 flex px-4">
            <ul className="flex justify-center gap-8 relative z-10 ">
              {steps.map((step, index) => (
                <li
                  key={index}
                  className="flex flex-col items-start justify-start text-left font-body"
                >
                  <p className="text-[11px] text-gray-500 pb-3">
                    Paso {index + 1}
                  </p>
                  <div className="text-4xl  rounded-full flex items-center justify-center text-black">
                    {step.icon}
                  </div>
                  <h4 className="text-sm font-medium font-body mt-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-800">{step.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl mt-8">
            {pricingTiers.map((tier, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-lg shadow-md flex items-start justify-start h-full flex-col"
              >
                <div className="flex flex-col items-start justify-start px-4">
                  <h3 className="text-xl font-light mb-2 tracking-tight">
                    {tier.title}
                  </h3>
                  <p className="text-4xl font-medium mb-4 font-body tracking-tighter">
                    €{tier.price.toLocaleString("de-DE")}
                  </p>
                </div>
                <ul className="text-left gap-1 py-4 px-4 flex h-full flex-col justify-start items-start">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs">
                      <GoCheck className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="bg-yellow-400 shadow-none text-black px-4 py-4 rounded-lg hover:bg-yellow-300 transition flex items-center justify-center w-full">
                  Comenzar
                </Button>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-500">
            100% de satisfacción garantizada o te devolvemos tu dinero.
          </p>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}

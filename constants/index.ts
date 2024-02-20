export const navLinks = [
  {
    label: "Home",
    route: "/",
    icon: "/assets/icons/home.svg",
  },
  {
    label: "Restaurar Imagen",
    route: "/transformations/add/restore",
    icon: "/assets/icons/image.svg",
  },
  {
    label: "Generar Relleno",
    route: "/transformations/add/fill",
    icon: "/assets/icons/stars.svg",
  },
  {
    label: "Remover Objeto",
    route: "/transformations/add/remove",
    icon: "/assets/icons/scan.svg",
  },
  {
    label: "Recolorear Objeto",
    route: "/transformations/add/recolor",
    icon: "/assets/icons/filter.svg",
  },
  {
    label: "Remover Fondo",
    route: "/transformations/add/removeBackground",
    icon: "/assets/icons/camera.svg",
  },
  {
    label: "Perfil",
    route: "/profile",
    icon: "/assets/icons/profile.svg",
  },
  {
    label: "Comprar Créditos",
    route: "/credits",
    icon: "/assets/icons/bag.svg",
  },
];

export const plans = [
  {
    _id: 1,
    name: "Gratis",
    icon: "/assets/icons/free-plan.svg",
    price: 0,
    credits: 20,
    inclusions: [
      {
        label: "20 Creditos Gratis",
        isIncluded: true,
      },
      {
        label: "Acceso Básico al Servicio",
        isIncluded: true,
      },
      {
        label: "Atención al cliente prioritaria",
        isIncluded: false,
      },
      {
        label: "Actualizaciones prioritarias",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: "Pack Pro",
    icon: "/assets/icons/free-plan.svg",
    price: 40,
    credits: 120,
    inclusions: [
      {
        label: "120 Creditos",
        isIncluded: true,
      },
      {
        label: "Acceso completo al servicio",
        isIncluded: true,
      },
      {
        label: "Atención al cliente prioritaria",
        isIncluded: true,
      },
      {
        label: "Actualizaciones prioritarias",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: "Pack Premium",
    icon: "/assets/icons/free-plan.svg",
    price: 199,
    credits: 2000,
    inclusions: [
      {
        label: "2000 Creditos",
        isIncluded: true,
      },
      {
        label: "Acceso completo al servicio",
        isIncluded: true,
      },
      {
        label: "Atención al cliente prioritaria",
        isIncluded: true,
      },
      {
        label: "Actualizaciones prioritarias",
        isIncluded: true,
      },
    ],
  },
];

export const transformationTypes = {
  restore: {
    type: "restore",
    title: "Restaurar Imagen",
    subTitle: "Restaura la calidad de la imagen utilizando IA",
    config: { restore: true },
    icon: "image.svg",
  },
  removeBackground: {
    type: "removeBackground",
    title: "Remover Fondo",
    subTitle: "Remueve el fondo de la imagen utilizando IA",
    config: { removeBackground: true },
    icon: "camera.svg",
  },
  fill: {
    type: "fill",
    title: "Generar Relleno",
    subTitle: "Genera relleno para imágenes utilizando IA",
    config: { fillBackground: true },
    icon: "stars.svg",
  },
  remove: {
    type: "remove",
    title: "Remover Objeto",
    subTitle: "Identifica y remueve objetos de la imagen",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: "scan.svg",
  },
  recolor: {
    type: "recolor",
    title: "Recolorear Objeto",
    subTitle: "Cambia el color de los objetos en la imagen",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "filter.svg",
  },
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Square (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Standard Portrait (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Phone Portrait (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};

export const creditFee = -1;

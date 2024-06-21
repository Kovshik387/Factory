export interface IDatabaseRecord {
    id: number;
    name: string;
    category: 'Эмаль' | 'Грунт' | 'Лак';
    image: string | null;
    expirationDate: string;
    description: string;
    colorName: string
}
// ЭмальГрунт
export interface PrimingEnamel extends IDatabaseRecord {
    color: {
        value: string,
        name: string
    }[];
    baseMaterial: string;
    skinView: string; // вид пленки
    viscosity: string; // вязкость
    adhesion: string; // адгезия
    appointment: string[]; // назначение
    properties: string[];
    volatiles: string; // летучие вещества
}

export interface Enamel extends IDatabaseRecord {
    resin: string; // смола
    solvent: string; // растворитель
    fireHazard: string; // пожароопастность
    coldResist: string; // морозостойкость
    viscosity: string; // вязкост
    density: string; // плотность
}
// Грунт
export interface Priming extends IDatabaseRecord {
    resin: string; // смола
    solvent: string; // растворитель
    fireHazard: string; // пожароопастность
    coldResist: string; // морозостойкость
    viscosity: string; // вязкост
    density: string; // плотность
}
// Лак
export interface Varnish extends IDatabaseRecord {
    resin: string; // смола
    solvent: string; // растворитель
    viscosity: string; // вязкост
    density: string; // плотность
    shine: string; // блеск
    fireHazard: string; // пожароопастность
    coldResist: string; // морозостойкость
}

export function findById(id: number): IDatabaseRecord | null {
    for (const item of Database) {
        if (item.id == id) return item;
    }
    return null;
}

export const Database: IDatabaseRecord[] = [
    <PrimingEnamel>{
        id: 1,
        name: 'Грунт-эмаль 3 в 1',
        category: "Грунт",
        image: `/product.png`,
        color: [
            { name: '7004', value: '#9fa0a2' },
            { name: '6005', value: '#013427' },
            { name: '8017', value: '#433028' },
            { name: '9005', value: '#000000' },
            { name: '7024', value: '#464b4f' },
            { name: '3005', value: '#850e24' },
            { name: '9010', value: '#ffffff' },
        ],
        adhesion: '1',
        skinView: 'Однородная глянцевая поверхность',
        colorName: 'RAL',
        baseMaterial: 'Модифицированный алкид',
        // viscosity: '80',
        volatiles: '55-60',
        expirationDate: '12 месяцев',
        description: `Однокомпонентная быстросохнущая антикоррозионная грунт-эмаль на основе
            модифицированных алкидных смол. Используется как самостоятельное покрытие для
            окрашивания подготовленных металлических поверхностей, подвергающихся атмосферным
            воздействиям. Применяется для окрашивания дорожной, сельскохозяйственной техники, а
            также для различных металлоконструкций. Совмещает в себе антикоррозионный грунт и
            финишную эмаль.`,
        properties: [
            'высокий глянец',
            'короткое время сушки',
            'простота нанесения',
            `стойкость к воздействию масел, бензина, дизельного топлива, кислот и щелочей в
            низких концентрациях`,
            'хорошие декоративные свойства'
        ],
        appointment: [
            'строительных металлоконструкций',
            'труб и трубопроводов',
            'железных мостов и мостовых конструкций',
            'эстакад и платформ',
            'металлических опор ЛЭП и антенных мачт'
        ]
    },
    // <Priming>{
    //     id: 2,
    //     name: "Грунт белый полиуретановый",
    //     category: "Грунт",
    //     image: null,
    //     resin: "Полиэфирполиол",
    //     solvent: "Смесь эфиров и кетонов",
    //     colorName: "85-90",
    //     viscosity: "От 80",
    //     density: "Не менее 1,3 кг/м3",
    //     fireHazard: "Да",
    //     coldResist: "Да",
    //     expirationDate: "12 месяцев",
    //     description: `Двухкомпонентный полиуретановый грунтовочный состав, белого цвета, предназначенный для
    //     грунтования МДФ. Образует быстросохнущее покрытиеc  легкой шлифовкой. Хорошо
    //     колеруется. Подходит для отделки МДФ заготовок c фрезеровкой. Используется для
    //     дальнейшего нанесения полиуретановых и акриловых эмалей.
        
    //     Рекомендуется для промышленного производства, индивидуальной и мелкосерийной отделки
    //     всех видов мебели, предметов интерьера, эксплуатируемых внутри помещений.
    //     Материал применяется для грунтования мебельных фасадов, дверей, предметов интерьера из
    //     массива древесины и плитных материалов (МДФ, ДСП)`
    // },
    // <Priming>{
    //     id: 3,
    //     name: "Грунт белый полиуретановый...",
    //     category: "Грунт",
    //     image: null,
    //     resin: "Полиэфирполиол",
    //     solvent: "Смесь эфиров и кетонов",
    //     viscosity: "От 80",
    //     density: "Не менее 1,2 кг/м³",
    //     fireHazard: "Да",
    //     colorName: "Белый",
    //     coldResist: "Да",
    //     expirationDate: "12 месяцев",
    //     description: `Двухкомпонентный полиуретановый грунтовочный состав белого цвета, предназначенный
    //     Для грунтования МДФ. Образует быстросохнущее покрытие с легкой шлифовкой. Хорошо
    //     колеруется. Подходит для отделки различных МДФ заготовок и массива. Используется для
    //     дальнейшего нанесения полиуретановых и акриловых эмалей.
        
    //     Рекомендуется для промышленного производства, индивидуальной и мелкосерийной отделки
    //     всех видов мебели, предметов интерьера, эксплуатируемых внутри помещений.
    //     Материал применяется для грунтования мебельных фасадов, дверей, предметов интерьера из
    //     массива древесины и плитных материалов (МДФ, ДСП).`
    // },
    // <Priming>{
    //     id: 4,
    //     name: "Грунт прозрачный полиуретановый",
    //     category: "Грунт",
    //     image: null,
    //     resin: "Полиэфирполиол",
    //     solvent: "Смесь эфиров и кетонов",
    //     viscosity: "От 80",
    //     density: "Не менее 0,8 кг/м³",
    //     colorName: "Прозрачный",
    //     fireHazard: "Да",
    //     coldResist: "Да",
    //     expirationDate: "12 месяцев",
    //     description: `Двухкомпонентный полиуретановый грунтовочный состав белого цвета, предназначенный
    //     Для грунтования МДФ. Образует быстросохнущее покрытие с легкой шлифовкой. Хорошо
    //     колеруется. Подходит для отделки различных МДФ заготовок и массива. Используется для
    //     дальнейшего нанесения полиуретановых и акриловых эмалей.

    //     Рекомендуется для промышленного производства, индивидуальной и мелкосерийной отделки
    //     всех видов мебели, предметов интерьера, эксплуатируемых внутри помещений.
    //     Материал применяется для грунтования мебельных фасадов, дверей, предметов интерьера из
    //     массива древесины и плитных материалов (МДФ, ДСП).`
    // },
    // <Priming>{
    //     id: 5,
    //     name: "Грунт черный полиуретановый",
    //     category: "Грунт",
    //     image: null,
    //     resin: "Полиэфирполиол",
    //     solvent: "Смесь эфиров и кетонов",
    //     viscosity: "От 80",
    //     density: "Не менее 1,2 кг/м³",
    //     colorName: "черный",
    //     fireHazard: "Да",
    //     coldResist: "Да",
    //     expirationDate: "12 месяцев",
    //     description: `Двухкомпонентный полиуретановый грунтовочный состав черного цвета, предназначенный
    //     для грунтования МДФ. Образует быстросохнущее покрытие с легкой шлифовкой. Хорошо
    //     колеруется. Подходит для отделки различных МДФ заготовок и массива. Используется для
    //     дальнейшего нанесения полиуретановых и акриловых эмалей.

    //     Рекомендуется для промышленного производства, индивидуальной и мелкосерийной отделки
    //     всех видов мебели, предметов интерьера, эксплуатируемых внутри помещений.
    //     Материал применяется для грунтования мебельных фасадов, дверей, предметов интерьера из
    //     массива древесины и плитных материалов (МДФ, ДСП).`
    // },
    <Priming>{
        id: 6,
        name: "Грунт-порозаполнитель",
        category: "Грунт",
        image: null,
        resin: "Полиэфирполиол",
        solvent: "Смесь эфиров и кетонов",
        viscosity: "От 80",
        density: "Не менее 1,2 кг/м³",
        colorName: "Полупрозрачный",
        fireHazard: "Да",
        coldResist: "Да",
        expirationDate: "12 месяцев",
        description: `Двухкомпонентный полиуретановый, полупрозрачный, перезаполняющий, грунтовочный
        состав, предназначенный для заполнения пор, а также для усиления адгезии и сокращения
        расхода последующих слоев. Образует прозрачное быстросохнущее покрытие с легкой
        шлифовкой. Хорошо колеруется. Подходит для отделки различных пород древесины и шпона.
        Используется для дальнейшего нанесения полиуретановых и акриловых продуктов.

        Рекомендуется для промышленного производства, индивидуальной и мелкосерийной отделки
        всех видов мебели и предметов интерьера, эксплуатируемых внутри помещений.
        Материал применяется для грунтования мебельных фасадов, паркета, дверей, предметов
        интерьера из массива древесины и шпона.`
    },
    // <Priming>{
    //     id: 7,
    //     name: "Грунт-изолятор",
    //     category: "Грунт",
    //     image: null,
    //     resin: "Полиэфирполиол",
    //     solvent: "Смесь эфиров и кетонов",
    //     viscosity: "От 120 секунд",
    //     density: "Не менее 1,2 кг/м³",
    //     colorName: "Полупрозрачный или белый",
    //     fireHazard: "Да",
    //     coldResist: "Да",
    //     expirationDate: "Основы 12 месяцев, отвердителя 6 месяцев",
    //     description: `Полупрозрачный или белый полиуретановый изолирующий грунт для МДФ. Используется для
    //     снижения впитывания последующих слоев, что позволяет сократить общий расход ЛКМ.
    //     Обеспечивает высокое качество получаемой поверхности. Покрытие обладает высокой
    //     скоростью сушки и хорошей шлифовкой. Защищает изделие от воздействия влаги в процессе
    //     использования.

    //     Рекомендуется для промышленного производства при отделке мебели и предметов интерьера,
    //     эксплуатируемых внутри помещений.
    //     Материал применяется для грунтования плитных материалов (МДФ, ХДФ и оргалит и др.).`
    // },
    // <Enamel>{
    //     id: 8,
    //     name: "Эмаль полиуретановая",
    //     category: "Эмаль",
    //     image: null,
    //     resin: "Полиэфирполиол",
    //     solvent: "Смесь эфиров и кетонов",
    //     viscosity: "От 80",
    //     density: "Не менее 1,2 кг/м³",
    //     colorName: "По согласованию с заказчиком",
    //     fireHazard: "Да",
    //     coldResist: "Да",
    //     expirationDate: "12 месяцев",
    //     description: `Двухкомпонентный полиуретановый финишный состав, предназначенный
    //     для финишной отделки МДФ. Образует быстросохнущее износостойкое покрытие. Хорошо
    //     колеруется. Подходит для отделки различных МДФ заготовок и массива. Выпускается
    //     различных цветов и степеней блеска по согласованию с заказчиком.

    //     Рекомендуется для промышленного производства, индивидуальной и мелкосерийной отделки
    //     всех видов мебели, предметов интерьера, эксплуатируемых внутри помещений.
    //     Материал применяется для финишной отделки мебельных фасадов, дверей, предметов
    //     интерьера из массива древесины и плитных материалов (МДФ, ДСП). Наносится по
    //     полиуретановому грунту.`
    // },
    <Varnish>{
        id: 9,
        name: "Лак акриловый",
        category: "Лак",
        image: null,
        resin: "Алкидно-уретановая",
        solvent: "Смесь эфиров и кетонов",
        // viscosity: "От 80",
        density: "Не менее 0,8 кг/м³",
        shine: "5% 10% 20% 30%",
        colorName: "Прозрачный",
        fireHazard: "Да",
        coldResist: "Да",
        expirationDate: "12 месяцев",
        description: `Двухкомпонентный прозрачный акриловый финишный состав для деревообработки.
        Предназначен для финишной отделки древесины. Лак- тиксотропный. Покрытие быстро сохнет,
        хорошо колеруется. Наносится по грунту.

        Рекомендуется для промышленного производства, индивидуальной, мелкосерийной отделки
        всех видов мебели и предметов интерьера, эксплуатируемых внутри помещений.
        Материал применяется для финишной отделки, паркета, дверей, предметов интерьера из
        массива древесины и плитных материалов.`
    }
]
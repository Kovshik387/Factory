export interface IDatabaseRecord {
    id: number;
    name: string;
    category: 'Эмаль' | 'Грунт' | 'Лак';
    image: string | null;
    expirationDate: string;
    description: string;
    colorName: string;
}
// Смола
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
    for(const item of Database) {
        if (item.id == id) return item;
    }
    return null;
}

export const Database: IDatabaseRecord[] = [
    <Enamel>{
        id: 1,
        name: 'Грунт-эмаль 3 в 1',
        category: "Эмаль",
        image: '/product.png',
        color: [
            { name: '7004', value: '#9fa0a2' },
            { name: '6005', value: '#013427' },
            { name: '8017', value: '#433028' },
            { name: '9005', value: '#000000' }
        ],
        adhesion: '1',
        skinView: 'Однородная глянцевая поверхность',
        colorName: 'RAL',
        baseMaterial: 'Модифицированный алкид',
        viscosity: '80',
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
    }
]
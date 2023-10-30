export const BASE_STAT = 10;

export const BASE_CHARACTER =  {
    'Strength': BASE_STAT,
    'Dexterity': BASE_STAT,
    'Constitution': BASE_STAT,
    'Intelligence': BASE_STAT,
    'Wisdom': BASE_STAT,
    'Charisma': BASE_STAT,
    'TotalBaseAttributes': BASE_STAT * 6,
    'Skills': {
       'Acrobatics': 0,
       'Animal Handling': 0,
       'Arcana': 0,
       'Athletics': 0,
       'Deception': 0,
       'History': 0,
       'Insight': 0,
       'Intimidation': 0,
       'Investigation': 0,
       'Medicine': 0,
       'Nature': 0,
       'Perception': 0,
       'Performance': 0,
       'Persuasion': 0,
       'Religion': 0,
       'Sleight of Hand': 0,
       'Stealth': 0,
       'Survival': 0,
    },
};

export const getModifier = (attributeVal) => Math.floor((attributeVal - BASE_STAT) / 2);


export const ATTRIBUTE_LIST = [
    'Strength',
    'Dexterity',
    'Constitution',
    'Intelligence',
    'Wisdom',
    'Charisma',
];

export const CLASS_LIST = {
    'Barbarian': {
        'Strength': 14,
        'Dexterity': 9,
        'Constitution': 9,
        'Intelligence': 9,
        'Wisdom': 9,
        'Charisma': 9,
    },
    'Wizard': {
        'Strength': 9,
        'Dexterity': 9,
        'Constitution': 9,
        'Intelligence': 14,
        'Wisdom': 9,
        'Charisma': 9,
    },
    'Bard': {
        'Strength': 9,
        'Dexterity': 9,
        'Constitution': 9,
        'Intelligence': 9,
        'Wisdom': 9,
        'Charisma': 14,
    },
}
export const classCheck = (character, className) => {
    const classStats = CLASS_LIST[className];
    if (!classStats) return false;
    return !Object.keys(classStats).some((attribute) => character[attribute] < classStats[attribute])
}
export const SKILL_LIST = [
    { name: 'Acrobatics', attributeModifier: 'Dexterity' },
    { name: 'Animal Handling', attributeModifier: 'Wisdom' },
    { name: 'Arcana', attributeModifier: 'Intelligence' },
    { name: 'Athletics', attributeModifier: 'Strength' },
    { name: 'Deception', attributeModifier: 'Charisma' },
    { name: 'History', attributeModifier: 'Intelligence' },
    { name: 'Insight', attributeModifier: 'Wisdom' },
    { name: 'Intimidation', attributeModifier: 'Charisma' },
    { name: 'Investigation', attributeModifier: 'Intelligence' },
    { name: 'Medicine', attributeModifier: 'Wisdom' },
    { name: 'Nature', attributeModifier: 'Intelligence' },
    { name: 'Perception', attributeModifier: 'Wisdom' },
    { name: 'Performance', attributeModifier: 'Charisma' },
    { name: 'Persuasion', attributeModifier: 'Charisma' },
    { name: 'Religion', attributeModifier: 'Intelligence' },
    { name: 'Sleight of Hand', attributeModifier: 'Dexterity' },
    { name: 'Stealth', attributeModifier: 'Dexterity' },
    { name: 'Survival', attributeModifier: 'Wisdom' },

]